# `appstreamStack` Submodule <a name="`appstreamStack` Submodule" id="@cdktn/provider-awscc.appstreamStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamStack <a name="AppstreamStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack awscc_appstream_stack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStack(Construct Scope, string Id, AppstreamStackConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig">AppstreamStackConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig">AppstreamStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAccessEndpoints">PutAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAgentAccessConfig">PutAgentAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putApplicationSettings">PutApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putContentRedirection">PutContentRedirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStorageConnectors">PutStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStreamingExperienceSettings">PutStreamingExperienceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.putUserSettings">PutUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAccessEndpoints">ResetAccessEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAgentAccessConfig">ResetAgentAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetApplicationSettings">ResetApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAttributesToDelete">ResetAttributesToDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetContentRedirection">ResetContentRedirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDeleteStorageConnectors">ResetDeleteStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetEmbedHostDomains">ResetEmbedHostDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetFeedbackUrl">ResetFeedbackUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetRedirectUrl">ResetRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetStorageConnectors">ResetStorageConnectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetStreamingExperienceSettings">ResetStreamingExperienceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetUserSettings">ResetUserSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessEndpoints` <a name="PutAccessEndpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAccessEndpoints"></a>

```csharp
private void PutAccessEndpoints(IResolvable|AppstreamStackAccessEndpoints[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAccessEndpoints.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]

---

##### `PutAgentAccessConfig` <a name="PutAgentAccessConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAgentAccessConfig"></a>

```csharp
private void PutAgentAccessConfig(AppstreamStackAgentAccessConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putAgentAccessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a>

---

##### `PutApplicationSettings` <a name="PutApplicationSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putApplicationSettings"></a>

```csharp
private void PutApplicationSettings(AppstreamStackApplicationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putApplicationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

---

##### `PutContentRedirection` <a name="PutContentRedirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putContentRedirection"></a>

```csharp
private void PutContentRedirection(AppstreamStackContentRedirection Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putContentRedirection.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a>

---

##### `PutStorageConnectors` <a name="PutStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStorageConnectors"></a>

```csharp
private void PutStorageConnectors(IResolvable|AppstreamStackStorageConnectors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStorageConnectors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]

---

##### `PutStreamingExperienceSettings` <a name="PutStreamingExperienceSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStreamingExperienceSettings"></a>

```csharp
private void PutStreamingExperienceSettings(AppstreamStackStreamingExperienceSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putStreamingExperienceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putTags"></a>

```csharp
private void PutTags(IResolvable|AppstreamStackTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>[]

---

##### `PutUserSettings` <a name="PutUserSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putUserSettings"></a>

```csharp
private void PutUserSettings(IResolvable|AppstreamStackUserSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.putUserSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]

---

##### `ResetAccessEndpoints` <a name="ResetAccessEndpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAccessEndpoints"></a>

```csharp
private void ResetAccessEndpoints()
```

##### `ResetAgentAccessConfig` <a name="ResetAgentAccessConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAgentAccessConfig"></a>

```csharp
private void ResetAgentAccessConfig()
```

##### `ResetApplicationSettings` <a name="ResetApplicationSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetApplicationSettings"></a>

```csharp
private void ResetApplicationSettings()
```

##### `ResetAttributesToDelete` <a name="ResetAttributesToDelete" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetAttributesToDelete"></a>

```csharp
private void ResetAttributesToDelete()
```

##### `ResetContentRedirection` <a name="ResetContentRedirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetContentRedirection"></a>

```csharp
private void ResetContentRedirection()
```

##### `ResetDeleteStorageConnectors` <a name="ResetDeleteStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDeleteStorageConnectors"></a>

```csharp
private void ResetDeleteStorageConnectors()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEmbedHostDomains` <a name="ResetEmbedHostDomains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetEmbedHostDomains"></a>

```csharp
private void ResetEmbedHostDomains()
```

##### `ResetFeedbackUrl` <a name="ResetFeedbackUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetFeedbackUrl"></a>

```csharp
private void ResetFeedbackUrl()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRedirectUrl` <a name="ResetRedirectUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetRedirectUrl"></a>

```csharp
private void ResetRedirectUrl()
```

##### `ResetStorageConnectors` <a name="ResetStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetStorageConnectors"></a>

```csharp
private void ResetStorageConnectors()
```

##### `ResetStreamingExperienceSettings` <a name="ResetStreamingExperienceSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetStreamingExperienceSettings"></a>

```csharp
private void ResetStreamingExperienceSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUserSettings` <a name="ResetUserSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.resetUserSettings"></a>

```csharp
private void ResetUserSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamStack resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppstreamStack.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppstreamStack.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppstreamStack.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppstreamStack.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppstreamStack resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppstreamStack to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppstreamStack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamStack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.accessEndpoints">AccessEndpoints</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList">AppstreamStackAccessEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.agentAccessConfig">AgentAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference">AppstreamStackAgentAccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.applicationSettings">ApplicationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference">AppstreamStackApplicationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.contentRedirection">ContentRedirection</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference">AppstreamStackContentRedirectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.storageConnectors">StorageConnectors</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList">AppstreamStackStorageConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.streamingExperienceSettings">StreamingExperienceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference">AppstreamStackStreamingExperienceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList">AppstreamStackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.userSettings">UserSettings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList">AppstreamStackUserSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.accessEndpointsInput">AccessEndpointsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.agentAccessConfigInput">AgentAccessConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.applicationSettingsInput">ApplicationSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.attributesToDeleteInput">AttributesToDeleteInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.contentRedirectionInput">ContentRedirectionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.deleteStorageConnectorsInput">DeleteStorageConnectorsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.embedHostDomainsInput">EmbedHostDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.feedbackUrlInput">FeedbackUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.redirectUrlInput">RedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.storageConnectorsInput">StorageConnectorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.streamingExperienceSettingsInput">StreamingExperienceSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.userSettingsInput">UserSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.attributesToDelete">AttributesToDelete</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.deleteStorageConnectors">DeleteStorageConnectors</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.embedHostDomains">EmbedHostDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.feedbackUrl">FeedbackUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessEndpoints`<sup>Required</sup> <a name="AccessEndpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.accessEndpoints"></a>

```csharp
public AppstreamStackAccessEndpointsList AccessEndpoints { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList">AppstreamStackAccessEndpointsList</a>

---

##### `AgentAccessConfig`<sup>Required</sup> <a name="AgentAccessConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.agentAccessConfig"></a>

```csharp
public AppstreamStackAgentAccessConfigOutputReference AgentAccessConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference">AppstreamStackAgentAccessConfigOutputReference</a>

---

##### `ApplicationSettings`<sup>Required</sup> <a name="ApplicationSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.applicationSettings"></a>

```csharp
public AppstreamStackApplicationSettingsOutputReference ApplicationSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference">AppstreamStackApplicationSettingsOutputReference</a>

---

##### `ContentRedirection`<sup>Required</sup> <a name="ContentRedirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.contentRedirection"></a>

```csharp
public AppstreamStackContentRedirectionOutputReference ContentRedirection { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference">AppstreamStackContentRedirectionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StorageConnectors`<sup>Required</sup> <a name="StorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.storageConnectors"></a>

```csharp
public AppstreamStackStorageConnectorsList StorageConnectors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList">AppstreamStackStorageConnectorsList</a>

---

##### `StreamingExperienceSettings`<sup>Required</sup> <a name="StreamingExperienceSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.streamingExperienceSettings"></a>

```csharp
public AppstreamStackStreamingExperienceSettingsOutputReference StreamingExperienceSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference">AppstreamStackStreamingExperienceSettingsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tags"></a>

```csharp
public AppstreamStackTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList">AppstreamStackTagsList</a>

---

##### `UserSettings`<sup>Required</sup> <a name="UserSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.userSettings"></a>

```csharp
public AppstreamStackUserSettingsList UserSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList">AppstreamStackUserSettingsList</a>

---

##### `AccessEndpointsInput`<sup>Optional</sup> <a name="AccessEndpointsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.accessEndpointsInput"></a>

```csharp
public IResolvable|AppstreamStackAccessEndpoints[] AccessEndpointsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]

---

##### `AgentAccessConfigInput`<sup>Optional</sup> <a name="AgentAccessConfigInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.agentAccessConfigInput"></a>

```csharp
public IResolvable|AppstreamStackAgentAccessConfig AgentAccessConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a>

---

##### `ApplicationSettingsInput`<sup>Optional</sup> <a name="ApplicationSettingsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.applicationSettingsInput"></a>

```csharp
public IResolvable|AppstreamStackApplicationSettings ApplicationSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

---

##### `AttributesToDeleteInput`<sup>Optional</sup> <a name="AttributesToDeleteInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.attributesToDeleteInput"></a>

```csharp
public string[] AttributesToDeleteInput { get; }
```

- *Type:* string[]

---

##### `ContentRedirectionInput`<sup>Optional</sup> <a name="ContentRedirectionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.contentRedirectionInput"></a>

```csharp
public IResolvable|AppstreamStackContentRedirection ContentRedirectionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a>

---

##### `DeleteStorageConnectorsInput`<sup>Optional</sup> <a name="DeleteStorageConnectorsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.deleteStorageConnectorsInput"></a>

```csharp
public bool|IResolvable DeleteStorageConnectorsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmbedHostDomainsInput`<sup>Optional</sup> <a name="EmbedHostDomainsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.embedHostDomainsInput"></a>

```csharp
public string[] EmbedHostDomainsInput { get; }
```

- *Type:* string[]

---

##### `FeedbackUrlInput`<sup>Optional</sup> <a name="FeedbackUrlInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.feedbackUrlInput"></a>

```csharp
public string FeedbackUrlInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RedirectUrlInput`<sup>Optional</sup> <a name="RedirectUrlInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.redirectUrlInput"></a>

```csharp
public string RedirectUrlInput { get; }
```

- *Type:* string

---

##### `StorageConnectorsInput`<sup>Optional</sup> <a name="StorageConnectorsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.storageConnectorsInput"></a>

```csharp
public IResolvable|AppstreamStackStorageConnectors[] StorageConnectorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]

---

##### `StreamingExperienceSettingsInput`<sup>Optional</sup> <a name="StreamingExperienceSettingsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.streamingExperienceSettingsInput"></a>

```csharp
public IResolvable|AppstreamStackStreamingExperienceSettings StreamingExperienceSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tagsInput"></a>

```csharp
public IResolvable|AppstreamStackTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>[]

---

##### `UserSettingsInput`<sup>Optional</sup> <a name="UserSettingsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.userSettingsInput"></a>

```csharp
public IResolvable|AppstreamStackUserSettings[] UserSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]

---

##### `AttributesToDelete`<sup>Required</sup> <a name="AttributesToDelete" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.attributesToDelete"></a>

```csharp
public string[] AttributesToDelete { get; }
```

- *Type:* string[]

---

##### `DeleteStorageConnectors`<sup>Required</sup> <a name="DeleteStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.deleteStorageConnectors"></a>

```csharp
public bool|IResolvable DeleteStorageConnectors { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EmbedHostDomains`<sup>Required</sup> <a name="EmbedHostDomains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.embedHostDomains"></a>

```csharp
public string[] EmbedHostDomains { get; }
```

- *Type:* string[]

---

##### `FeedbackUrl`<sup>Required</sup> <a name="FeedbackUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.feedbackUrl"></a>

```csharp
public string FeedbackUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RedirectUrl`<sup>Required</sup> <a name="RedirectUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStack.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamStackAccessEndpoints <a name="AppstreamStackAccessEndpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackAccessEndpoints {
    string EndpointType = null,
    string VpceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.property.endpointType">EndpointType</a></code> | <code>string</code> | The type of interface endpoint. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.property.vpceId">VpceId</a></code> | <code>string</code> | The identifier (ID) of the VPC in which the interface endpoint is used. |

---

##### `EndpointType`<sup>Optional</sup> <a name="EndpointType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.property.endpointType"></a>

```csharp
public string EndpointType { get; set; }
```

- *Type:* string

The type of interface endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#endpoint_type AppstreamStack#endpoint_type}

---

##### `VpceId`<sup>Optional</sup> <a name="VpceId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints.property.vpceId"></a>

```csharp
public string VpceId { get; set; }
```

- *Type:* string

The identifier (ID) of the VPC in which the interface endpoint is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#vpce_id AppstreamStack#vpce_id}

---

### AppstreamStackAgentAccessConfig <a name="AppstreamStackAgentAccessConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackAgentAccessConfig {
    string S3BucketArn = null,
    string ScreenImageFormat = null,
    string ScreenResolution = null,
    bool|IResolvable ScreenshotsUploadEnabled = null,
    IResolvable|AppstreamStackAgentAccessConfigSettings[] Settings = null,
    string UserControlMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.s3BucketArn">S3BucketArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon S3 bucket where agent screenshots are stored. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenImageFormat">ScreenImageFormat</a></code> | <code>string</code> | The image format for agent screen captures. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenResolution">ScreenResolution</a></code> | <code>string</code> | The screen resolution for the agent streaming environment. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenshotsUploadEnabled">ScreenshotsUploadEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether screenshot uploads to Amazon S3 are enabled for agent sessions. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.settings">Settings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>[]</code> | The list of agent access settings that define permissions for each agent action. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.userControlMode">UserControlMode</a></code> | <code>string</code> | The user control mode for agent sessions. |

---

##### `S3BucketArn`<sup>Optional</sup> <a name="S3BucketArn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.s3BucketArn"></a>

```csharp
public string S3BucketArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon S3 bucket where agent screenshots are stored.

Required when ScreenshotsUploadEnabled is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#s3_bucket_arn AppstreamStack#s3_bucket_arn}

---

##### `ScreenImageFormat`<sup>Optional</sup> <a name="ScreenImageFormat" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenImageFormat"></a>

```csharp
public string ScreenImageFormat { get; set; }
```

- *Type:* string

The image format for agent screen captures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#screen_image_format AppstreamStack#screen_image_format}

---

##### `ScreenResolution`<sup>Optional</sup> <a name="ScreenResolution" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenResolution"></a>

```csharp
public string ScreenResolution { get; set; }
```

- *Type:* string

The screen resolution for the agent streaming environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#screen_resolution AppstreamStack#screen_resolution}

---

##### `ScreenshotsUploadEnabled`<sup>Optional</sup> <a name="ScreenshotsUploadEnabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.screenshotsUploadEnabled"></a>

```csharp
public bool|IResolvable ScreenshotsUploadEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether screenshot uploads to Amazon S3 are enabled for agent sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#screenshots_upload_enabled AppstreamStack#screenshots_upload_enabled}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.settings"></a>

```csharp
public IResolvable|AppstreamStackAgentAccessConfigSettings[] Settings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>[]

The list of agent access settings that define permissions for each agent action.

You must specify at least one setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#settings AppstreamStack#settings}

---

##### `UserControlMode`<sup>Optional</sup> <a name="UserControlMode" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig.property.userControlMode"></a>

```csharp
public string UserControlMode { get; set; }
```

- *Type:* string

The user control mode for agent sessions.

This setting determines how users can interact with agent sessions. Valid values are VIEW_ONLY, VIEW_STOP, and DISABLED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#user_control_mode AppstreamStack#user_control_mode}

---

### AppstreamStackAgentAccessConfigSettings <a name="AppstreamStackAgentAccessConfigSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackAgentAccessConfigSettings {
    string AgentAction = null,
    string Permission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.property.agentAction">AgentAction</a></code> | <code>string</code> | The agent action to configure. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.property.permission">Permission</a></code> | <code>string</code> | Whether the agent action is enabled or disabled. |

---

##### `AgentAction`<sup>Optional</sup> <a name="AgentAction" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.property.agentAction"></a>

```csharp
public string AgentAction { get; set; }
```

- *Type:* string

The agent action to configure.

Valid values are COMPUTER_VISION, COMPUTER_INPUT, and FORWARD_MCP_TOOLS. COMPUTER_VISION allows agents to take screenshots of the desktop. COMPUTER_INPUT allows agents to click, type, and scroll on the desktop and requires COMPUTER_VISION to also be enabled. FORWARD_MCP_TOOLS allows agents to interact with applications and the desktop operating system through direct MCP calls rather than using computer use tools. Forwards MCP tools configured on the WorkSpaces application session to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#agent_action AppstreamStack#agent_action}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Whether the agent action is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#permission AppstreamStack#permission}

---

### AppstreamStackApplicationSettings <a name="AppstreamStackApplicationSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackApplicationSettings {
    bool|IResolvable Enabled = null,
    string SettingsGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enables or disables persistent application settings for users during their streaming sessions. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.property.settingsGroup">SettingsGroup</a></code> | <code>string</code> | The path prefix for the S3 bucket where users' persistent application settings are stored. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enables or disables persistent application settings for users during their streaming sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#enabled AppstreamStack#enabled}

---

##### `SettingsGroup`<sup>Optional</sup> <a name="SettingsGroup" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings.property.settingsGroup"></a>

```csharp
public string SettingsGroup { get; set; }
```

- *Type:* string

The path prefix for the S3 bucket where users' persistent application settings are stored.

You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#settings_group AppstreamStack#settings_group}

---

### AppstreamStackConfig <a name="AppstreamStackConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|AppstreamStackAccessEndpoints[] AccessEndpoints = null,
    AppstreamStackAgentAccessConfig AgentAccessConfig = null,
    AppstreamStackApplicationSettings ApplicationSettings = null,
    string[] AttributesToDelete = null,
    AppstreamStackContentRedirection ContentRedirection = null,
    bool|IResolvable DeleteStorageConnectors = null,
    string Description = null,
    string DisplayName = null,
    string[] EmbedHostDomains = null,
    string FeedbackUrl = null,
    string Name = null,
    string RedirectUrl = null,
    IResolvable|AppstreamStackStorageConnectors[] StorageConnectors = null,
    AppstreamStackStreamingExperienceSettings StreamingExperienceSettings = null,
    IResolvable|AppstreamStackTags[] Tags = null,
    IResolvable|AppstreamStackUserSettings[] UserSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.accessEndpoints">AccessEndpoints</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]</code> | The list of virtual private cloud (VPC) interface endpoint objects. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.agentAccessConfig">AgentAccessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a></code> | The configuration for agent access on the stack. If specified, agent access is enabled for the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.applicationSettings">ApplicationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | The persistent application settings for users of the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.attributesToDelete">AttributesToDelete</a></code> | <code>string[]</code> | The stack attributes to delete. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.contentRedirection">ContentRedirection</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a></code> | The content redirection settings for the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.deleteStorageConnectors">DeleteStorageConnectors</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | This parameter has been deprecated. Deletes the storage connectors currently enabled for the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.description">Description</a></code> | <code>string</code> | The description to display. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The stack name to display. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.embedHostDomains">EmbedHostDomains</a></code> | <code>string[]</code> | The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.feedbackUrl">FeedbackUrl</a></code> | <code>string</code> | The URL that users are redirected to after they click the Send Feedback link. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.name">Name</a></code> | <code>string</code> | The name of the stack. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.redirectUrl">RedirectUrl</a></code> | <code>string</code> | The URL that users are redirected to after their streaming session ends. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.storageConnectors">StorageConnectors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]</code> | The storage connectors to enable. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.streamingExperienceSettings">StreamingExperienceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a></code> | The streaming protocol that you want your stack to prefer. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>[]</code> | An array of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.userSettings">UserSettings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]</code> | The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessEndpoints`<sup>Optional</sup> <a name="AccessEndpoints" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.accessEndpoints"></a>

```csharp
public IResolvable|AppstreamStackAccessEndpoints[] AccessEndpoints { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]

The list of virtual private cloud (VPC) interface endpoint objects.

Users of the stack can connect to AppStream 2.0 only through the specified endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#access_endpoints AppstreamStack#access_endpoints}

---

##### `AgentAccessConfig`<sup>Optional</sup> <a name="AgentAccessConfig" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.agentAccessConfig"></a>

```csharp
public AppstreamStackAgentAccessConfig AgentAccessConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a>

The configuration for agent access on the stack. If specified, agent access is enabled for the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#agent_access_config AppstreamStack#agent_access_config}

---

##### `ApplicationSettings`<sup>Optional</sup> <a name="ApplicationSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.applicationSettings"></a>

```csharp
public AppstreamStackApplicationSettings ApplicationSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

The persistent application settings for users of the stack.

When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#application_settings AppstreamStack#application_settings}

---

##### `AttributesToDelete`<sup>Optional</sup> <a name="AttributesToDelete" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.attributesToDelete"></a>

```csharp
public string[] AttributesToDelete { get; set; }
```

- *Type:* string[]

The stack attributes to delete.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#attributes_to_delete AppstreamStack#attributes_to_delete}

---

##### `ContentRedirection`<sup>Optional</sup> <a name="ContentRedirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.contentRedirection"></a>

```csharp
public AppstreamStackContentRedirection ContentRedirection { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a>

The content redirection settings for the stack.

These settings control URL redirection between the streaming session and the local device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#content_redirection AppstreamStack#content_redirection}

---

##### `DeleteStorageConnectors`<sup>Optional</sup> <a name="DeleteStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.deleteStorageConnectors"></a>

```csharp
public bool|IResolvable DeleteStorageConnectors { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

This parameter has been deprecated. Deletes the storage connectors currently enabled for the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#delete_storage_connectors AppstreamStack#delete_storage_connectors}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#description AppstreamStack#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The stack name to display.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#display_name AppstreamStack#display_name}

---

##### `EmbedHostDomains`<sup>Optional</sup> <a name="EmbedHostDomains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.embedHostDomains"></a>

```csharp
public string[] EmbedHostDomains { get; set; }
```

- *Type:* string[]

The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#embed_host_domains AppstreamStack#embed_host_domains}

---

##### `FeedbackUrl`<sup>Optional</sup> <a name="FeedbackUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.feedbackUrl"></a>

```csharp
public string FeedbackUrl { get; set; }
```

- *Type:* string

The URL that users are redirected to after they click the Send Feedback link.

If no URL is specified, no Send Feedback link is displayed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#feedback_url AppstreamStack#feedback_url}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#name AppstreamStack#name}

---

##### `RedirectUrl`<sup>Optional</sup> <a name="RedirectUrl" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.redirectUrl"></a>

```csharp
public string RedirectUrl { get; set; }
```

- *Type:* string

The URL that users are redirected to after their streaming session ends.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#redirect_url AppstreamStack#redirect_url}

---

##### `StorageConnectors`<sup>Optional</sup> <a name="StorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.storageConnectors"></a>

```csharp
public IResolvable|AppstreamStackStorageConnectors[] StorageConnectors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]

The storage connectors to enable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#storage_connectors AppstreamStack#storage_connectors}

---

##### `StreamingExperienceSettings`<sup>Optional</sup> <a name="StreamingExperienceSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.streamingExperienceSettings"></a>

```csharp
public AppstreamStackStreamingExperienceSettings StreamingExperienceSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

The streaming protocol that you want your stack to prefer.

This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#streaming_experience_settings AppstreamStack#streaming_experience_settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.tags"></a>

```csharp
public IResolvable|AppstreamStackTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>[]

An array of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#tags AppstreamStack#tags}

---

##### `UserSettings`<sup>Optional</sup> <a name="UserSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackConfig.property.userSettings"></a>

```csharp
public IResolvable|AppstreamStackUserSettings[] UserSettings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]

The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#user_settings AppstreamStack#user_settings}

---

### AppstreamStackContentRedirection <a name="AppstreamStackContentRedirection" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackContentRedirection {
    AppstreamStackContentRedirectionHostToClient HostToClient = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection.property.hostToClient">HostToClient</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a></code> | The URL redirection configuration from the streaming session host to the client. |

---

##### `HostToClient`<sup>Optional</sup> <a name="HostToClient" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection.property.hostToClient"></a>

```csharp
public AppstreamStackContentRedirectionHostToClient HostToClient { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a>

The URL redirection configuration from the streaming session host to the client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#host_to_client AppstreamStack#host_to_client}

---

### AppstreamStackContentRedirectionHostToClient <a name="AppstreamStackContentRedirectionHostToClient" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackContentRedirectionHostToClient {
    string[] AllowedUrls = null,
    string[] DeniedUrls = null,
    bool|IResolvable Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.allowedUrls">AllowedUrls</a></code> | <code>string[]</code> | The URLs that are allowed for redirection. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.deniedUrls">DeniedUrls</a></code> | <code>string[]</code> | The URLs that are denied for redirection. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Specifies whether URL redirection is enabled or disabled. |

---

##### `AllowedUrls`<sup>Optional</sup> <a name="AllowedUrls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.allowedUrls"></a>

```csharp
public string[] AllowedUrls { get; set; }
```

- *Type:* string[]

The URLs that are allowed for redirection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#allowed_urls AppstreamStack#allowed_urls}

---

##### `DeniedUrls`<sup>Optional</sup> <a name="DeniedUrls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.deniedUrls"></a>

```csharp
public string[] DeniedUrls { get; set; }
```

- *Type:* string[]

The URLs that are denied for redirection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#denied_urls AppstreamStack#denied_urls}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Specifies whether URL redirection is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#enabled AppstreamStack#enabled}

---

### AppstreamStackStorageConnectors <a name="AppstreamStackStorageConnectors" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackStorageConnectors {
    string ConnectorType = null,
    string[] Domains = null,
    string ResourceIdentifier = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.connectorType">ConnectorType</a></code> | <code>string</code> | The type of storage connector. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.domains">Domains</a></code> | <code>string[]</code> | The names of the domains for the account. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | The ARN of the storage connector. |

---

##### `ConnectorType`<sup>Optional</sup> <a name="ConnectorType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.connectorType"></a>

```csharp
public string ConnectorType { get; set; }
```

- *Type:* string

The type of storage connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#connector_type AppstreamStack#connector_type}

---

##### `Domains`<sup>Optional</sup> <a name="Domains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.domains"></a>

```csharp
public string[] Domains { get; set; }
```

- *Type:* string[]

The names of the domains for the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#domains AppstreamStack#domains}

---

##### `ResourceIdentifier`<sup>Optional</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; set; }
```

- *Type:* string

The ARN of the storage connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#resource_identifier AppstreamStack#resource_identifier}

---

### AppstreamStackStreamingExperienceSettings <a name="AppstreamStackStreamingExperienceSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackStreamingExperienceSettings {
    string PreferredProtocol = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings.property.preferredProtocol">PreferredProtocol</a></code> | <code>string</code> | The preferred protocol that you want to use while streaming your application. |

---

##### `PreferredProtocol`<sup>Optional</sup> <a name="PreferredProtocol" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings.property.preferredProtocol"></a>

```csharp
public string PreferredProtocol { get; set; }
```

- *Type:* string

The preferred protocol that you want to use while streaming your application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#preferred_protocol AppstreamStack#preferred_protocol}

---

### AppstreamStackTags <a name="AppstreamStackTags" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.property.key">Key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#key AppstreamStack#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#value AppstreamStack#value}

---

### AppstreamStackUserSettings <a name="AppstreamStackUserSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackUserSettings {
    string Action = null,
    double MaximumLength = null,
    string Permission = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.action">Action</a></code> | <code>string</code> | The action that is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.maximumLength">MaximumLength</a></code> | <code>double</code> | Specifies the number of characters that can be copied by end users from the local device to the remote session, and to the local device from the remote session. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.permission">Permission</a></code> | <code>string</code> | Indicates whether the action is enabled or disabled. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The action that is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#action AppstreamStack#action}

---

##### `MaximumLength`<sup>Optional</sup> <a name="MaximumLength" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.maximumLength"></a>

```csharp
public double MaximumLength { get; set; }
```

- *Type:* double

Specifies the number of characters that can be copied by end users from the local device to the remote session, and to the local device from the remote session.

This can be specified only for the CLIPBOARD_COPY_FROM_LOCAL_DEVICE and CLIPBOARD_COPY_TO_LOCAL_DEVICE actions. This defaults to 20,971,520 (20 MB) when unspecified and the permission is ENABLED. This can't be specified when the permission is DISABLED. The value can be between 1 and 20,971,520 (20 MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#maximum_length AppstreamStack#maximum_length}

---

##### `Permission`<sup>Optional</sup> <a name="Permission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings.property.permission"></a>

```csharp
public string Permission { get; set; }
```

- *Type:* string

Indicates whether the action is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/appstream_stack#permission AppstreamStack#permission}

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamStackAccessEndpointsList <a name="AppstreamStackAccessEndpointsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackAccessEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.get"></a>

```csharp
private AppstreamStackAccessEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsList.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackAccessEndpoints[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>[]

---


### AppstreamStackAccessEndpointsOutputReference <a name="AppstreamStackAccessEndpointsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackAccessEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetEndpointType">ResetEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetVpceId">ResetVpceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpointType` <a name="ResetEndpointType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetEndpointType"></a>

```csharp
private void ResetEndpointType()
```

##### `ResetVpceId` <a name="ResetVpceId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.resetVpceId"></a>

```csharp
private void ResetVpceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointTypeInput">EndpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceIdInput">VpceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointType">EndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceId">VpceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointTypeInput`<sup>Optional</sup> <a name="EndpointTypeInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointTypeInput"></a>

```csharp
public string EndpointTypeInput { get; }
```

- *Type:* string

---

##### `VpceIdInput`<sup>Optional</sup> <a name="VpceIdInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceIdInput"></a>

```csharp
public string VpceIdInput { get; }
```

- *Type:* string

---

##### `EndpointType`<sup>Required</sup> <a name="EndpointType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.endpointType"></a>

```csharp
public string EndpointType { get; }
```

- *Type:* string

---

##### `VpceId`<sup>Required</sup> <a name="VpceId" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.vpceId"></a>

```csharp
public string VpceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpointsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackAccessEndpoints InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAccessEndpoints">AppstreamStackAccessEndpoints</a>

---


### AppstreamStackAgentAccessConfigOutputReference <a name="AppstreamStackAgentAccessConfigOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackAgentAccessConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetS3BucketArn">ResetS3BucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenImageFormat">ResetScreenImageFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenResolution">ResetScreenResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenshotsUploadEnabled">ResetScreenshotsUploadEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetUserControlMode">ResetUserControlMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.putSettings"></a>

```csharp
private void PutSettings(IResolvable|AppstreamStackAgentAccessConfigSettings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.putSettings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>[]

---

##### `ResetS3BucketArn` <a name="ResetS3BucketArn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetS3BucketArn"></a>

```csharp
private void ResetS3BucketArn()
```

##### `ResetScreenImageFormat` <a name="ResetScreenImageFormat" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenImageFormat"></a>

```csharp
private void ResetScreenImageFormat()
```

##### `ResetScreenResolution` <a name="ResetScreenResolution" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenResolution"></a>

```csharp
private void ResetScreenResolution()
```

##### `ResetScreenshotsUploadEnabled` <a name="ResetScreenshotsUploadEnabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetScreenshotsUploadEnabled"></a>

```csharp
private void ResetScreenshotsUploadEnabled()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetSettings"></a>

```csharp
private void ResetSettings()
```

##### `ResetUserControlMode` <a name="ResetUserControlMode" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.resetUserControlMode"></a>

```csharp
private void ResetUserControlMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList">AppstreamStackAgentAccessConfigSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.s3BucketArnInput">S3BucketArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenImageFormatInput">ScreenImageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenResolutionInput">ScreenResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabledInput">ScreenshotsUploadEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.userControlModeInput">UserControlModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.s3BucketArn">S3BucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenImageFormat">ScreenImageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenResolution">ScreenResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabled">ScreenshotsUploadEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.userControlMode">UserControlMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.settings"></a>

```csharp
public AppstreamStackAgentAccessConfigSettingsList Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList">AppstreamStackAgentAccessConfigSettingsList</a>

---

##### `S3BucketArnInput`<sup>Optional</sup> <a name="S3BucketArnInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.s3BucketArnInput"></a>

```csharp
public string S3BucketArnInput { get; }
```

- *Type:* string

---

##### `ScreenImageFormatInput`<sup>Optional</sup> <a name="ScreenImageFormatInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenImageFormatInput"></a>

```csharp
public string ScreenImageFormatInput { get; }
```

- *Type:* string

---

##### `ScreenResolutionInput`<sup>Optional</sup> <a name="ScreenResolutionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenResolutionInput"></a>

```csharp
public string ScreenResolutionInput { get; }
```

- *Type:* string

---

##### `ScreenshotsUploadEnabledInput`<sup>Optional</sup> <a name="ScreenshotsUploadEnabledInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabledInput"></a>

```csharp
public bool|IResolvable ScreenshotsUploadEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.settingsInput"></a>

```csharp
public IResolvable|AppstreamStackAgentAccessConfigSettings[] SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>[]

---

##### `UserControlModeInput`<sup>Optional</sup> <a name="UserControlModeInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.userControlModeInput"></a>

```csharp
public string UserControlModeInput { get; }
```

- *Type:* string

---

##### `S3BucketArn`<sup>Required</sup> <a name="S3BucketArn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.s3BucketArn"></a>

```csharp
public string S3BucketArn { get; }
```

- *Type:* string

---

##### `ScreenImageFormat`<sup>Required</sup> <a name="ScreenImageFormat" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenImageFormat"></a>

```csharp
public string ScreenImageFormat { get; }
```

- *Type:* string

---

##### `ScreenResolution`<sup>Required</sup> <a name="ScreenResolution" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenResolution"></a>

```csharp
public string ScreenResolution { get; }
```

- *Type:* string

---

##### `ScreenshotsUploadEnabled`<sup>Required</sup> <a name="ScreenshotsUploadEnabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.screenshotsUploadEnabled"></a>

```csharp
public bool|IResolvable ScreenshotsUploadEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `UserControlMode`<sup>Required</sup> <a name="UserControlMode" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.userControlMode"></a>

```csharp
public string UserControlMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackAgentAccessConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfig">AppstreamStackAgentAccessConfig</a>

---


### AppstreamStackAgentAccessConfigSettingsList <a name="AppstreamStackAgentAccessConfigSettingsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackAgentAccessConfigSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.get"></a>

```csharp
private AppstreamStackAgentAccessConfigSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsList.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackAgentAccessConfigSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>[]

---


### AppstreamStackAgentAccessConfigSettingsOutputReference <a name="AppstreamStackAgentAccessConfigSettingsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackAgentAccessConfigSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resetAgentAction">ResetAgentAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAgentAction` <a name="ResetAgentAction" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resetAgentAction"></a>

```csharp
private void ResetAgentAction()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.agentActionInput">AgentActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.agentAction">AgentAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AgentActionInput`<sup>Optional</sup> <a name="AgentActionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.agentActionInput"></a>

```csharp
public string AgentActionInput { get; }
```

- *Type:* string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `AgentAction`<sup>Required</sup> <a name="AgentAction" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.agentAction"></a>

```csharp
public string AgentAction { get; }
```

- *Type:* string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackAgentAccessConfigSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackAgentAccessConfigSettings">AppstreamStackAgentAccessConfigSettings</a>

---


### AppstreamStackApplicationSettingsOutputReference <a name="AppstreamStackApplicationSettingsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackApplicationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetSettingsGroup">ResetSettingsGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetSettingsGroup` <a name="ResetSettingsGroup" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.resetSettingsGroup"></a>

```csharp
private void ResetSettingsGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroupInput">SettingsGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroup">SettingsGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SettingsGroupInput`<sup>Optional</sup> <a name="SettingsGroupInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroupInput"></a>

```csharp
public string SettingsGroupInput { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SettingsGroup`<sup>Required</sup> <a name="SettingsGroup" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.settingsGroup"></a>

```csharp
public string SettingsGroup { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackApplicationSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackApplicationSettings">AppstreamStackApplicationSettings</a>

---


### AppstreamStackContentRedirectionHostToClientOutputReference <a name="AppstreamStackContentRedirectionHostToClientOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackContentRedirectionHostToClientOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetAllowedUrls">ResetAllowedUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetDeniedUrls">ResetDeniedUrls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedUrls` <a name="ResetAllowedUrls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetAllowedUrls"></a>

```csharp
private void ResetAllowedUrls()
```

##### `ResetDeniedUrls` <a name="ResetDeniedUrls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetDeniedUrls"></a>

```csharp
private void ResetDeniedUrls()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrlsInput">AllowedUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrlsInput">DeniedUrlsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrls">AllowedUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrls">DeniedUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedUrlsInput`<sup>Optional</sup> <a name="AllowedUrlsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrlsInput"></a>

```csharp
public string[] AllowedUrlsInput { get; }
```

- *Type:* string[]

---

##### `DeniedUrlsInput`<sup>Optional</sup> <a name="DeniedUrlsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrlsInput"></a>

```csharp
public string[] DeniedUrlsInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllowedUrls`<sup>Required</sup> <a name="AllowedUrls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.allowedUrls"></a>

```csharp
public string[] AllowedUrls { get; }
```

- *Type:* string[]

---

##### `DeniedUrls`<sup>Required</sup> <a name="DeniedUrls" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.deniedUrls"></a>

```csharp
public string[] DeniedUrls { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackContentRedirectionHostToClient InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a>

---


### AppstreamStackContentRedirectionOutputReference <a name="AppstreamStackContentRedirectionOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackContentRedirectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.putHostToClient">PutHostToClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resetHostToClient">ResetHostToClient</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHostToClient` <a name="PutHostToClient" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.putHostToClient"></a>

```csharp
private void PutHostToClient(AppstreamStackContentRedirectionHostToClient Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.putHostToClient.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a>

---

##### `ResetHostToClient` <a name="ResetHostToClient" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.resetHostToClient"></a>

```csharp
private void ResetHostToClient()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.hostToClient">HostToClient</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference">AppstreamStackContentRedirectionHostToClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.hostToClientInput">HostToClientInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HostToClient`<sup>Required</sup> <a name="HostToClient" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.hostToClient"></a>

```csharp
public AppstreamStackContentRedirectionHostToClientOutputReference HostToClient { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClientOutputReference">AppstreamStackContentRedirectionHostToClientOutputReference</a>

---

##### `HostToClientInput`<sup>Optional</sup> <a name="HostToClientInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.hostToClientInput"></a>

```csharp
public IResolvable|AppstreamStackContentRedirectionHostToClient HostToClientInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionHostToClient">AppstreamStackContentRedirectionHostToClient</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackContentRedirection InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackContentRedirection">AppstreamStackContentRedirection</a>

---


### AppstreamStackStorageConnectorsList <a name="AppstreamStackStorageConnectorsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackStorageConnectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.get"></a>

```csharp
private AppstreamStackStorageConnectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsList.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackStorageConnectors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>[]

---


### AppstreamStackStorageConnectorsOutputReference <a name="AppstreamStackStorageConnectorsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackStorageConnectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetConnectorType">ResetConnectorType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetDomains">ResetDomains</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetResourceIdentifier">ResetResourceIdentifier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectorType` <a name="ResetConnectorType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetConnectorType"></a>

```csharp
private void ResetConnectorType()
```

##### `ResetDomains` <a name="ResetDomains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetDomains"></a>

```csharp
private void ResetDomains()
```

##### `ResetResourceIdentifier` <a name="ResetResourceIdentifier" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.resetResourceIdentifier"></a>

```csharp
private void ResetResourceIdentifier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorTypeInput">ConnectorTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domainsInput">DomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifierInput">ResourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorType">ConnectorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domains">Domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifier">ResourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorTypeInput`<sup>Optional</sup> <a name="ConnectorTypeInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorTypeInput"></a>

```csharp
public string ConnectorTypeInput { get; }
```

- *Type:* string

---

##### `DomainsInput`<sup>Optional</sup> <a name="DomainsInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domainsInput"></a>

```csharp
public string[] DomainsInput { get; }
```

- *Type:* string[]

---

##### `ResourceIdentifierInput`<sup>Optional</sup> <a name="ResourceIdentifierInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifierInput"></a>

```csharp
public string ResourceIdentifierInput { get; }
```

- *Type:* string

---

##### `ConnectorType`<sup>Required</sup> <a name="ConnectorType" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.connectorType"></a>

```csharp
public string ConnectorType { get; }
```

- *Type:* string

---

##### `Domains`<sup>Required</sup> <a name="Domains" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.domains"></a>

```csharp
public string[] Domains { get; }
```

- *Type:* string[]

---

##### `ResourceIdentifier`<sup>Required</sup> <a name="ResourceIdentifier" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.resourceIdentifier"></a>

```csharp
public string ResourceIdentifier { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackStorageConnectors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStorageConnectors">AppstreamStackStorageConnectors</a>

---


### AppstreamStackStreamingExperienceSettingsOutputReference <a name="AppstreamStackStreamingExperienceSettingsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackStreamingExperienceSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resetPreferredProtocol">ResetPreferredProtocol</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreferredProtocol` <a name="ResetPreferredProtocol" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.resetPreferredProtocol"></a>

```csharp
private void ResetPreferredProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocolInput">PreferredProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocol">PreferredProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PreferredProtocolInput`<sup>Optional</sup> <a name="PreferredProtocolInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocolInput"></a>

```csharp
public string PreferredProtocolInput { get; }
```

- *Type:* string

---

##### `PreferredProtocol`<sup>Required</sup> <a name="PreferredProtocol" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.preferredProtocol"></a>

```csharp
public string PreferredProtocol { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackStreamingExperienceSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackStreamingExperienceSettings">AppstreamStackStreamingExperienceSettings</a>

---


### AppstreamStackTagsList <a name="AppstreamStackTagsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.get"></a>

```csharp
private AppstreamStackTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsList.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>[]

---


### AppstreamStackTagsOutputReference <a name="AppstreamStackTagsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackTags">AppstreamStackTags</a>

---


### AppstreamStackUserSettingsList <a name="AppstreamStackUserSettingsList" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackUserSettingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.get"></a>

```csharp
private AppstreamStackUserSettingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsList.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackUserSettings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>[]

---


### AppstreamStackUserSettingsOutputReference <a name="AppstreamStackUserSettingsOutputReference" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppstreamStackUserSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetMaximumLength">ResetMaximumLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetPermission">ResetPermission</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetMaximumLength` <a name="ResetMaximumLength" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetMaximumLength"></a>

```csharp
private void ResetMaximumLength()
```

##### `ResetPermission` <a name="ResetPermission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.resetPermission"></a>

```csharp
private void ResetPermission()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.maximumLengthInput">MaximumLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permissionInput">PermissionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.maximumLength">MaximumLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permission">Permission</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `MaximumLengthInput`<sup>Optional</sup> <a name="MaximumLengthInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.maximumLengthInput"></a>

```csharp
public double MaximumLengthInput { get; }
```

- *Type:* double

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permissionInput"></a>

```csharp
public string PermissionInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `MaximumLength`<sup>Required</sup> <a name="MaximumLength" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.maximumLength"></a>

```csharp
public double MaximumLength { get; }
```

- *Type:* double

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.permission"></a>

```csharp
public string Permission { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppstreamStackUserSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamStack.AppstreamStackUserSettings">AppstreamStackUserSettings</a>

---



