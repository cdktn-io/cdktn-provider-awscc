# `mediapackagePackagingConfiguration` Submodule <a name="`mediapackagePackagingConfiguration` Submodule" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediapackagePackagingConfiguration <a name="MediapackagePackagingConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration awscc_mediapackage_packaging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfiguration(Construct Scope, string Id, MediapackagePackagingConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig">MediapackagePackagingConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig">MediapackagePackagingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putCmafPackage">PutCmafPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putDashPackage">PutDashPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putHlsPackage">PutHlsPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putMssPackage">PutMssPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetCmafPackage">ResetCmafPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetDashPackage">ResetDashPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetHlsPackage">ResetHlsPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetMssPackage">ResetMssPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCmafPackage` <a name="PutCmafPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putCmafPackage"></a>

```csharp
private void PutCmafPackage(MediapackagePackagingConfigurationCmafPackage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putCmafPackage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage">MediapackagePackagingConfigurationCmafPackage</a>

---

##### `PutDashPackage` <a name="PutDashPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putDashPackage"></a>

```csharp
private void PutDashPackage(MediapackagePackagingConfigurationDashPackage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putDashPackage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage">MediapackagePackagingConfigurationDashPackage</a>

---

##### `PutHlsPackage` <a name="PutHlsPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putHlsPackage"></a>

```csharp
private void PutHlsPackage(MediapackagePackagingConfigurationHlsPackage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putHlsPackage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage">MediapackagePackagingConfigurationHlsPackage</a>

---

##### `PutMssPackage` <a name="PutMssPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putMssPackage"></a>

```csharp
private void PutMssPackage(MediapackagePackagingConfigurationMssPackage Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putMssPackage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage">MediapackagePackagingConfigurationMssPackage</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putTags"></a>

```csharp
private void PutTags(IResolvable|MediapackagePackagingConfigurationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a>[]

---

##### `ResetCmafPackage` <a name="ResetCmafPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetCmafPackage"></a>

```csharp
private void ResetCmafPackage()
```

##### `ResetDashPackage` <a name="ResetDashPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetDashPackage"></a>

```csharp
private void ResetDashPackage()
```

##### `ResetHlsPackage` <a name="ResetHlsPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetHlsPackage"></a>

```csharp
private void ResetHlsPackage()
```

##### `ResetMssPackage` <a name="ResetMssPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetMssPackage"></a>

```csharp
private void ResetMssPackage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediapackagePackagingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediapackagePackagingConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediapackagePackagingConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediapackagePackagingConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediapackagePackagingConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MediapackagePackagingConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediapackagePackagingConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediapackagePackagingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MediapackagePackagingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.cmafPackage">CmafPackage</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference">MediapackagePackagingConfigurationCmafPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.dashPackage">DashPackage</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference">MediapackagePackagingConfigurationDashPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.hlsPackage">HlsPackage</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference">MediapackagePackagingConfigurationHlsPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.mssPackage">MssPackage</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference">MediapackagePackagingConfigurationMssPackageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList">MediapackagePackagingConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.cmafPackageInput">CmafPackageInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage">MediapackagePackagingConfigurationCmafPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.dashPackageInput">DashPackageInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage">MediapackagePackagingConfigurationDashPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.hlsPackageInput">HlsPackageInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage">MediapackagePackagingConfigurationHlsPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.mssPackageInput">MssPackageInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage">MediapackagePackagingConfigurationMssPackage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingConfigurationIdInput">PackagingConfigurationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingGroupIdInput">PackagingGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingConfigurationId">PackagingConfigurationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingGroupId">PackagingGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CmafPackage`<sup>Required</sup> <a name="CmafPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.cmafPackage"></a>

```csharp
public MediapackagePackagingConfigurationCmafPackageOutputReference CmafPackage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference">MediapackagePackagingConfigurationCmafPackageOutputReference</a>

---

##### `DashPackage`<sup>Required</sup> <a name="DashPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.dashPackage"></a>

```csharp
public MediapackagePackagingConfigurationDashPackageOutputReference DashPackage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference">MediapackagePackagingConfigurationDashPackageOutputReference</a>

---

##### `HlsPackage`<sup>Required</sup> <a name="HlsPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.hlsPackage"></a>

```csharp
public MediapackagePackagingConfigurationHlsPackageOutputReference HlsPackage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference">MediapackagePackagingConfigurationHlsPackageOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MssPackage`<sup>Required</sup> <a name="MssPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.mssPackage"></a>

```csharp
public MediapackagePackagingConfigurationMssPackageOutputReference MssPackage { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference">MediapackagePackagingConfigurationMssPackageOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.tags"></a>

```csharp
public MediapackagePackagingConfigurationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList">MediapackagePackagingConfigurationTagsList</a>

---

##### `CmafPackageInput`<sup>Optional</sup> <a name="CmafPackageInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.cmafPackageInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationCmafPackage CmafPackageInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage">MediapackagePackagingConfigurationCmafPackage</a>

---

##### `DashPackageInput`<sup>Optional</sup> <a name="DashPackageInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.dashPackageInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationDashPackage DashPackageInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage">MediapackagePackagingConfigurationDashPackage</a>

---

##### `HlsPackageInput`<sup>Optional</sup> <a name="HlsPackageInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.hlsPackageInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationHlsPackage HlsPackageInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage">MediapackagePackagingConfigurationHlsPackage</a>

---

##### `MssPackageInput`<sup>Optional</sup> <a name="MssPackageInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.mssPackageInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationMssPackage MssPackageInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage">MediapackagePackagingConfigurationMssPackage</a>

---

##### `PackagingConfigurationIdInput`<sup>Optional</sup> <a name="PackagingConfigurationIdInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingConfigurationIdInput"></a>

```csharp
public string PackagingConfigurationIdInput { get; }
```

- *Type:* string

---

##### `PackagingGroupIdInput`<sup>Optional</sup> <a name="PackagingGroupIdInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingGroupIdInput"></a>

```csharp
public string PackagingGroupIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.tagsInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a>[]

---

##### `PackagingConfigurationId`<sup>Required</sup> <a name="PackagingConfigurationId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingConfigurationId"></a>

```csharp
public string PackagingConfigurationId { get; }
```

- *Type:* string

---

##### `PackagingGroupId`<sup>Required</sup> <a name="PackagingGroupId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.packagingGroupId"></a>

```csharp
public string PackagingGroupId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediapackagePackagingConfigurationCmafPackage <a name="MediapackagePackagingConfigurationCmafPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationCmafPackage {
    MediapackagePackagingConfigurationCmafPackageEncryption Encryption = null,
    IResolvable|MediapackagePackagingConfigurationCmafPackageHlsManifests[] HlsManifests = null,
    bool|IResolvable IncludeEncoderConfigurationInSegments = null,
    double SegmentDurationSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption">MediapackagePackagingConfigurationCmafPackageEncryption</a></code> | A CMAF encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.hlsManifests">HlsManifests</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a>[]</code> | A list of HLS manifest configurations. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.includeEncoderConfigurationInSegments">IncludeEncoderConfigurationInSegments</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>double</code> | Duration (in seconds) of each fragment. |

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.encryption"></a>

```csharp
public MediapackagePackagingConfigurationCmafPackageEncryption Encryption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption">MediapackagePackagingConfigurationCmafPackageEncryption</a>

A CMAF encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}

---

##### `HlsManifests`<sup>Optional</sup> <a name="HlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.hlsManifests"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationCmafPackageHlsManifests[] HlsManifests { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a>[]

A list of HLS manifest configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#hls_manifests MediapackagePackagingConfiguration#hls_manifests}

---

##### `IncludeEncoderConfigurationInSegments`<sup>Optional</sup> <a name="IncludeEncoderConfigurationInSegments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.includeEncoderConfigurationInSegments"></a>

```csharp
public bool|IResolvable IncludeEncoderConfigurationInSegments { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment.

This lets you use different SPS/PPS/VPS settings for your assets during content playback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#include_encoder_configuration_in_segments MediapackagePackagingConfiguration#include_encoder_configuration_in_segments}

---

##### `SegmentDurationSeconds`<sup>Optional</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage.property.segmentDurationSeconds"></a>

```csharp
public double SegmentDurationSeconds { get; set; }
```

- *Type:* double

Duration (in seconds) of each fragment.

Actual fragments will be rounded to the nearest multiple of the source fragment duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}

---

### MediapackagePackagingConfigurationCmafPackageEncryption <a name="MediapackagePackagingConfigurationCmafPackageEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationCmafPackageEncryption {
    MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider SpekeKeyProvider = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a></code> | A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys. |

---

##### `SpekeKeyProvider`<sup>Optional</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption.property.spekeKeyProvider"></a>

```csharp
public MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider SpekeKeyProvider { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a>

A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}

---

### MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider <a name="MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider {
    MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration EncryptionContractConfiguration = null,
    string RoleArn = null,
    string[] SystemIds = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.roleArn">RoleArn</a></code> | <code>string</code> | An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.systemIds">SystemIds</a></code> | <code>string[]</code> | The system IDs to include in key requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.url">Url</a></code> | <code>string</code> | The URL of the external key provider service. |

---

##### `EncryptionContractConfiguration`<sup>Optional</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration"></a>

```csharp
public MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration EncryptionContractConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}

---

##### `SystemIds`<sup>Optional</sup> <a name="SystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

```csharp
public string[] SystemIds { get; set; }
```

- *Type:* string[]

The system IDs to include in key requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL of the external key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}

---

### MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {
    string PresetSpeke20Audio = null,
    string PresetSpeke20Video = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>string</code> | A collection of audio encryption presets. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>string</code> | A collection of video encryption presets. |

---

##### `PresetSpeke20Audio`<sup>Optional</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio"></a>

```csharp
public string PresetSpeke20Audio { get; set; }
```

- *Type:* string

A collection of audio encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}

---

##### `PresetSpeke20Video`<sup>Optional</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video"></a>

```csharp
public string PresetSpeke20Video { get; set; }
```

- *Type:* string

A collection of video encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}

---

### MediapackagePackagingConfigurationCmafPackageHlsManifests <a name="MediapackagePackagingConfigurationCmafPackageHlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationCmafPackageHlsManifests {
    string AdMarkers = null,
    bool|IResolvable IncludeIframeOnlyStream = null,
    string ManifestName = null,
    double ProgramDateTimeIntervalSeconds = null,
    bool|IResolvable RepeatExtXKey = null,
    MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection StreamSelection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.adMarkers">AdMarkers</a></code> | <code>string</code> | This setting controls how ad markers are included in the packaged OriginEndpoint. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.includeIframeOnlyStream">IncludeIframeOnlyStream</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When enabled, an I-Frame only stream will be included in the output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.manifestName">ManifestName</a></code> | <code>string</code> | An optional string to include in the name of the manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.programDateTimeIntervalSeconds">ProgramDateTimeIntervalSeconds</a></code> | <code>double</code> | The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.repeatExtXKey">RepeatExtXKey</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When enabled, the EXT-X-KEY tag will be repeated in output manifests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a></code> | A StreamSelection configuration. |

---

##### `AdMarkers`<sup>Optional</sup> <a name="AdMarkers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.adMarkers"></a>

```csharp
public string AdMarkers { get; set; }
```

- *Type:* string

This setting controls how ad markers are included in the packaged OriginEndpoint.

"NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#ad_markers MediapackagePackagingConfiguration#ad_markers}

---

##### `IncludeIframeOnlyStream`<sup>Optional</sup> <a name="IncludeIframeOnlyStream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.includeIframeOnlyStream"></a>

```csharp
public bool|IResolvable IncludeIframeOnlyStream { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When enabled, an I-Frame only stream will be included in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#include_iframe_only_stream MediapackagePackagingConfiguration#include_iframe_only_stream}

---

##### `ManifestName`<sup>Optional</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.manifestName"></a>

```csharp
public string ManifestName { get; set; }
```

- *Type:* string

An optional string to include in the name of the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#manifest_name MediapackagePackagingConfiguration#manifest_name}

---

##### `ProgramDateTimeIntervalSeconds`<sup>Optional</sup> <a name="ProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.programDateTimeIntervalSeconds"></a>

```csharp
public double ProgramDateTimeIntervalSeconds { get; set; }
```

- *Type:* double

The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests.

Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#program_date_time_interval_seconds MediapackagePackagingConfiguration#program_date_time_interval_seconds}

---

##### `RepeatExtXKey`<sup>Optional</sup> <a name="RepeatExtXKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.repeatExtXKey"></a>

```csharp
public bool|IResolvable RepeatExtXKey { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When enabled, the EXT-X-KEY tag will be repeated in output manifests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#repeat_ext_x_key MediapackagePackagingConfiguration#repeat_ext_x_key}

---

##### `StreamSelection`<sup>Optional</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests.property.streamSelection"></a>

```csharp
public MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection StreamSelection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a>

A StreamSelection configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_selection MediapackagePackagingConfiguration#stream_selection}

---

### MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection <a name="MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection {
    double MaxVideoBitsPerSecond = null,
    double MinVideoBitsPerSecond = null,
    string StreamOrder = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>double</code> | The maximum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>double</code> | The minimum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.property.streamOrder">StreamOrder</a></code> | <code>string</code> | A directive that determines the order of streams in the output. |

---

##### `MaxVideoBitsPerSecond`<sup>Optional</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.property.maxVideoBitsPerSecond"></a>

```csharp
public double MaxVideoBitsPerSecond { get; set; }
```

- *Type:* double

The maximum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}

---

##### `MinVideoBitsPerSecond`<sup>Optional</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.property.minVideoBitsPerSecond"></a>

```csharp
public double MinVideoBitsPerSecond { get; set; }
```

- *Type:* double

The minimum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}

---

##### `StreamOrder`<sup>Optional</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection.property.streamOrder"></a>

```csharp
public string StreamOrder { get; set; }
```

- *Type:* string

A directive that determines the order of streams in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}

---

### MediapackagePackagingConfigurationConfig <a name="MediapackagePackagingConfigurationConfig" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string PackagingConfigurationId,
    string PackagingGroupId,
    MediapackagePackagingConfigurationCmafPackage CmafPackage = null,
    MediapackagePackagingConfigurationDashPackage DashPackage = null,
    MediapackagePackagingConfigurationHlsPackage HlsPackage = null,
    MediapackagePackagingConfigurationMssPackage MssPackage = null,
    IResolvable|MediapackagePackagingConfigurationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.packagingConfigurationId">PackagingConfigurationId</a></code> | <code>string</code> | The ID of the PackagingConfiguration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.packagingGroupId">PackagingGroupId</a></code> | <code>string</code> | The ID of a PackagingGroup. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.cmafPackage">CmafPackage</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage">MediapackagePackagingConfigurationCmafPackage</a></code> | A CMAF packaging configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.dashPackage">DashPackage</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage">MediapackagePackagingConfigurationDashPackage</a></code> | A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.hlsPackage">HlsPackage</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage">MediapackagePackagingConfigurationHlsPackage</a></code> | An HTTP Live Streaming (HLS) packaging configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.mssPackage">MssPackage</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage">MediapackagePackagingConfigurationMssPackage</a></code> | A Microsoft Smooth Streaming (MSS) PackagingConfiguration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a>[]</code> | A collection of tags associated with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `PackagingConfigurationId`<sup>Required</sup> <a name="PackagingConfigurationId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.packagingConfigurationId"></a>

```csharp
public string PackagingConfigurationId { get; set; }
```

- *Type:* string

The ID of the PackagingConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#packaging_configuration_id MediapackagePackagingConfiguration#packaging_configuration_id}

---

##### `PackagingGroupId`<sup>Required</sup> <a name="PackagingGroupId" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.packagingGroupId"></a>

```csharp
public string PackagingGroupId { get; set; }
```

- *Type:* string

The ID of a PackagingGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#packaging_group_id MediapackagePackagingConfiguration#packaging_group_id}

---

##### `CmafPackage`<sup>Optional</sup> <a name="CmafPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.cmafPackage"></a>

```csharp
public MediapackagePackagingConfigurationCmafPackage CmafPackage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage">MediapackagePackagingConfigurationCmafPackage</a>

A CMAF packaging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#cmaf_package MediapackagePackagingConfiguration#cmaf_package}

---

##### `DashPackage`<sup>Optional</sup> <a name="DashPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.dashPackage"></a>

```csharp
public MediapackagePackagingConfigurationDashPackage DashPackage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage">MediapackagePackagingConfigurationDashPackage</a>

A Dynamic Adaptive Streaming over HTTP (DASH) packaging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#dash_package MediapackagePackagingConfiguration#dash_package}

---

##### `HlsPackage`<sup>Optional</sup> <a name="HlsPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.hlsPackage"></a>

```csharp
public MediapackagePackagingConfigurationHlsPackage HlsPackage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage">MediapackagePackagingConfigurationHlsPackage</a>

An HTTP Live Streaming (HLS) packaging configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#hls_package MediapackagePackagingConfiguration#hls_package}

---

##### `MssPackage`<sup>Optional</sup> <a name="MssPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.mssPackage"></a>

```csharp
public MediapackagePackagingConfigurationMssPackage MssPackage { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage">MediapackagePackagingConfigurationMssPackage</a>

A Microsoft Smooth Streaming (MSS) PackagingConfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#mss_package MediapackagePackagingConfiguration#mss_package}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationConfig.property.tags"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a>[]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#tags MediapackagePackagingConfiguration#tags}

---

### MediapackagePackagingConfigurationDashPackage <a name="MediapackagePackagingConfigurationDashPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationDashPackage {
    IResolvable|MediapackagePackagingConfigurationDashPackageDashManifests[] DashManifests = null,
    MediapackagePackagingConfigurationDashPackageEncryption Encryption = null,
    bool|IResolvable IncludeEncoderConfigurationInSegments = null,
    bool|IResolvable IncludeIframeOnlyStream = null,
    string[] PeriodTriggers = null,
    double SegmentDurationSeconds = null,
    string SegmentTemplateFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.dashManifests">DashManifests</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a>[]</code> | A list of DASH manifest configurations. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption">MediapackagePackagingConfigurationDashPackageEncryption</a></code> | A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.includeEncoderConfigurationInSegments">IncludeEncoderConfigurationInSegments</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.includeIframeOnlyStream">IncludeIframeOnlyStream</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When enabled, an I-Frame only stream will be included in the output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.periodTriggers">PeriodTriggers</a></code> | <code>string[]</code> | A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD) will be partitioned into multiple periods. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>double</code> | Duration (in seconds) of each fragment. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.segmentTemplateFormat">SegmentTemplateFormat</a></code> | <code>string</code> | Determines the type of SegmentTemplate included in the Media Presentation Description (MPD). |

---

##### `DashManifests`<sup>Optional</sup> <a name="DashManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.dashManifests"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationDashPackageDashManifests[] DashManifests { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a>[]

A list of DASH manifest configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#dash_manifests MediapackagePackagingConfiguration#dash_manifests}

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.encryption"></a>

```csharp
public MediapackagePackagingConfigurationDashPackageEncryption Encryption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption">MediapackagePackagingConfigurationDashPackageEncryption</a>

A Dynamic Adaptive Streaming over HTTP (DASH) encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}

---

##### `IncludeEncoderConfigurationInSegments`<sup>Optional</sup> <a name="IncludeEncoderConfigurationInSegments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.includeEncoderConfigurationInSegments"></a>

```csharp
public bool|IResolvable IncludeEncoderConfigurationInSegments { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When includeEncoderConfigurationInSegments is set to true, MediaPackage places your encoder's Sequence Parameter Set (SPS), Picture Parameter Set (PPS), and Video Parameter Set (VPS) metadata in every video segment instead of in the init fragment.

This lets you use different SPS/PPS/VPS settings for your assets during content playback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#include_encoder_configuration_in_segments MediapackagePackagingConfiguration#include_encoder_configuration_in_segments}

---

##### `IncludeIframeOnlyStream`<sup>Optional</sup> <a name="IncludeIframeOnlyStream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.includeIframeOnlyStream"></a>

```csharp
public bool|IResolvable IncludeIframeOnlyStream { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When enabled, an I-Frame only stream will be included in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#include_iframe_only_stream MediapackagePackagingConfiguration#include_iframe_only_stream}

---

##### `PeriodTriggers`<sup>Optional</sup> <a name="PeriodTriggers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.periodTriggers"></a>

```csharp
public string[] PeriodTriggers { get; set; }
```

- *Type:* string[]

A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD) will be partitioned into multiple periods.

If empty, the content will not be partitioned into more than one period. If the list contains "ADS", new periods will be created where the Asset contains SCTE-35 ad markers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#period_triggers MediapackagePackagingConfiguration#period_triggers}

---

##### `SegmentDurationSeconds`<sup>Optional</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.segmentDurationSeconds"></a>

```csharp
public double SegmentDurationSeconds { get; set; }
```

- *Type:* double

Duration (in seconds) of each fragment.

Actual fragments will be rounded to the nearest multiple of the source fragment duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}

---

##### `SegmentTemplateFormat`<sup>Optional</sup> <a name="SegmentTemplateFormat" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage.property.segmentTemplateFormat"></a>

```csharp
public string SegmentTemplateFormat { get; set; }
```

- *Type:* string

Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).

When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs. When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#segment_template_format MediapackagePackagingConfiguration#segment_template_format}

---

### MediapackagePackagingConfigurationDashPackageDashManifests <a name="MediapackagePackagingConfigurationDashPackageDashManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationDashPackageDashManifests {
    string ManifestLayout = null,
    string ManifestName = null,
    double MinBufferTimeSeconds = null,
    string Profile = null,
    string ScteMarkersSource = null,
    MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection StreamSelection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.manifestLayout">ManifestLayout</a></code> | <code>string</code> | Determines the position of some tags in the Media Presentation Description (MPD). |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.manifestName">ManifestName</a></code> | <code>string</code> | An optional string to include in the name of the manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.minBufferTimeSeconds">MinBufferTimeSeconds</a></code> | <code>double</code> | Minimum duration (in seconds) that a player will buffer media before starting the presentation. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.profile">Profile</a></code> | <code>string</code> | The Dynamic Adaptive Streaming over HTTP (DASH) profile type. When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.scteMarkersSource">ScteMarkersSource</a></code> | <code>string</code> | The source of scte markers used. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a></code> | A StreamSelection configuration. |

---

##### `ManifestLayout`<sup>Optional</sup> <a name="ManifestLayout" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.manifestLayout"></a>

```csharp
public string ManifestLayout { get; set; }
```

- *Type:* string

Determines the position of some tags in the Media Presentation Description (MPD).

When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation. When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#manifest_layout MediapackagePackagingConfiguration#manifest_layout}

---

##### `ManifestName`<sup>Optional</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.manifestName"></a>

```csharp
public string ManifestName { get; set; }
```

- *Type:* string

An optional string to include in the name of the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#manifest_name MediapackagePackagingConfiguration#manifest_name}

---

##### `MinBufferTimeSeconds`<sup>Optional</sup> <a name="MinBufferTimeSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.minBufferTimeSeconds"></a>

```csharp
public double MinBufferTimeSeconds { get; set; }
```

- *Type:* double

Minimum duration (in seconds) that a player will buffer media before starting the presentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#min_buffer_time_seconds MediapackagePackagingConfiguration#min_buffer_time_seconds}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.profile"></a>

```csharp
public string Profile { get; set; }
```

- *Type:* string

The Dynamic Adaptive Streaming over HTTP (DASH) profile type. When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#profile MediapackagePackagingConfiguration#profile}

---

##### `ScteMarkersSource`<sup>Optional</sup> <a name="ScteMarkersSource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.scteMarkersSource"></a>

```csharp
public string ScteMarkersSource { get; set; }
```

- *Type:* string

The source of scte markers used.

When set to SEGMENTS, the scte markers are sourced from the segments of the ingested content. When set to MANIFEST, the scte markers are sourced from the manifest of the ingested content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#scte_markers_source MediapackagePackagingConfiguration#scte_markers_source}

---

##### `StreamSelection`<sup>Optional</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests.property.streamSelection"></a>

```csharp
public MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection StreamSelection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a>

A StreamSelection configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_selection MediapackagePackagingConfiguration#stream_selection}

---

### MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection <a name="MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection {
    double MaxVideoBitsPerSecond = null,
    double MinVideoBitsPerSecond = null,
    string StreamOrder = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>double</code> | The maximum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>double</code> | The minimum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.property.streamOrder">StreamOrder</a></code> | <code>string</code> | A directive that determines the order of streams in the output. |

---

##### `MaxVideoBitsPerSecond`<sup>Optional</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.property.maxVideoBitsPerSecond"></a>

```csharp
public double MaxVideoBitsPerSecond { get; set; }
```

- *Type:* double

The maximum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}

---

##### `MinVideoBitsPerSecond`<sup>Optional</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.property.minVideoBitsPerSecond"></a>

```csharp
public double MinVideoBitsPerSecond { get; set; }
```

- *Type:* double

The minimum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}

---

##### `StreamOrder`<sup>Optional</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection.property.streamOrder"></a>

```csharp
public string StreamOrder { get; set; }
```

- *Type:* string

A directive that determines the order of streams in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}

---

### MediapackagePackagingConfigurationDashPackageEncryption <a name="MediapackagePackagingConfigurationDashPackageEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationDashPackageEncryption {
    MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider SpekeKeyProvider = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a></code> | A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys. |

---

##### `SpekeKeyProvider`<sup>Optional</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption.property.spekeKeyProvider"></a>

```csharp
public MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider SpekeKeyProvider { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a>

A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}

---

### MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider <a name="MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider {
    MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration EncryptionContractConfiguration = null,
    string RoleArn = null,
    string[] SystemIds = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.roleArn">RoleArn</a></code> | <code>string</code> | An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.systemIds">SystemIds</a></code> | <code>string[]</code> | The system IDs to include in key requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.url">Url</a></code> | <code>string</code> | The URL of the external key provider service. |

---

##### `EncryptionContractConfiguration`<sup>Optional</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration"></a>

```csharp
public MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration EncryptionContractConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}

---

##### `SystemIds`<sup>Optional</sup> <a name="SystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

```csharp
public string[] SystemIds { get; set; }
```

- *Type:* string[]

The system IDs to include in key requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL of the external key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}

---

### MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {
    string PresetSpeke20Audio = null,
    string PresetSpeke20Video = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>string</code> | A collection of audio encryption presets. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>string</code> | A collection of video encryption presets. |

---

##### `PresetSpeke20Audio`<sup>Optional</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio"></a>

```csharp
public string PresetSpeke20Audio { get; set; }
```

- *Type:* string

A collection of audio encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}

---

##### `PresetSpeke20Video`<sup>Optional</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video"></a>

```csharp
public string PresetSpeke20Video { get; set; }
```

- *Type:* string

A collection of video encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}

---

### MediapackagePackagingConfigurationHlsPackage <a name="MediapackagePackagingConfigurationHlsPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationHlsPackage {
    MediapackagePackagingConfigurationHlsPackageEncryption Encryption = null,
    IResolvable|MediapackagePackagingConfigurationHlsPackageHlsManifests[] HlsManifests = null,
    bool|IResolvable IncludeDvbSubtitles = null,
    double SegmentDurationSeconds = null,
    bool|IResolvable UseAudioRenditionGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption">MediapackagePackagingConfigurationHlsPackageEncryption</a></code> | An HTTP Live Streaming (HLS) encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.hlsManifests">HlsManifests</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a>[]</code> | A list of HLS manifest configurations. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.includeDvbSubtitles">IncludeDvbSubtitles</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>double</code> | Duration (in seconds) of each fragment. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.useAudioRenditionGroup">UseAudioRenditionGroup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When enabled, audio streams will be placed in rendition groups in the output. |

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.encryption"></a>

```csharp
public MediapackagePackagingConfigurationHlsPackageEncryption Encryption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption">MediapackagePackagingConfigurationHlsPackageEncryption</a>

An HTTP Live Streaming (HLS) encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}

---

##### `HlsManifests`<sup>Optional</sup> <a name="HlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.hlsManifests"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationHlsPackageHlsManifests[] HlsManifests { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a>[]

A list of HLS manifest configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#hls_manifests MediapackagePackagingConfiguration#hls_manifests}

---

##### `IncludeDvbSubtitles`<sup>Optional</sup> <a name="IncludeDvbSubtitles" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.includeDvbSubtitles"></a>

```csharp
public bool|IResolvable IncludeDvbSubtitles { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When enabled, MediaPackage passes through digital video broadcasting (DVB) subtitles into the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#include_dvb_subtitles MediapackagePackagingConfiguration#include_dvb_subtitles}

---

##### `SegmentDurationSeconds`<sup>Optional</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.segmentDurationSeconds"></a>

```csharp
public double SegmentDurationSeconds { get; set; }
```

- *Type:* double

Duration (in seconds) of each fragment.

Actual fragments will be rounded to the nearest multiple of the source fragment duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}

---

##### `UseAudioRenditionGroup`<sup>Optional</sup> <a name="UseAudioRenditionGroup" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage.property.useAudioRenditionGroup"></a>

```csharp
public bool|IResolvable UseAudioRenditionGroup { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When enabled, audio streams will be placed in rendition groups in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#use_audio_rendition_group MediapackagePackagingConfiguration#use_audio_rendition_group}

---

### MediapackagePackagingConfigurationHlsPackageEncryption <a name="MediapackagePackagingConfigurationHlsPackageEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationHlsPackageEncryption {
    string ConstantInitializationVector = null,
    string EncryptionMethod = null,
    MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider SpekeKeyProvider = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>string</code> | An HTTP Live Streaming (HLS) encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.property.encryptionMethod">EncryptionMethod</a></code> | <code>string</code> | The encryption method to use. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a></code> | A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys. |

---

##### `ConstantInitializationVector`<sup>Optional</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.property.constantInitializationVector"></a>

```csharp
public string ConstantInitializationVector { get; set; }
```

- *Type:* string

An HTTP Live Streaming (HLS) encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#constant_initialization_vector MediapackagePackagingConfiguration#constant_initialization_vector}

---

##### `EncryptionMethod`<sup>Optional</sup> <a name="EncryptionMethod" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.property.encryptionMethod"></a>

```csharp
public string EncryptionMethod { get; set; }
```

- *Type:* string

The encryption method to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption_method MediapackagePackagingConfiguration#encryption_method}

---

##### `SpekeKeyProvider`<sup>Optional</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption.property.spekeKeyProvider"></a>

```csharp
public MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider SpekeKeyProvider { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a>

A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}

---

### MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider <a name="MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider {
    MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration EncryptionContractConfiguration = null,
    string RoleArn = null,
    string[] SystemIds = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.roleArn">RoleArn</a></code> | <code>string</code> | An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.systemIds">SystemIds</a></code> | <code>string[]</code> | The system IDs to include in key requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.url">Url</a></code> | <code>string</code> | The URL of the external key provider service. |

---

##### `EncryptionContractConfiguration`<sup>Optional</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration"></a>

```csharp
public MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration EncryptionContractConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}

---

##### `SystemIds`<sup>Optional</sup> <a name="SystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

```csharp
public string[] SystemIds { get; set; }
```

- *Type:* string[]

The system IDs to include in key requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL of the external key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}

---

### MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {
    string PresetSpeke20Audio = null,
    string PresetSpeke20Video = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>string</code> | A collection of audio encryption presets. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>string</code> | A collection of video encryption presets. |

---

##### `PresetSpeke20Audio`<sup>Optional</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio"></a>

```csharp
public string PresetSpeke20Audio { get; set; }
```

- *Type:* string

A collection of audio encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}

---

##### `PresetSpeke20Video`<sup>Optional</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video"></a>

```csharp
public string PresetSpeke20Video { get; set; }
```

- *Type:* string

A collection of video encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}

---

### MediapackagePackagingConfigurationHlsPackageHlsManifests <a name="MediapackagePackagingConfigurationHlsPackageHlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationHlsPackageHlsManifests {
    string AdMarkers = null,
    bool|IResolvable IncludeIframeOnlyStream = null,
    string ManifestName = null,
    double ProgramDateTimeIntervalSeconds = null,
    bool|IResolvable RepeatExtXKey = null,
    MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection StreamSelection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.adMarkers">AdMarkers</a></code> | <code>string</code> | This setting controls how ad markers are included in the packaged OriginEndpoint. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.includeIframeOnlyStream">IncludeIframeOnlyStream</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When enabled, an I-Frame only stream will be included in the output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.manifestName">ManifestName</a></code> | <code>string</code> | An optional string to include in the name of the manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.programDateTimeIntervalSeconds">ProgramDateTimeIntervalSeconds</a></code> | <code>double</code> | The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.repeatExtXKey">RepeatExtXKey</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When enabled, the EXT-X-KEY tag will be repeated in output manifests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a></code> | A StreamSelection configuration. |

---

##### `AdMarkers`<sup>Optional</sup> <a name="AdMarkers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.adMarkers"></a>

```csharp
public string AdMarkers { get; set; }
```

- *Type:* string

This setting controls how ad markers are included in the packaged OriginEndpoint.

"NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#ad_markers MediapackagePackagingConfiguration#ad_markers}

---

##### `IncludeIframeOnlyStream`<sup>Optional</sup> <a name="IncludeIframeOnlyStream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.includeIframeOnlyStream"></a>

```csharp
public bool|IResolvable IncludeIframeOnlyStream { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When enabled, an I-Frame only stream will be included in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#include_iframe_only_stream MediapackagePackagingConfiguration#include_iframe_only_stream}

---

##### `ManifestName`<sup>Optional</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.manifestName"></a>

```csharp
public string ManifestName { get; set; }
```

- *Type:* string

An optional string to include in the name of the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#manifest_name MediapackagePackagingConfiguration#manifest_name}

---

##### `ProgramDateTimeIntervalSeconds`<sup>Optional</sup> <a name="ProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.programDateTimeIntervalSeconds"></a>

```csharp
public double ProgramDateTimeIntervalSeconds { get; set; }
```

- *Type:* double

The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests.

Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#program_date_time_interval_seconds MediapackagePackagingConfiguration#program_date_time_interval_seconds}

---

##### `RepeatExtXKey`<sup>Optional</sup> <a name="RepeatExtXKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.repeatExtXKey"></a>

```csharp
public bool|IResolvable RepeatExtXKey { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When enabled, the EXT-X-KEY tag will be repeated in output manifests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#repeat_ext_x_key MediapackagePackagingConfiguration#repeat_ext_x_key}

---

##### `StreamSelection`<sup>Optional</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests.property.streamSelection"></a>

```csharp
public MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection StreamSelection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a>

A StreamSelection configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_selection MediapackagePackagingConfiguration#stream_selection}

---

### MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection <a name="MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection {
    double MaxVideoBitsPerSecond = null,
    double MinVideoBitsPerSecond = null,
    string StreamOrder = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>double</code> | The maximum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>double</code> | The minimum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.property.streamOrder">StreamOrder</a></code> | <code>string</code> | A directive that determines the order of streams in the output. |

---

##### `MaxVideoBitsPerSecond`<sup>Optional</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.property.maxVideoBitsPerSecond"></a>

```csharp
public double MaxVideoBitsPerSecond { get; set; }
```

- *Type:* double

The maximum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}

---

##### `MinVideoBitsPerSecond`<sup>Optional</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.property.minVideoBitsPerSecond"></a>

```csharp
public double MinVideoBitsPerSecond { get; set; }
```

- *Type:* double

The minimum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}

---

##### `StreamOrder`<sup>Optional</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection.property.streamOrder"></a>

```csharp
public string StreamOrder { get; set; }
```

- *Type:* string

A directive that determines the order of streams in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}

---

### MediapackagePackagingConfigurationMssPackage <a name="MediapackagePackagingConfigurationMssPackage" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationMssPackage {
    MediapackagePackagingConfigurationMssPackageEncryption Encryption = null,
    IResolvable|MediapackagePackagingConfigurationMssPackageMssManifests[] MssManifests = null,
    double SegmentDurationSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption">MediapackagePackagingConfigurationMssPackageEncryption</a></code> | A CMAF encryption configuration. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.property.mssManifests">MssManifests</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a>[]</code> | A list of MSS manifest configurations. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>double</code> | Duration (in seconds) of each fragment. |

---

##### `Encryption`<sup>Optional</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.property.encryption"></a>

```csharp
public MediapackagePackagingConfigurationMssPackageEncryption Encryption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption">MediapackagePackagingConfigurationMssPackageEncryption</a>

A CMAF encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption MediapackagePackagingConfiguration#encryption}

---

##### `MssManifests`<sup>Optional</sup> <a name="MssManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.property.mssManifests"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationMssPackageMssManifests[] MssManifests { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a>[]

A list of MSS manifest configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#mss_manifests MediapackagePackagingConfiguration#mss_manifests}

---

##### `SegmentDurationSeconds`<sup>Optional</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage.property.segmentDurationSeconds"></a>

```csharp
public double SegmentDurationSeconds { get; set; }
```

- *Type:* double

Duration (in seconds) of each fragment.

Actual fragments will be rounded to the nearest multiple of the source fragment duration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#segment_duration_seconds MediapackagePackagingConfiguration#segment_duration_seconds}

---

### MediapackagePackagingConfigurationMssPackageEncryption <a name="MediapackagePackagingConfigurationMssPackageEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationMssPackageEncryption {
    MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider SpekeKeyProvider = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a></code> | A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys. |

---

##### `SpekeKeyProvider`<sup>Optional</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption.property.spekeKeyProvider"></a>

```csharp
public MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider SpekeKeyProvider { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a>

A configuration for accessing an external Secure Packager and Encoder Key Exchange (SPEKE) service that will provide encryption keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#speke_key_provider MediapackagePackagingConfiguration#speke_key_provider}

---

### MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider <a name="MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider {
    MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration EncryptionContractConfiguration = null,
    string RoleArn = null,
    string[] SystemIds = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.roleArn">RoleArn</a></code> | <code>string</code> | An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.systemIds">SystemIds</a></code> | <code>string[]</code> | The system IDs to include in key requests. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.url">Url</a></code> | <code>string</code> | The URL of the external key provider service. |

---

##### `EncryptionContractConfiguration`<sup>Optional</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.encryptionContractConfiguration"></a>

```csharp
public MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration EncryptionContractConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

The configuration to use for encrypting one or more content tracks separately for endpoints that use SPEKE 2.0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#encryption_contract_configuration MediapackagePackagingConfiguration#encryption_contract_configuration}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#role_arn MediapackagePackagingConfiguration#role_arn}

---

##### `SystemIds`<sup>Optional</sup> <a name="SystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.systemIds"></a>

```csharp
public string[] SystemIds { get; set; }
```

- *Type:* string[]

The system IDs to include in key requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#system_ids MediapackagePackagingConfiguration#system_ids}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL of the external key provider service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#url MediapackagePackagingConfiguration#url}

---

### MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration <a name="MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration {
    string PresetSpeke20Audio = null,
    string PresetSpeke20Video = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>string</code> | A collection of audio encryption presets. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>string</code> | A collection of video encryption presets. |

---

##### `PresetSpeke20Audio`<sup>Optional</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Audio"></a>

```csharp
public string PresetSpeke20Audio { get; set; }
```

- *Type:* string

A collection of audio encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_audio MediapackagePackagingConfiguration#preset_speke_20_audio}

---

##### `PresetSpeke20Video`<sup>Optional</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration.property.presetSpeke20Video"></a>

```csharp
public string PresetSpeke20Video { get; set; }
```

- *Type:* string

A collection of video encryption presets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#preset_speke_20_video MediapackagePackagingConfiguration#preset_speke_20_video}

---

### MediapackagePackagingConfigurationMssPackageMssManifests <a name="MediapackagePackagingConfigurationMssPackageMssManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationMssPackageMssManifests {
    string ManifestName = null,
    MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection StreamSelection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests.property.manifestName">ManifestName</a></code> | <code>string</code> | An optional string to include in the name of the manifest. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a></code> | A StreamSelection configuration. |

---

##### `ManifestName`<sup>Optional</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests.property.manifestName"></a>

```csharp
public string ManifestName { get; set; }
```

- *Type:* string

An optional string to include in the name of the manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#manifest_name MediapackagePackagingConfiguration#manifest_name}

---

##### `StreamSelection`<sup>Optional</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests.property.streamSelection"></a>

```csharp
public MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection StreamSelection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a>

A StreamSelection configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_selection MediapackagePackagingConfiguration#stream_selection}

---

### MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection <a name="MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection {
    double MaxVideoBitsPerSecond = null,
    double MinVideoBitsPerSecond = null,
    string StreamOrder = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>double</code> | The maximum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>double</code> | The minimum video bitrate (bps) to include in output. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.property.streamOrder">StreamOrder</a></code> | <code>string</code> | A directive that determines the order of streams in the output. |

---

##### `MaxVideoBitsPerSecond`<sup>Optional</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.property.maxVideoBitsPerSecond"></a>

```csharp
public double MaxVideoBitsPerSecond { get; set; }
```

- *Type:* double

The maximum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#max_video_bits_per_second MediapackagePackagingConfiguration#max_video_bits_per_second}

---

##### `MinVideoBitsPerSecond`<sup>Optional</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.property.minVideoBitsPerSecond"></a>

```csharp
public double MinVideoBitsPerSecond { get; set; }
```

- *Type:* double

The minimum video bitrate (bps) to include in output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#min_video_bits_per_second MediapackagePackagingConfiguration#min_video_bits_per_second}

---

##### `StreamOrder`<sup>Optional</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection.property.streamOrder"></a>

```csharp
public string StreamOrder { get; set; }
```

- *Type:* string

A directive that determines the order of streams in the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#stream_order MediapackagePackagingConfiguration#stream_order}

---

### MediapackagePackagingConfigurationTags <a name="MediapackagePackagingConfigurationTags" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#key MediapackagePackagingConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#value MediapackagePackagingConfiguration#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#key MediapackagePackagingConfiguration#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/mediapackage_packaging_configuration#value MediapackagePackagingConfiguration#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference <a name="MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.putSpekeKeyProvider">PutSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resetSpekeKeyProvider">ResetSpekeKeyProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpekeKeyProvider` <a name="PutSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.putSpekeKeyProvider"></a>

```csharp
private void PutSpekeKeyProvider(MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a>

---

##### `ResetSpekeKeyProvider` <a name="ResetSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.resetSpekeKeyProvider"></a>

```csharp
private void ResetSpekeKeyProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.spekeKeyProviderInput">SpekeKeyProviderInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption">MediapackagePackagingConfigurationCmafPackageEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpekeKeyProvider`<sup>Required</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```csharp
public MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference SpekeKeyProvider { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `SpekeKeyProviderInput`<sup>Optional</sup> <a name="SpekeKeyProviderInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.spekeKeyProviderInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider SpekeKeyProviderInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationCmafPackageEncryption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption">MediapackagePackagingConfigurationCmafPackageEncryption</a>

---


### MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio">ResetPresetSpeke20Audio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video">ResetPresetSpeke20Video</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPresetSpeke20Audio` <a name="ResetPresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio"></a>

```csharp
private void ResetPresetSpeke20Audio()
```

##### `ResetPresetSpeke20Video` <a name="ResetPresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video"></a>

```csharp
private void ResetPresetSpeke20Video()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput">PresetSpeke20AudioInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput">PresetSpeke20VideoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PresetSpeke20AudioInput`<sup>Optional</sup> <a name="PresetSpeke20AudioInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput"></a>

```csharp
public string PresetSpeke20AudioInput { get; }
```

- *Type:* string

---

##### `PresetSpeke20VideoInput`<sup>Optional</sup> <a name="PresetSpeke20VideoInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput"></a>

```csharp
public string PresetSpeke20VideoInput { get; }
```

- *Type:* string

---

##### `PresetSpeke20Audio`<sup>Required</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```csharp
public string PresetSpeke20Audio { get; }
```

- *Type:* string

---

##### `PresetSpeke20Video`<sup>Required</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```csharp
public string PresetSpeke20Video { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference <a name="MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration">PutEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration">ResetEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds">ResetSystemIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionContractConfiguration` <a name="PutEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration"></a>

```csharp
private void PutEncryptionContractConfiguration(MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `ResetEncryptionContractConfiguration` <a name="ResetEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration"></a>

```csharp
private void ResetEncryptionContractConfiguration()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSystemIds` <a name="ResetSystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds"></a>

```csharp
private void ResetSystemIds()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput">EncryptionContractConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput">SystemIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">SystemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionContractConfiguration`<sup>Required</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```csharp
public MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference EncryptionContractConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `EncryptionContractConfigurationInput`<sup>Optional</sup> <a name="EncryptionContractConfigurationInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration EncryptionContractConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SystemIdsInput`<sup>Optional</sup> <a name="SystemIdsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput"></a>

```csharp
public string[] SystemIdsInput { get; }
```

- *Type:* string[]

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SystemIds`<sup>Required</sup> <a name="SystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```csharp
public string[] SystemIds { get; }
```

- *Type:* string[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationCmafPackageEncryptionSpekeKeyProvider</a>

---


### MediapackagePackagingConfigurationCmafPackageHlsManifestsList <a name="MediapackagePackagingConfigurationCmafPackageHlsManifestsList" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationCmafPackageHlsManifestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.get"></a>

```csharp
private MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationCmafPackageHlsManifests[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a>[]

---


### MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference <a name="MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.putStreamSelection">PutStreamSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetAdMarkers">ResetAdMarkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetIncludeIframeOnlyStream">ResetIncludeIframeOnlyStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetManifestName">ResetManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds">ResetProgramDateTimeIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetRepeatExtXKey">ResetRepeatExtXKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetStreamSelection">ResetStreamSelection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStreamSelection` <a name="PutStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.putStreamSelection"></a>

```csharp
private void PutStreamSelection(MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.putStreamSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a>

---

##### `ResetAdMarkers` <a name="ResetAdMarkers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetAdMarkers"></a>

```csharp
private void ResetAdMarkers()
```

##### `ResetIncludeIframeOnlyStream` <a name="ResetIncludeIframeOnlyStream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetIncludeIframeOnlyStream"></a>

```csharp
private void ResetIncludeIframeOnlyStream()
```

##### `ResetManifestName` <a name="ResetManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetManifestName"></a>

```csharp
private void ResetManifestName()
```

##### `ResetProgramDateTimeIntervalSeconds` <a name="ResetProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds"></a>

```csharp
private void ResetProgramDateTimeIntervalSeconds()
```

##### `ResetRepeatExtXKey` <a name="ResetRepeatExtXKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetRepeatExtXKey"></a>

```csharp
private void ResetRepeatExtXKey()
```

##### `ResetStreamSelection` <a name="ResetStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.resetStreamSelection"></a>

```csharp
private void ResetStreamSelection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.adMarkersInput">AdMarkersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.includeIframeOnlyStreamInput">IncludeIframeOnlyStreamInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.manifestNameInput">ManifestNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput">ProgramDateTimeIntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.repeatExtXKeyInput">RepeatExtXKeyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.streamSelectionInput">StreamSelectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.adMarkers">AdMarkers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.includeIframeOnlyStream">IncludeIframeOnlyStream</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">ProgramDateTimeIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.repeatExtXKey">RepeatExtXKey</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StreamSelection`<sup>Required</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.streamSelection"></a>

```csharp
public MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference StreamSelection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference</a>

---

##### `AdMarkersInput`<sup>Optional</sup> <a name="AdMarkersInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.adMarkersInput"></a>

```csharp
public string AdMarkersInput { get; }
```

- *Type:* string

---

##### `IncludeIframeOnlyStreamInput`<sup>Optional</sup> <a name="IncludeIframeOnlyStreamInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.includeIframeOnlyStreamInput"></a>

```csharp
public bool|IResolvable IncludeIframeOnlyStreamInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ManifestNameInput`<sup>Optional</sup> <a name="ManifestNameInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.manifestNameInput"></a>

```csharp
public string ManifestNameInput { get; }
```

- *Type:* string

---

##### `ProgramDateTimeIntervalSecondsInput`<sup>Optional</sup> <a name="ProgramDateTimeIntervalSecondsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput"></a>

```csharp
public double ProgramDateTimeIntervalSecondsInput { get; }
```

- *Type:* double

---

##### `RepeatExtXKeyInput`<sup>Optional</sup> <a name="RepeatExtXKeyInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.repeatExtXKeyInput"></a>

```csharp
public bool|IResolvable RepeatExtXKeyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StreamSelectionInput`<sup>Optional</sup> <a name="StreamSelectionInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.streamSelectionInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection StreamSelectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a>

---

##### `AdMarkers`<sup>Required</sup> <a name="AdMarkers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.adMarkers"></a>

```csharp
public string AdMarkers { get; }
```

- *Type:* string

---

##### `IncludeIframeOnlyStream`<sup>Required</sup> <a name="IncludeIframeOnlyStream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.includeIframeOnlyStream"></a>

```csharp
public bool|IResolvable IncludeIframeOnlyStream { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.manifestName"></a>

```csharp
public string ManifestName { get; }
```

- *Type:* string

---

##### `ProgramDateTimeIntervalSeconds`<sup>Required</sup> <a name="ProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```csharp
public double ProgramDateTimeIntervalSeconds { get; }
```

- *Type:* double

---

##### `RepeatExtXKey`<sup>Required</sup> <a name="RepeatExtXKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.repeatExtXKey"></a>

```csharp
public bool|IResolvable RepeatExtXKey { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationCmafPackageHlsManifests InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a>

---


### MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference <a name="MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond">ResetMaxVideoBitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond">ResetMinVideoBitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resetStreamOrder">ResetStreamOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxVideoBitsPerSecond` <a name="ResetMaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond"></a>

```csharp
private void ResetMaxVideoBitsPerSecond()
```

##### `ResetMinVideoBitsPerSecond` <a name="ResetMinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond"></a>

```csharp
private void ResetMinVideoBitsPerSecond()
```

##### `ResetStreamOrder` <a name="ResetStreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.resetStreamOrder"></a>

```csharp
private void ResetStreamOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput">MaxVideoBitsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput">MinVideoBitsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.streamOrderInput">StreamOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder">StreamOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxVideoBitsPerSecondInput`<sup>Optional</sup> <a name="MaxVideoBitsPerSecondInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput"></a>

```csharp
public double MaxVideoBitsPerSecondInput { get; }
```

- *Type:* double

---

##### `MinVideoBitsPerSecondInput`<sup>Optional</sup> <a name="MinVideoBitsPerSecondInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput"></a>

```csharp
public double MinVideoBitsPerSecondInput { get; }
```

- *Type:* double

---

##### `StreamOrderInput`<sup>Optional</sup> <a name="StreamOrderInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.streamOrderInput"></a>

```csharp
public string StreamOrderInput { get; }
```

- *Type:* string

---

##### `MaxVideoBitsPerSecond`<sup>Required</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```csharp
public double MaxVideoBitsPerSecond { get; }
```

- *Type:* double

---

##### `MinVideoBitsPerSecond`<sup>Required</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```csharp
public double MinVideoBitsPerSecond { get; }
```

- *Type:* double

---

##### `StreamOrder`<sup>Required</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```csharp
public string StreamOrder { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationCmafPackageHlsManifestsStreamSelection</a>

---


### MediapackagePackagingConfigurationCmafPackageOutputReference <a name="MediapackagePackagingConfigurationCmafPackageOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationCmafPackageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.putHlsManifests">PutHlsManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetHlsManifests">ResetHlsManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetIncludeEncoderConfigurationInSegments">ResetIncludeEncoderConfigurationInSegments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetSegmentDurationSeconds">ResetSegmentDurationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.putEncryption"></a>

```csharp
private void PutEncryption(MediapackagePackagingConfigurationCmafPackageEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption">MediapackagePackagingConfigurationCmafPackageEncryption</a>

---

##### `PutHlsManifests` <a name="PutHlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.putHlsManifests"></a>

```csharp
private void PutHlsManifests(IResolvable|MediapackagePackagingConfigurationCmafPackageHlsManifests[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.putHlsManifests.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a>[]

---

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetHlsManifests` <a name="ResetHlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetHlsManifests"></a>

```csharp
private void ResetHlsManifests()
```

##### `ResetIncludeEncoderConfigurationInSegments` <a name="ResetIncludeEncoderConfigurationInSegments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetIncludeEncoderConfigurationInSegments"></a>

```csharp
private void ResetIncludeEncoderConfigurationInSegments()
```

##### `ResetSegmentDurationSeconds` <a name="ResetSegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.resetSegmentDurationSeconds"></a>

```csharp
private void ResetSegmentDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference">MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.hlsManifests">HlsManifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList">MediapackagePackagingConfigurationCmafPackageHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption">MediapackagePackagingConfigurationCmafPackageEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.hlsManifestsInput">HlsManifestsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.includeEncoderConfigurationInSegmentsInput">IncludeEncoderConfigurationInSegmentsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.segmentDurationSecondsInput">SegmentDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.includeEncoderConfigurationInSegments">IncludeEncoderConfigurationInSegments</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage">MediapackagePackagingConfigurationCmafPackage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.encryption"></a>

```csharp
public MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference">MediapackagePackagingConfigurationCmafPackageEncryptionOutputReference</a>

---

##### `HlsManifests`<sup>Required</sup> <a name="HlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.hlsManifests"></a>

```csharp
public MediapackagePackagingConfigurationCmafPackageHlsManifestsList HlsManifests { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifestsList">MediapackagePackagingConfigurationCmafPackageHlsManifestsList</a>

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.encryptionInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationCmafPackageEncryption EncryptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageEncryption">MediapackagePackagingConfigurationCmafPackageEncryption</a>

---

##### `HlsManifestsInput`<sup>Optional</sup> <a name="HlsManifestsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.hlsManifestsInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationCmafPackageHlsManifests[] HlsManifestsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageHlsManifests">MediapackagePackagingConfigurationCmafPackageHlsManifests</a>[]

---

##### `IncludeEncoderConfigurationInSegmentsInput`<sup>Optional</sup> <a name="IncludeEncoderConfigurationInSegmentsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.includeEncoderConfigurationInSegmentsInput"></a>

```csharp
public bool|IResolvable IncludeEncoderConfigurationInSegmentsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SegmentDurationSecondsInput`<sup>Optional</sup> <a name="SegmentDurationSecondsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.segmentDurationSecondsInput"></a>

```csharp
public double SegmentDurationSecondsInput { get; }
```

- *Type:* double

---

##### `IncludeEncoderConfigurationInSegments`<sup>Required</sup> <a name="IncludeEncoderConfigurationInSegments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.includeEncoderConfigurationInSegments"></a>

```csharp
public bool|IResolvable IncludeEncoderConfigurationInSegments { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SegmentDurationSeconds`<sup>Required</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.segmentDurationSeconds"></a>

```csharp
public double SegmentDurationSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackageOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationCmafPackage InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationCmafPackage">MediapackagePackagingConfigurationCmafPackage</a>

---


### MediapackagePackagingConfigurationDashPackageDashManifestsList <a name="MediapackagePackagingConfigurationDashPackageDashManifestsList" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationDashPackageDashManifestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.get"></a>

```csharp
private MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationDashPackageDashManifests[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a>[]

---


### MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference <a name="MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.putStreamSelection">PutStreamSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetManifestLayout">ResetManifestLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetManifestName">ResetManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetMinBufferTimeSeconds">ResetMinBufferTimeSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetScteMarkersSource">ResetScteMarkersSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetStreamSelection">ResetStreamSelection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStreamSelection` <a name="PutStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.putStreamSelection"></a>

```csharp
private void PutStreamSelection(MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.putStreamSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a>

---

##### `ResetManifestLayout` <a name="ResetManifestLayout" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetManifestLayout"></a>

```csharp
private void ResetManifestLayout()
```

##### `ResetManifestName` <a name="ResetManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetManifestName"></a>

```csharp
private void ResetManifestName()
```

##### `ResetMinBufferTimeSeconds` <a name="ResetMinBufferTimeSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetMinBufferTimeSeconds"></a>

```csharp
private void ResetMinBufferTimeSeconds()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetProfile"></a>

```csharp
private void ResetProfile()
```

##### `ResetScteMarkersSource` <a name="ResetScteMarkersSource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetScteMarkersSource"></a>

```csharp
private void ResetScteMarkersSource()
```

##### `ResetStreamSelection` <a name="ResetStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.resetStreamSelection"></a>

```csharp
private void ResetStreamSelection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestLayoutInput">ManifestLayoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestNameInput">ManifestNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.minBufferTimeSecondsInput">MinBufferTimeSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.profileInput">ProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.scteMarkersSourceInput">ScteMarkersSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.streamSelectionInput">StreamSelectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestLayout">ManifestLayout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.minBufferTimeSeconds">MinBufferTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.profile">Profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.scteMarkersSource">ScteMarkersSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StreamSelection`<sup>Required</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.streamSelection"></a>

```csharp
public MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference StreamSelection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference</a>

---

##### `ManifestLayoutInput`<sup>Optional</sup> <a name="ManifestLayoutInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestLayoutInput"></a>

```csharp
public string ManifestLayoutInput { get; }
```

- *Type:* string

---

##### `ManifestNameInput`<sup>Optional</sup> <a name="ManifestNameInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestNameInput"></a>

```csharp
public string ManifestNameInput { get; }
```

- *Type:* string

---

##### `MinBufferTimeSecondsInput`<sup>Optional</sup> <a name="MinBufferTimeSecondsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.minBufferTimeSecondsInput"></a>

```csharp
public double MinBufferTimeSecondsInput { get; }
```

- *Type:* double

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.profileInput"></a>

```csharp
public string ProfileInput { get; }
```

- *Type:* string

---

##### `ScteMarkersSourceInput`<sup>Optional</sup> <a name="ScteMarkersSourceInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.scteMarkersSourceInput"></a>

```csharp
public string ScteMarkersSourceInput { get; }
```

- *Type:* string

---

##### `StreamSelectionInput`<sup>Optional</sup> <a name="StreamSelectionInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.streamSelectionInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection StreamSelectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a>

---

##### `ManifestLayout`<sup>Required</sup> <a name="ManifestLayout" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestLayout"></a>

```csharp
public string ManifestLayout { get; }
```

- *Type:* string

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.manifestName"></a>

```csharp
public string ManifestName { get; }
```

- *Type:* string

---

##### `MinBufferTimeSeconds`<sup>Required</sup> <a name="MinBufferTimeSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.minBufferTimeSeconds"></a>

```csharp
public double MinBufferTimeSeconds { get; }
```

- *Type:* double

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.profile"></a>

```csharp
public string Profile { get; }
```

- *Type:* string

---

##### `ScteMarkersSource`<sup>Required</sup> <a name="ScteMarkersSource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.scteMarkersSource"></a>

```csharp
public string ScteMarkersSource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationDashPackageDashManifests InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a>

---


### MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference <a name="MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond">ResetMaxVideoBitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond">ResetMinVideoBitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resetStreamOrder">ResetStreamOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxVideoBitsPerSecond` <a name="ResetMaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond"></a>

```csharp
private void ResetMaxVideoBitsPerSecond()
```

##### `ResetMinVideoBitsPerSecond` <a name="ResetMinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond"></a>

```csharp
private void ResetMinVideoBitsPerSecond()
```

##### `ResetStreamOrder` <a name="ResetStreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.resetStreamOrder"></a>

```csharp
private void ResetStreamOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput">MaxVideoBitsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput">MinVideoBitsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.streamOrderInput">StreamOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.streamOrder">StreamOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxVideoBitsPerSecondInput`<sup>Optional</sup> <a name="MaxVideoBitsPerSecondInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput"></a>

```csharp
public double MaxVideoBitsPerSecondInput { get; }
```

- *Type:* double

---

##### `MinVideoBitsPerSecondInput`<sup>Optional</sup> <a name="MinVideoBitsPerSecondInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput"></a>

```csharp
public double MinVideoBitsPerSecondInput { get; }
```

- *Type:* double

---

##### `StreamOrderInput`<sup>Optional</sup> <a name="StreamOrderInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.streamOrderInput"></a>

```csharp
public string StreamOrderInput { get; }
```

- *Type:* string

---

##### `MaxVideoBitsPerSecond`<sup>Required</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```csharp
public double MaxVideoBitsPerSecond { get; }
```

- *Type:* double

---

##### `MinVideoBitsPerSecond`<sup>Required</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```csharp
public double MinVideoBitsPerSecond { get; }
```

- *Type:* double

---

##### `StreamOrder`<sup>Required</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```csharp
public string StreamOrder { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection">MediapackagePackagingConfigurationDashPackageDashManifestsStreamSelection</a>

---


### MediapackagePackagingConfigurationDashPackageEncryptionOutputReference <a name="MediapackagePackagingConfigurationDashPackageEncryptionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationDashPackageEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.putSpekeKeyProvider">PutSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resetSpekeKeyProvider">ResetSpekeKeyProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpekeKeyProvider` <a name="PutSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.putSpekeKeyProvider"></a>

```csharp
private void PutSpekeKeyProvider(MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a>

---

##### `ResetSpekeKeyProvider` <a name="ResetSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.resetSpekeKeyProvider"></a>

```csharp
private void ResetSpekeKeyProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.spekeKeyProviderInput">SpekeKeyProviderInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption">MediapackagePackagingConfigurationDashPackageEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpekeKeyProvider`<sup>Required</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```csharp
public MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference SpekeKeyProvider { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `SpekeKeyProviderInput`<sup>Optional</sup> <a name="SpekeKeyProviderInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.spekeKeyProviderInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider SpekeKeyProviderInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationDashPackageEncryption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption">MediapackagePackagingConfigurationDashPackageEncryption</a>

---


### MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio">ResetPresetSpeke20Audio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video">ResetPresetSpeke20Video</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPresetSpeke20Audio` <a name="ResetPresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio"></a>

```csharp
private void ResetPresetSpeke20Audio()
```

##### `ResetPresetSpeke20Video` <a name="ResetPresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video"></a>

```csharp
private void ResetPresetSpeke20Video()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput">PresetSpeke20AudioInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput">PresetSpeke20VideoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PresetSpeke20AudioInput`<sup>Optional</sup> <a name="PresetSpeke20AudioInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput"></a>

```csharp
public string PresetSpeke20AudioInput { get; }
```

- *Type:* string

---

##### `PresetSpeke20VideoInput`<sup>Optional</sup> <a name="PresetSpeke20VideoInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput"></a>

```csharp
public string PresetSpeke20VideoInput { get; }
```

- *Type:* string

---

##### `PresetSpeke20Audio`<sup>Required</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```csharp
public string PresetSpeke20Audio { get; }
```

- *Type:* string

---

##### `PresetSpeke20Video`<sup>Required</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```csharp
public string PresetSpeke20Video { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference <a name="MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration">PutEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration">ResetEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds">ResetSystemIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionContractConfiguration` <a name="PutEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration"></a>

```csharp
private void PutEncryptionContractConfiguration(MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `ResetEncryptionContractConfiguration` <a name="ResetEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration"></a>

```csharp
private void ResetEncryptionContractConfiguration()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSystemIds` <a name="ResetSystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds"></a>

```csharp
private void ResetSystemIds()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput">EncryptionContractConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput">SystemIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">SystemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionContractConfiguration`<sup>Required</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```csharp
public MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference EncryptionContractConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `EncryptionContractConfigurationInput`<sup>Optional</sup> <a name="EncryptionContractConfigurationInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration EncryptionContractConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SystemIdsInput`<sup>Optional</sup> <a name="SystemIdsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput"></a>

```csharp
public string[] SystemIdsInput { get; }
```

- *Type:* string[]

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SystemIds`<sup>Required</sup> <a name="SystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```csharp
public string[] SystemIds { get; }
```

- *Type:* string[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationDashPackageEncryptionSpekeKeyProvider</a>

---


### MediapackagePackagingConfigurationDashPackageOutputReference <a name="MediapackagePackagingConfigurationDashPackageOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationDashPackageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.putDashManifests">PutDashManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetDashManifests">ResetDashManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetIncludeEncoderConfigurationInSegments">ResetIncludeEncoderConfigurationInSegments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetIncludeIframeOnlyStream">ResetIncludeIframeOnlyStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetPeriodTriggers">ResetPeriodTriggers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetSegmentDurationSeconds">ResetSegmentDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetSegmentTemplateFormat">ResetSegmentTemplateFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDashManifests` <a name="PutDashManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.putDashManifests"></a>

```csharp
private void PutDashManifests(IResolvable|MediapackagePackagingConfigurationDashPackageDashManifests[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.putDashManifests.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a>[]

---

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.putEncryption"></a>

```csharp
private void PutEncryption(MediapackagePackagingConfigurationDashPackageEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption">MediapackagePackagingConfigurationDashPackageEncryption</a>

---

##### `ResetDashManifests` <a name="ResetDashManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetDashManifests"></a>

```csharp
private void ResetDashManifests()
```

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetIncludeEncoderConfigurationInSegments` <a name="ResetIncludeEncoderConfigurationInSegments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetIncludeEncoderConfigurationInSegments"></a>

```csharp
private void ResetIncludeEncoderConfigurationInSegments()
```

##### `ResetIncludeIframeOnlyStream` <a name="ResetIncludeIframeOnlyStream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetIncludeIframeOnlyStream"></a>

```csharp
private void ResetIncludeIframeOnlyStream()
```

##### `ResetPeriodTriggers` <a name="ResetPeriodTriggers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetPeriodTriggers"></a>

```csharp
private void ResetPeriodTriggers()
```

##### `ResetSegmentDurationSeconds` <a name="ResetSegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetSegmentDurationSeconds"></a>

```csharp
private void ResetSegmentDurationSeconds()
```

##### `ResetSegmentTemplateFormat` <a name="ResetSegmentTemplateFormat" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.resetSegmentTemplateFormat"></a>

```csharp
private void ResetSegmentTemplateFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.dashManifests">DashManifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList">MediapackagePackagingConfigurationDashPackageDashManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference">MediapackagePackagingConfigurationDashPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.dashManifestsInput">DashManifestsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption">MediapackagePackagingConfigurationDashPackageEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeEncoderConfigurationInSegmentsInput">IncludeEncoderConfigurationInSegmentsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeIframeOnlyStreamInput">IncludeIframeOnlyStreamInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.periodTriggersInput">PeriodTriggersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentDurationSecondsInput">SegmentDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentTemplateFormatInput">SegmentTemplateFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeEncoderConfigurationInSegments">IncludeEncoderConfigurationInSegments</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeIframeOnlyStream">IncludeIframeOnlyStream</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.periodTriggers">PeriodTriggers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentTemplateFormat">SegmentTemplateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage">MediapackagePackagingConfigurationDashPackage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DashManifests`<sup>Required</sup> <a name="DashManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.dashManifests"></a>

```csharp
public MediapackagePackagingConfigurationDashPackageDashManifestsList DashManifests { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifestsList">MediapackagePackagingConfigurationDashPackageDashManifestsList</a>

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.encryption"></a>

```csharp
public MediapackagePackagingConfigurationDashPackageEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryptionOutputReference">MediapackagePackagingConfigurationDashPackageEncryptionOutputReference</a>

---

##### `DashManifestsInput`<sup>Optional</sup> <a name="DashManifestsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.dashManifestsInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationDashPackageDashManifests[] DashManifestsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageDashManifests">MediapackagePackagingConfigurationDashPackageDashManifests</a>[]

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.encryptionInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationDashPackageEncryption EncryptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageEncryption">MediapackagePackagingConfigurationDashPackageEncryption</a>

---

##### `IncludeEncoderConfigurationInSegmentsInput`<sup>Optional</sup> <a name="IncludeEncoderConfigurationInSegmentsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeEncoderConfigurationInSegmentsInput"></a>

```csharp
public bool|IResolvable IncludeEncoderConfigurationInSegmentsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeIframeOnlyStreamInput`<sup>Optional</sup> <a name="IncludeIframeOnlyStreamInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeIframeOnlyStreamInput"></a>

```csharp
public bool|IResolvable IncludeIframeOnlyStreamInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PeriodTriggersInput`<sup>Optional</sup> <a name="PeriodTriggersInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.periodTriggersInput"></a>

```csharp
public string[] PeriodTriggersInput { get; }
```

- *Type:* string[]

---

##### `SegmentDurationSecondsInput`<sup>Optional</sup> <a name="SegmentDurationSecondsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentDurationSecondsInput"></a>

```csharp
public double SegmentDurationSecondsInput { get; }
```

- *Type:* double

---

##### `SegmentTemplateFormatInput`<sup>Optional</sup> <a name="SegmentTemplateFormatInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentTemplateFormatInput"></a>

```csharp
public string SegmentTemplateFormatInput { get; }
```

- *Type:* string

---

##### `IncludeEncoderConfigurationInSegments`<sup>Required</sup> <a name="IncludeEncoderConfigurationInSegments" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeEncoderConfigurationInSegments"></a>

```csharp
public bool|IResolvable IncludeEncoderConfigurationInSegments { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeIframeOnlyStream`<sup>Required</sup> <a name="IncludeIframeOnlyStream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.includeIframeOnlyStream"></a>

```csharp
public bool|IResolvable IncludeIframeOnlyStream { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PeriodTriggers`<sup>Required</sup> <a name="PeriodTriggers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.periodTriggers"></a>

```csharp
public string[] PeriodTriggers { get; }
```

- *Type:* string[]

---

##### `SegmentDurationSeconds`<sup>Required</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentDurationSeconds"></a>

```csharp
public double SegmentDurationSeconds { get; }
```

- *Type:* double

---

##### `SegmentTemplateFormat`<sup>Required</sup> <a name="SegmentTemplateFormat" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.segmentTemplateFormat"></a>

```csharp
public string SegmentTemplateFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackageOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationDashPackage InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationDashPackage">MediapackagePackagingConfigurationDashPackage</a>

---


### MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference <a name="MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.putSpekeKeyProvider">PutSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resetConstantInitializationVector">ResetConstantInitializationVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resetEncryptionMethod">ResetEncryptionMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resetSpekeKeyProvider">ResetSpekeKeyProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpekeKeyProvider` <a name="PutSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.putSpekeKeyProvider"></a>

```csharp
private void PutSpekeKeyProvider(MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a>

---

##### `ResetConstantInitializationVector` <a name="ResetConstantInitializationVector" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resetConstantInitializationVector"></a>

```csharp
private void ResetConstantInitializationVector()
```

##### `ResetEncryptionMethod` <a name="ResetEncryptionMethod" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resetEncryptionMethod"></a>

```csharp
private void ResetEncryptionMethod()
```

##### `ResetSpekeKeyProvider` <a name="ResetSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.resetSpekeKeyProvider"></a>

```csharp
private void ResetSpekeKeyProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.constantInitializationVectorInput">ConstantInitializationVectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.encryptionMethodInput">EncryptionMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.spekeKeyProviderInput">SpekeKeyProviderInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.constantInitializationVector">ConstantInitializationVector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.encryptionMethod">EncryptionMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption">MediapackagePackagingConfigurationHlsPackageEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpekeKeyProvider`<sup>Required</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```csharp
public MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference SpekeKeyProvider { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `ConstantInitializationVectorInput`<sup>Optional</sup> <a name="ConstantInitializationVectorInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.constantInitializationVectorInput"></a>

```csharp
public string ConstantInitializationVectorInput { get; }
```

- *Type:* string

---

##### `EncryptionMethodInput`<sup>Optional</sup> <a name="EncryptionMethodInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.encryptionMethodInput"></a>

```csharp
public string EncryptionMethodInput { get; }
```

- *Type:* string

---

##### `SpekeKeyProviderInput`<sup>Optional</sup> <a name="SpekeKeyProviderInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.spekeKeyProviderInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider SpekeKeyProviderInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a>

---

##### `ConstantInitializationVector`<sup>Required</sup> <a name="ConstantInitializationVector" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.constantInitializationVector"></a>

```csharp
public string ConstantInitializationVector { get; }
```

- *Type:* string

---

##### `EncryptionMethod`<sup>Required</sup> <a name="EncryptionMethod" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.encryptionMethod"></a>

```csharp
public string EncryptionMethod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationHlsPackageEncryption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption">MediapackagePackagingConfigurationHlsPackageEncryption</a>

---


### MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio">ResetPresetSpeke20Audio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video">ResetPresetSpeke20Video</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPresetSpeke20Audio` <a name="ResetPresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio"></a>

```csharp
private void ResetPresetSpeke20Audio()
```

##### `ResetPresetSpeke20Video` <a name="ResetPresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video"></a>

```csharp
private void ResetPresetSpeke20Video()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput">PresetSpeke20AudioInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput">PresetSpeke20VideoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PresetSpeke20AudioInput`<sup>Optional</sup> <a name="PresetSpeke20AudioInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput"></a>

```csharp
public string PresetSpeke20AudioInput { get; }
```

- *Type:* string

---

##### `PresetSpeke20VideoInput`<sup>Optional</sup> <a name="PresetSpeke20VideoInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput"></a>

```csharp
public string PresetSpeke20VideoInput { get; }
```

- *Type:* string

---

##### `PresetSpeke20Audio`<sup>Required</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```csharp
public string PresetSpeke20Audio { get; }
```

- *Type:* string

---

##### `PresetSpeke20Video`<sup>Required</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```csharp
public string PresetSpeke20Video { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference <a name="MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration">PutEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration">ResetEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds">ResetSystemIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionContractConfiguration` <a name="PutEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration"></a>

```csharp
private void PutEncryptionContractConfiguration(MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `ResetEncryptionContractConfiguration` <a name="ResetEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration"></a>

```csharp
private void ResetEncryptionContractConfiguration()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSystemIds` <a name="ResetSystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds"></a>

```csharp
private void ResetSystemIds()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput">EncryptionContractConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput">SystemIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">SystemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionContractConfiguration`<sup>Required</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```csharp
public MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference EncryptionContractConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `EncryptionContractConfigurationInput`<sup>Optional</sup> <a name="EncryptionContractConfigurationInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration EncryptionContractConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SystemIdsInput`<sup>Optional</sup> <a name="SystemIdsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput"></a>

```csharp
public string[] SystemIdsInput { get; }
```

- *Type:* string[]

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SystemIds`<sup>Required</sup> <a name="SystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```csharp
public string[] SystemIds { get; }
```

- *Type:* string[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationHlsPackageEncryptionSpekeKeyProvider</a>

---


### MediapackagePackagingConfigurationHlsPackageHlsManifestsList <a name="MediapackagePackagingConfigurationHlsPackageHlsManifestsList" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationHlsPackageHlsManifestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.get"></a>

```csharp
private MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationHlsPackageHlsManifests[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a>[]

---


### MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference <a name="MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.putStreamSelection">PutStreamSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetAdMarkers">ResetAdMarkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetIncludeIframeOnlyStream">ResetIncludeIframeOnlyStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetManifestName">ResetManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds">ResetProgramDateTimeIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetRepeatExtXKey">ResetRepeatExtXKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetStreamSelection">ResetStreamSelection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStreamSelection` <a name="PutStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.putStreamSelection"></a>

```csharp
private void PutStreamSelection(MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.putStreamSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a>

---

##### `ResetAdMarkers` <a name="ResetAdMarkers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetAdMarkers"></a>

```csharp
private void ResetAdMarkers()
```

##### `ResetIncludeIframeOnlyStream` <a name="ResetIncludeIframeOnlyStream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetIncludeIframeOnlyStream"></a>

```csharp
private void ResetIncludeIframeOnlyStream()
```

##### `ResetManifestName` <a name="ResetManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetManifestName"></a>

```csharp
private void ResetManifestName()
```

##### `ResetProgramDateTimeIntervalSeconds` <a name="ResetProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetProgramDateTimeIntervalSeconds"></a>

```csharp
private void ResetProgramDateTimeIntervalSeconds()
```

##### `ResetRepeatExtXKey` <a name="ResetRepeatExtXKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetRepeatExtXKey"></a>

```csharp
private void ResetRepeatExtXKey()
```

##### `ResetStreamSelection` <a name="ResetStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.resetStreamSelection"></a>

```csharp
private void ResetStreamSelection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.adMarkersInput">AdMarkersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.includeIframeOnlyStreamInput">IncludeIframeOnlyStreamInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.manifestNameInput">ManifestNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput">ProgramDateTimeIntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.repeatExtXKeyInput">RepeatExtXKeyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.streamSelectionInput">StreamSelectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.adMarkers">AdMarkers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.includeIframeOnlyStream">IncludeIframeOnlyStream</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds">ProgramDateTimeIntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.repeatExtXKey">RepeatExtXKey</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StreamSelection`<sup>Required</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.streamSelection"></a>

```csharp
public MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference StreamSelection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference</a>

---

##### `AdMarkersInput`<sup>Optional</sup> <a name="AdMarkersInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.adMarkersInput"></a>

```csharp
public string AdMarkersInput { get; }
```

- *Type:* string

---

##### `IncludeIframeOnlyStreamInput`<sup>Optional</sup> <a name="IncludeIframeOnlyStreamInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.includeIframeOnlyStreamInput"></a>

```csharp
public bool|IResolvable IncludeIframeOnlyStreamInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ManifestNameInput`<sup>Optional</sup> <a name="ManifestNameInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.manifestNameInput"></a>

```csharp
public string ManifestNameInput { get; }
```

- *Type:* string

---

##### `ProgramDateTimeIntervalSecondsInput`<sup>Optional</sup> <a name="ProgramDateTimeIntervalSecondsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.programDateTimeIntervalSecondsInput"></a>

```csharp
public double ProgramDateTimeIntervalSecondsInput { get; }
```

- *Type:* double

---

##### `RepeatExtXKeyInput`<sup>Optional</sup> <a name="RepeatExtXKeyInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.repeatExtXKeyInput"></a>

```csharp
public bool|IResolvable RepeatExtXKeyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `StreamSelectionInput`<sup>Optional</sup> <a name="StreamSelectionInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.streamSelectionInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection StreamSelectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a>

---

##### `AdMarkers`<sup>Required</sup> <a name="AdMarkers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.adMarkers"></a>

```csharp
public string AdMarkers { get; }
```

- *Type:* string

---

##### `IncludeIframeOnlyStream`<sup>Required</sup> <a name="IncludeIframeOnlyStream" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.includeIframeOnlyStream"></a>

```csharp
public bool|IResolvable IncludeIframeOnlyStream { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.manifestName"></a>

```csharp
public string ManifestName { get; }
```

- *Type:* string

---

##### `ProgramDateTimeIntervalSeconds`<sup>Required</sup> <a name="ProgramDateTimeIntervalSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.programDateTimeIntervalSeconds"></a>

```csharp
public double ProgramDateTimeIntervalSeconds { get; }
```

- *Type:* double

---

##### `RepeatExtXKey`<sup>Required</sup> <a name="RepeatExtXKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.repeatExtXKey"></a>

```csharp
public bool|IResolvable RepeatExtXKey { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationHlsPackageHlsManifests InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a>

---


### MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference <a name="MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond">ResetMaxVideoBitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond">ResetMinVideoBitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resetStreamOrder">ResetStreamOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxVideoBitsPerSecond` <a name="ResetMaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond"></a>

```csharp
private void ResetMaxVideoBitsPerSecond()
```

##### `ResetMinVideoBitsPerSecond` <a name="ResetMinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond"></a>

```csharp
private void ResetMinVideoBitsPerSecond()
```

##### `ResetStreamOrder` <a name="ResetStreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.resetStreamOrder"></a>

```csharp
private void ResetStreamOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput">MaxVideoBitsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput">MinVideoBitsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.streamOrderInput">StreamOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder">StreamOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxVideoBitsPerSecondInput`<sup>Optional</sup> <a name="MaxVideoBitsPerSecondInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput"></a>

```csharp
public double MaxVideoBitsPerSecondInput { get; }
```

- *Type:* double

---

##### `MinVideoBitsPerSecondInput`<sup>Optional</sup> <a name="MinVideoBitsPerSecondInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput"></a>

```csharp
public double MinVideoBitsPerSecondInput { get; }
```

- *Type:* double

---

##### `StreamOrderInput`<sup>Optional</sup> <a name="StreamOrderInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.streamOrderInput"></a>

```csharp
public string StreamOrderInput { get; }
```

- *Type:* string

---

##### `MaxVideoBitsPerSecond`<sup>Required</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```csharp
public double MaxVideoBitsPerSecond { get; }
```

- *Type:* double

---

##### `MinVideoBitsPerSecond`<sup>Required</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```csharp
public double MinVideoBitsPerSecond { get; }
```

- *Type:* double

---

##### `StreamOrder`<sup>Required</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```csharp
public string StreamOrder { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection">MediapackagePackagingConfigurationHlsPackageHlsManifestsStreamSelection</a>

---


### MediapackagePackagingConfigurationHlsPackageOutputReference <a name="MediapackagePackagingConfigurationHlsPackageOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationHlsPackageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putHlsManifests">PutHlsManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetHlsManifests">ResetHlsManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetIncludeDvbSubtitles">ResetIncludeDvbSubtitles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetSegmentDurationSeconds">ResetSegmentDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetUseAudioRenditionGroup">ResetUseAudioRenditionGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putEncryption"></a>

```csharp
private void PutEncryption(MediapackagePackagingConfigurationHlsPackageEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption">MediapackagePackagingConfigurationHlsPackageEncryption</a>

---

##### `PutHlsManifests` <a name="PutHlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putHlsManifests"></a>

```csharp
private void PutHlsManifests(IResolvable|MediapackagePackagingConfigurationHlsPackageHlsManifests[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.putHlsManifests.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a>[]

---

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetHlsManifests` <a name="ResetHlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetHlsManifests"></a>

```csharp
private void ResetHlsManifests()
```

##### `ResetIncludeDvbSubtitles` <a name="ResetIncludeDvbSubtitles" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetIncludeDvbSubtitles"></a>

```csharp
private void ResetIncludeDvbSubtitles()
```

##### `ResetSegmentDurationSeconds` <a name="ResetSegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetSegmentDurationSeconds"></a>

```csharp
private void ResetSegmentDurationSeconds()
```

##### `ResetUseAudioRenditionGroup` <a name="ResetUseAudioRenditionGroup" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.resetUseAudioRenditionGroup"></a>

```csharp
private void ResetUseAudioRenditionGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference">MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.hlsManifests">HlsManifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList">MediapackagePackagingConfigurationHlsPackageHlsManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption">MediapackagePackagingConfigurationHlsPackageEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.hlsManifestsInput">HlsManifestsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.includeDvbSubtitlesInput">IncludeDvbSubtitlesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.segmentDurationSecondsInput">SegmentDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.useAudioRenditionGroupInput">UseAudioRenditionGroupInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.includeDvbSubtitles">IncludeDvbSubtitles</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.useAudioRenditionGroup">UseAudioRenditionGroup</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage">MediapackagePackagingConfigurationHlsPackage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.encryption"></a>

```csharp
public MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference">MediapackagePackagingConfigurationHlsPackageEncryptionOutputReference</a>

---

##### `HlsManifests`<sup>Required</sup> <a name="HlsManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.hlsManifests"></a>

```csharp
public MediapackagePackagingConfigurationHlsPackageHlsManifestsList HlsManifests { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifestsList">MediapackagePackagingConfigurationHlsPackageHlsManifestsList</a>

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.encryptionInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationHlsPackageEncryption EncryptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageEncryption">MediapackagePackagingConfigurationHlsPackageEncryption</a>

---

##### `HlsManifestsInput`<sup>Optional</sup> <a name="HlsManifestsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.hlsManifestsInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationHlsPackageHlsManifests[] HlsManifestsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageHlsManifests">MediapackagePackagingConfigurationHlsPackageHlsManifests</a>[]

---

##### `IncludeDvbSubtitlesInput`<sup>Optional</sup> <a name="IncludeDvbSubtitlesInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.includeDvbSubtitlesInput"></a>

```csharp
public bool|IResolvable IncludeDvbSubtitlesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SegmentDurationSecondsInput`<sup>Optional</sup> <a name="SegmentDurationSecondsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.segmentDurationSecondsInput"></a>

```csharp
public double SegmentDurationSecondsInput { get; }
```

- *Type:* double

---

##### `UseAudioRenditionGroupInput`<sup>Optional</sup> <a name="UseAudioRenditionGroupInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.useAudioRenditionGroupInput"></a>

```csharp
public bool|IResolvable UseAudioRenditionGroupInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IncludeDvbSubtitles`<sup>Required</sup> <a name="IncludeDvbSubtitles" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.includeDvbSubtitles"></a>

```csharp
public bool|IResolvable IncludeDvbSubtitles { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SegmentDurationSeconds`<sup>Required</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.segmentDurationSeconds"></a>

```csharp
public double SegmentDurationSeconds { get; }
```

- *Type:* double

---

##### `UseAudioRenditionGroup`<sup>Required</sup> <a name="UseAudioRenditionGroup" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.useAudioRenditionGroup"></a>

```csharp
public bool|IResolvable UseAudioRenditionGroup { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackageOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationHlsPackage InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationHlsPackage">MediapackagePackagingConfigurationHlsPackage</a>

---


### MediapackagePackagingConfigurationMssPackageEncryptionOutputReference <a name="MediapackagePackagingConfigurationMssPackageEncryptionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationMssPackageEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.putSpekeKeyProvider">PutSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resetSpekeKeyProvider">ResetSpekeKeyProvider</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpekeKeyProvider` <a name="PutSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.putSpekeKeyProvider"></a>

```csharp
private void PutSpekeKeyProvider(MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.putSpekeKeyProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a>

---

##### `ResetSpekeKeyProvider` <a name="ResetSpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.resetSpekeKeyProvider"></a>

```csharp
private void ResetSpekeKeyProvider()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.spekeKeyProvider">SpekeKeyProvider</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.spekeKeyProviderInput">SpekeKeyProviderInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption">MediapackagePackagingConfigurationMssPackageEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpekeKeyProvider`<sup>Required</sup> <a name="SpekeKeyProvider" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.spekeKeyProvider"></a>

```csharp
public MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference SpekeKeyProvider { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference</a>

---

##### `SpekeKeyProviderInput`<sup>Optional</sup> <a name="SpekeKeyProviderInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.spekeKeyProviderInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider SpekeKeyProviderInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationMssPackageEncryption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption">MediapackagePackagingConfigurationMssPackageEncryption</a>

---


### MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference <a name="MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio">ResetPresetSpeke20Audio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video">ResetPresetSpeke20Video</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPresetSpeke20Audio` <a name="ResetPresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Audio"></a>

```csharp
private void ResetPresetSpeke20Audio()
```

##### `ResetPresetSpeke20Video` <a name="ResetPresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.resetPresetSpeke20Video"></a>

```csharp
private void ResetPresetSpeke20Video()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput">PresetSpeke20AudioInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput">PresetSpeke20VideoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio">PresetSpeke20Audio</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video">PresetSpeke20Video</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PresetSpeke20AudioInput`<sup>Optional</sup> <a name="PresetSpeke20AudioInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20AudioInput"></a>

```csharp
public string PresetSpeke20AudioInput { get; }
```

- *Type:* string

---

##### `PresetSpeke20VideoInput`<sup>Optional</sup> <a name="PresetSpeke20VideoInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20VideoInput"></a>

```csharp
public string PresetSpeke20VideoInput { get; }
```

- *Type:* string

---

##### `PresetSpeke20Audio`<sup>Required</sup> <a name="PresetSpeke20Audio" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Audio"></a>

```csharp
public string PresetSpeke20Audio { get; }
```

- *Type:* string

---

##### `PresetSpeke20Video`<sup>Required</sup> <a name="PresetSpeke20Video" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.presetSpeke20Video"></a>

```csharp
public string PresetSpeke20Video { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---


### MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference <a name="MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration">PutEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration">ResetEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds">ResetSystemIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionContractConfiguration` <a name="PutEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration"></a>

```csharp
private void PutEncryptionContractConfiguration(MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.putEncryptionContractConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `ResetEncryptionContractConfiguration` <a name="ResetEncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetEncryptionContractConfiguration"></a>

```csharp
private void ResetEncryptionContractConfiguration()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetSystemIds` <a name="ResetSystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetSystemIds"></a>

```csharp
private void ResetSystemIds()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration">EncryptionContractConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput">EncryptionContractConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput">SystemIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds">SystemIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionContractConfiguration`<sup>Required</sup> <a name="EncryptionContractConfiguration" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfiguration"></a>

```csharp
public MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference EncryptionContractConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfigurationOutputReference</a>

---

##### `EncryptionContractConfigurationInput`<sup>Optional</sup> <a name="EncryptionContractConfigurationInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.encryptionContractConfigurationInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration EncryptionContractConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderEncryptionContractConfiguration</a>

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `SystemIdsInput`<sup>Optional</sup> <a name="SystemIdsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.systemIdsInput"></a>

```csharp
public string[] SystemIdsInput { get; }
```

- *Type:* string[]

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SystemIds`<sup>Required</sup> <a name="SystemIds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.systemIds"></a>

```csharp
public string[] SystemIds { get; }
```

- *Type:* string[]

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProviderOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider">MediapackagePackagingConfigurationMssPackageEncryptionSpekeKeyProvider</a>

---


### MediapackagePackagingConfigurationMssPackageMssManifestsList <a name="MediapackagePackagingConfigurationMssPackageMssManifestsList" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationMssPackageMssManifestsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.get"></a>

```csharp
private MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationMssPackageMssManifests[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a>[]

---


### MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference <a name="MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.putStreamSelection">PutStreamSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resetManifestName">ResetManifestName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resetStreamSelection">ResetStreamSelection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStreamSelection` <a name="PutStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.putStreamSelection"></a>

```csharp
private void PutStreamSelection(MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.putStreamSelection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a>

---

##### `ResetManifestName` <a name="ResetManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resetManifestName"></a>

```csharp
private void ResetManifestName()
```

##### `ResetStreamSelection` <a name="ResetStreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.resetStreamSelection"></a>

```csharp
private void ResetStreamSelection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.streamSelection">StreamSelection</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.manifestNameInput">ManifestNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.streamSelectionInput">StreamSelectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.manifestName">ManifestName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StreamSelection`<sup>Required</sup> <a name="StreamSelection" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.streamSelection"></a>

```csharp
public MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference StreamSelection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference</a>

---

##### `ManifestNameInput`<sup>Optional</sup> <a name="ManifestNameInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.manifestNameInput"></a>

```csharp
public string ManifestNameInput { get; }
```

- *Type:* string

---

##### `StreamSelectionInput`<sup>Optional</sup> <a name="StreamSelectionInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.streamSelectionInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection StreamSelectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a>

---

##### `ManifestName`<sup>Required</sup> <a name="ManifestName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.manifestName"></a>

```csharp
public string ManifestName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationMssPackageMssManifests InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a>

---


### MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference <a name="MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond">ResetMaxVideoBitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond">ResetMinVideoBitsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resetStreamOrder">ResetStreamOrder</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxVideoBitsPerSecond` <a name="ResetMaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resetMaxVideoBitsPerSecond"></a>

```csharp
private void ResetMaxVideoBitsPerSecond()
```

##### `ResetMinVideoBitsPerSecond` <a name="ResetMinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resetMinVideoBitsPerSecond"></a>

```csharp
private void ResetMinVideoBitsPerSecond()
```

##### `ResetStreamOrder` <a name="ResetStreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.resetStreamOrder"></a>

```csharp
private void ResetStreamOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput">MaxVideoBitsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput">MinVideoBitsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.streamOrderInput">StreamOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond">MaxVideoBitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond">MinVideoBitsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.streamOrder">StreamOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxVideoBitsPerSecondInput`<sup>Optional</sup> <a name="MaxVideoBitsPerSecondInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecondInput"></a>

```csharp
public double MaxVideoBitsPerSecondInput { get; }
```

- *Type:* double

---

##### `MinVideoBitsPerSecondInput`<sup>Optional</sup> <a name="MinVideoBitsPerSecondInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecondInput"></a>

```csharp
public double MinVideoBitsPerSecondInput { get; }
```

- *Type:* double

---

##### `StreamOrderInput`<sup>Optional</sup> <a name="StreamOrderInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.streamOrderInput"></a>

```csharp
public string StreamOrderInput { get; }
```

- *Type:* string

---

##### `MaxVideoBitsPerSecond`<sup>Required</sup> <a name="MaxVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.maxVideoBitsPerSecond"></a>

```csharp
public double MaxVideoBitsPerSecond { get; }
```

- *Type:* double

---

##### `MinVideoBitsPerSecond`<sup>Required</sup> <a name="MinVideoBitsPerSecond" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.minVideoBitsPerSecond"></a>

```csharp
public double MinVideoBitsPerSecond { get; }
```

- *Type:* double

---

##### `StreamOrder`<sup>Required</sup> <a name="StreamOrder" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.streamOrder"></a>

```csharp
public string StreamOrder { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection">MediapackagePackagingConfigurationMssPackageMssManifestsStreamSelection</a>

---


### MediapackagePackagingConfigurationMssPackageOutputReference <a name="MediapackagePackagingConfigurationMssPackageOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationMssPackageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.putEncryption">PutEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.putMssManifests">PutMssManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resetEncryption">ResetEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resetMssManifests">ResetMssManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resetSegmentDurationSeconds">ResetSegmentDurationSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryption` <a name="PutEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.putEncryption"></a>

```csharp
private void PutEncryption(MediapackagePackagingConfigurationMssPackageEncryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.putEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption">MediapackagePackagingConfigurationMssPackageEncryption</a>

---

##### `PutMssManifests` <a name="PutMssManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.putMssManifests"></a>

```csharp
private void PutMssManifests(IResolvable|MediapackagePackagingConfigurationMssPackageMssManifests[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.putMssManifests.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a>[]

---

##### `ResetEncryption` <a name="ResetEncryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resetEncryption"></a>

```csharp
private void ResetEncryption()
```

##### `ResetMssManifests` <a name="ResetMssManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resetMssManifests"></a>

```csharp
private void ResetMssManifests()
```

##### `ResetSegmentDurationSeconds` <a name="ResetSegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.resetSegmentDurationSeconds"></a>

```csharp
private void ResetSegmentDurationSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.encryption">Encryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference">MediapackagePackagingConfigurationMssPackageEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.mssManifests">MssManifests</a></code> | <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList">MediapackagePackagingConfigurationMssPackageMssManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption">MediapackagePackagingConfigurationMssPackageEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.mssManifestsInput">MssManifestsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.segmentDurationSecondsInput">SegmentDurationSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.segmentDurationSeconds">SegmentDurationSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage">MediapackagePackagingConfigurationMssPackage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.encryption"></a>

```csharp
public MediapackagePackagingConfigurationMssPackageEncryptionOutputReference Encryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryptionOutputReference">MediapackagePackagingConfigurationMssPackageEncryptionOutputReference</a>

---

##### `MssManifests`<sup>Required</sup> <a name="MssManifests" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.mssManifests"></a>

```csharp
public MediapackagePackagingConfigurationMssPackageMssManifestsList MssManifests { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifestsList">MediapackagePackagingConfigurationMssPackageMssManifestsList</a>

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.encryptionInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationMssPackageEncryption EncryptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageEncryption">MediapackagePackagingConfigurationMssPackageEncryption</a>

---

##### `MssManifestsInput`<sup>Optional</sup> <a name="MssManifestsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.mssManifestsInput"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationMssPackageMssManifests[] MssManifestsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageMssManifests">MediapackagePackagingConfigurationMssPackageMssManifests</a>[]

---

##### `SegmentDurationSecondsInput`<sup>Optional</sup> <a name="SegmentDurationSecondsInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.segmentDurationSecondsInput"></a>

```csharp
public double SegmentDurationSecondsInput { get; }
```

- *Type:* double

---

##### `SegmentDurationSeconds`<sup>Required</sup> <a name="SegmentDurationSeconds" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.segmentDurationSeconds"></a>

```csharp
public double SegmentDurationSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackageOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationMssPackage InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationMssPackage">MediapackagePackagingConfigurationMssPackage</a>

---


### MediapackagePackagingConfigurationTagsList <a name="MediapackagePackagingConfigurationTagsList" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.get"></a>

```csharp
private MediapackagePackagingConfigurationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsList.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a>[]

---


### MediapackagePackagingConfigurationTagsOutputReference <a name="MediapackagePackagingConfigurationTagsOutputReference" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediapackagePackagingConfigurationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediapackagePackagingConfigurationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediapackagePackagingConfiguration.MediapackagePackagingConfigurationTags">MediapackagePackagingConfigurationTags</a>

---



