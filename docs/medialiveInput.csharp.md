# `medialiveInput` Submodule <a name="`medialiveInput` Submodule" id="@cdktn/provider-awscc.medialiveInput"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveInput <a name="MedialiveInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input awscc_medialive_input}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInput(Construct Scope, string Id, MedialiveInputConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig">MedialiveInputConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig">MedialiveInputConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putInputDevices">PutInputDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putMediaConnectFlows">PutMediaConnectFlows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putMulticastSettings">PutMulticastSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putRouterSettings">PutRouterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSmpte2110ReceiverGroupSettings">PutSmpte2110ReceiverGroupSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSrtSettings">PutSrtSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.putVpc">PutVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetInputDevices">ResetInputDevices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetInputNetworkLocation">ResetInputNetworkLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetInputSecurityGroups">ResetInputSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetMediaConnectFlows">ResetMediaConnectFlows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetMulticastSettings">ResetMulticastSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetRouterSettings">ResetRouterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSdiSources">ResetSdiSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSmpte2110ReceiverGroupSettings">ResetSmpte2110ReceiverGroupSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSources">ResetSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSrtSettings">ResetSrtSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetVpc">ResetVpc</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putDestinations"></a>

```csharp
private void PutDestinations(IResolvable|MedialiveInputDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putDestinations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>[]

---

##### `PutInputDevices` <a name="PutInputDevices" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putInputDevices"></a>

```csharp
private void PutInputDevices(IResolvable|MedialiveInputInputDevices[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putInputDevices.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>[]

---

##### `PutMediaConnectFlows` <a name="PutMediaConnectFlows" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putMediaConnectFlows"></a>

```csharp
private void PutMediaConnectFlows(IResolvable|MedialiveInputMediaConnectFlows[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putMediaConnectFlows.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>[]

---

##### `PutMulticastSettings` <a name="PutMulticastSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putMulticastSettings"></a>

```csharp
private void PutMulticastSettings(MedialiveInputMulticastSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putMulticastSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a>

---

##### `PutRouterSettings` <a name="PutRouterSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putRouterSettings"></a>

```csharp
private void PutRouterSettings(MedialiveInputRouterSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putRouterSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a>

---

##### `PutSmpte2110ReceiverGroupSettings` <a name="PutSmpte2110ReceiverGroupSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSmpte2110ReceiverGroupSettings"></a>

```csharp
private void PutSmpte2110ReceiverGroupSettings(MedialiveInputSmpte2110ReceiverGroupSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSmpte2110ReceiverGroupSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a>

---

##### `PutSources` <a name="PutSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSources"></a>

```csharp
private void PutSources(IResolvable|MedialiveInputSources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>[]

---

##### `PutSrtSettings` <a name="PutSrtSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSrtSettings"></a>

```csharp
private void PutSrtSettings(MedialiveInputSrtSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putSrtSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a>

---

##### `PutVpc` <a name="PutVpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putVpc"></a>

```csharp
private void PutVpc(MedialiveInputVpc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a>

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetDestinations"></a>

```csharp
private void ResetDestinations()
```

##### `ResetInputDevices` <a name="ResetInputDevices" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetInputDevices"></a>

```csharp
private void ResetInputDevices()
```

##### `ResetInputNetworkLocation` <a name="ResetInputNetworkLocation" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetInputNetworkLocation"></a>

```csharp
private void ResetInputNetworkLocation()
```

##### `ResetInputSecurityGroups` <a name="ResetInputSecurityGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetInputSecurityGroups"></a>

```csharp
private void ResetInputSecurityGroups()
```

##### `ResetMediaConnectFlows` <a name="ResetMediaConnectFlows" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetMediaConnectFlows"></a>

```csharp
private void ResetMediaConnectFlows()
```

##### `ResetMulticastSettings` <a name="ResetMulticastSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetMulticastSettings"></a>

```csharp
private void ResetMulticastSettings()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetRouterSettings` <a name="ResetRouterSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetRouterSettings"></a>

```csharp
private void ResetRouterSettings()
```

##### `ResetSdiSources` <a name="ResetSdiSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSdiSources"></a>

```csharp
private void ResetSdiSources()
```

##### `ResetSmpte2110ReceiverGroupSettings` <a name="ResetSmpte2110ReceiverGroupSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSmpte2110ReceiverGroupSettings"></a>

```csharp
private void ResetSmpte2110ReceiverGroupSettings()
```

##### `ResetSources` <a name="ResetSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSources"></a>

```csharp
private void ResetSources()
```

##### `ResetSrtSettings` <a name="ResetSrtSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetSrtSettings"></a>

```csharp
private void ResetSrtSettings()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.resetVpc"></a>

```csharp
private void ResetVpc()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MedialiveInput resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveInput.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveInput.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveInput.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MedialiveInput.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MedialiveInput resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MedialiveInput to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MedialiveInput that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveInput to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.attachedChannels">AttachedChannels</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList">MedialiveInputDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.destinationUrls">DestinationUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputClass">InputClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputDevices">InputDevices</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList">MedialiveInputInputDevicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputId">InputId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputPartnerIds">InputPartnerIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputSourceType">InputSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.mediaConnectFlows">MediaConnectFlows</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList">MedialiveInputMediaConnectFlowsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.multicastSettings">MulticastSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference">MedialiveInputMulticastSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.routerSettings">RouterSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference">MedialiveInputRouterSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.securityGroups">SecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.smpte2110ReceiverGroupSettings">Smpte2110ReceiverGroupSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference">MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList">MedialiveInputSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sourceUrls">SourceUrls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.srtSettings">SrtSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference">MedialiveInputSrtSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference">MedialiveInputVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.destinationsInput">DestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputDevicesInput">InputDevicesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputNetworkLocationInput">InputNetworkLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputSecurityGroupsInput">InputSecurityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.mediaConnectFlowsInput">MediaConnectFlowsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.multicastSettingsInput">MulticastSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.routerSettingsInput">RouterSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sdiSourcesInput">SdiSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.smpte2110ReceiverGroupSettingsInput">Smpte2110ReceiverGroupSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sourcesInput">SourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.srtSettingsInput">SrtSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.vpcInput">VpcInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputNetworkLocation">InputNetworkLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputSecurityGroups">InputSecurityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sdiSources">SdiSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AttachedChannels`<sup>Required</sup> <a name="AttachedChannels" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.attachedChannels"></a>

```csharp
public string[] AttachedChannels { get; }
```

- *Type:* string[]

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.destinations"></a>

```csharp
public MedialiveInputDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList">MedialiveInputDestinationsList</a>

---

##### `DestinationUrls`<sup>Required</sup> <a name="DestinationUrls" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.destinationUrls"></a>

```csharp
public string[] DestinationUrls { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputClass`<sup>Required</sup> <a name="InputClass" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputClass"></a>

```csharp
public string InputClass { get; }
```

- *Type:* string

---

##### `InputDevices`<sup>Required</sup> <a name="InputDevices" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputDevices"></a>

```csharp
public MedialiveInputInputDevicesList InputDevices { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList">MedialiveInputInputDevicesList</a>

---

##### `InputId`<sup>Required</sup> <a name="InputId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputId"></a>

```csharp
public string InputId { get; }
```

- *Type:* string

---

##### `InputPartnerIds`<sup>Required</sup> <a name="InputPartnerIds" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputPartnerIds"></a>

```csharp
public string[] InputPartnerIds { get; }
```

- *Type:* string[]

---

##### `InputSourceType`<sup>Required</sup> <a name="InputSourceType" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputSourceType"></a>

```csharp
public string InputSourceType { get; }
```

- *Type:* string

---

##### `MediaConnectFlows`<sup>Required</sup> <a name="MediaConnectFlows" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.mediaConnectFlows"></a>

```csharp
public MedialiveInputMediaConnectFlowsList MediaConnectFlows { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList">MedialiveInputMediaConnectFlowsList</a>

---

##### `MulticastSettings`<sup>Required</sup> <a name="MulticastSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.multicastSettings"></a>

```csharp
public MedialiveInputMulticastSettingsOutputReference MulticastSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference">MedialiveInputMulticastSettingsOutputReference</a>

---

##### `RouterSettings`<sup>Required</sup> <a name="RouterSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.routerSettings"></a>

```csharp
public MedialiveInputRouterSettingsOutputReference RouterSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference">MedialiveInputRouterSettingsOutputReference</a>

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.securityGroups"></a>

```csharp
public string[] SecurityGroups { get; }
```

- *Type:* string[]

---

##### `Smpte2110ReceiverGroupSettings`<sup>Required</sup> <a name="Smpte2110ReceiverGroupSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.smpte2110ReceiverGroupSettings"></a>

```csharp
public MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference Smpte2110ReceiverGroupSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference">MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference</a>

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sources"></a>

```csharp
public MedialiveInputSourcesList Sources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList">MedialiveInputSourcesList</a>

---

##### `SourceUrls`<sup>Required</sup> <a name="SourceUrls" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sourceUrls"></a>

```csharp
public string[] SourceUrls { get; }
```

- *Type:* string[]

---

##### `SrtSettings`<sup>Required</sup> <a name="SrtSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.srtSettings"></a>

```csharp
public MedialiveInputSrtSettingsOutputReference SrtSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference">MedialiveInputSrtSettingsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.vpc"></a>

```csharp
public MedialiveInputVpcOutputReference Vpc { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference">MedialiveInputVpcOutputReference</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.destinationsInput"></a>

```csharp
public IResolvable|MedialiveInputDestinations[] DestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>[]

---

##### `InputDevicesInput`<sup>Optional</sup> <a name="InputDevicesInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputDevicesInput"></a>

```csharp
public IResolvable|MedialiveInputInputDevices[] InputDevicesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>[]

---

##### `InputNetworkLocationInput`<sup>Optional</sup> <a name="InputNetworkLocationInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputNetworkLocationInput"></a>

```csharp
public string InputNetworkLocationInput { get; }
```

- *Type:* string

---

##### `InputSecurityGroupsInput`<sup>Optional</sup> <a name="InputSecurityGroupsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputSecurityGroupsInput"></a>

```csharp
public string[] InputSecurityGroupsInput { get; }
```

- *Type:* string[]

---

##### `MediaConnectFlowsInput`<sup>Optional</sup> <a name="MediaConnectFlowsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.mediaConnectFlowsInput"></a>

```csharp
public IResolvable|MedialiveInputMediaConnectFlows[] MediaConnectFlowsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>[]

---

##### `MulticastSettingsInput`<sup>Optional</sup> <a name="MulticastSettingsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.multicastSettingsInput"></a>

```csharp
public IResolvable|MedialiveInputMulticastSettings MulticastSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RouterSettingsInput`<sup>Optional</sup> <a name="RouterSettingsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.routerSettingsInput"></a>

```csharp
public IResolvable|MedialiveInputRouterSettings RouterSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a>

---

##### `SdiSourcesInput`<sup>Optional</sup> <a name="SdiSourcesInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sdiSourcesInput"></a>

```csharp
public string[] SdiSourcesInput { get; }
```

- *Type:* string[]

---

##### `Smpte2110ReceiverGroupSettingsInput`<sup>Optional</sup> <a name="Smpte2110ReceiverGroupSettingsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.smpte2110ReceiverGroupSettingsInput"></a>

```csharp
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettings Smpte2110ReceiverGroupSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a>

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sourcesInput"></a>

```csharp
public IResolvable|MedialiveInputSources[] SourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>[]

---

##### `SrtSettingsInput`<sup>Optional</sup> <a name="SrtSettingsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.srtSettingsInput"></a>

```csharp
public IResolvable|MedialiveInputSrtSettings SrtSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.vpcInput"></a>

```csharp
public IResolvable|MedialiveInputVpc VpcInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a>

---

##### `InputNetworkLocation`<sup>Required</sup> <a name="InputNetworkLocation" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputNetworkLocation"></a>

```csharp
public string InputNetworkLocation { get; }
```

- *Type:* string

---

##### `InputSecurityGroups`<sup>Required</sup> <a name="InputSecurityGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.inputSecurityGroups"></a>

```csharp
public string[] InputSecurityGroups { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `SdiSources`<sup>Required</sup> <a name="SdiSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.sdiSources"></a>

```csharp
public string[] SdiSources { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.medialiveInput.MedialiveInput.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveInputConfig <a name="MedialiveInputConfig" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|MedialiveInputDestinations[] Destinations = null,
    IResolvable|MedialiveInputInputDevices[] InputDevices = null,
    string InputNetworkLocation = null,
    string[] InputSecurityGroups = null,
    IResolvable|MedialiveInputMediaConnectFlows[] MediaConnectFlows = null,
    MedialiveInputMulticastSettings MulticastSettings = null,
    string Name = null,
    string RoleArn = null,
    MedialiveInputRouterSettings RouterSettings = null,
    string[] SdiSources = null,
    MedialiveInputSmpte2110ReceiverGroupSettings Smpte2110ReceiverGroupSettings = null,
    IResolvable|MedialiveInputSources[] Sources = null,
    MedialiveInputSrtSettings SrtSettings = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string Type = null,
    MedialiveInputVpc Vpc = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.destinations">Destinations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>[]</code> | A list of the destinations of the input (PUSH-type). |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.inputDevices">InputDevices</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>[]</code> | Settings for the input devices. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.inputNetworkLocation">InputNetworkLocation</a></code> | <code>string</code> | The location of this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.inputSecurityGroups">InputSecurityGroups</a></code> | <code>string[]</code> | A list of security groups referenced by IDs to attach to the input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.mediaConnectFlows">MediaConnectFlows</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>[]</code> | A list of MediaConnect Flows for this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.multicastSettings">MulticastSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a></code> | Multicast Input settings. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.name">Name</a></code> | <code>string</code> | The user-assigned name (This is a mutable value). |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the role this input assumes during and after creation. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.routerSettings">RouterSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a></code> | Information about the MediaConnect Router association for this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.sdiSources">SdiSources</a></code> | <code>string[]</code> | SDI Sources for this Input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.smpte2110ReceiverGroupSettings">Smpte2110ReceiverGroupSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a></code> | Include this parameter if the input is a SMPTE 2110 input, to identify the stream sources for this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.sources">Sources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>[]</code> | A list of the sources of the input (PULL-type). |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.srtSettings">SrtSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a></code> | The settings associated with an SRT input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A collection of key-value pairs. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.type">Type</a></code> | <code>string</code> | The different types of inputs that AWS Elemental MediaLive supports. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a></code> | Settings for a private VPC Input. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.destinations"></a>

```csharp
public IResolvable|MedialiveInputDestinations[] Destinations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>[]

A list of the destinations of the input (PUSH-type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#destinations MedialiveInput#destinations}

---

##### `InputDevices`<sup>Optional</sup> <a name="InputDevices" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.inputDevices"></a>

```csharp
public IResolvable|MedialiveInputInputDevices[] InputDevices { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>[]

Settings for the input devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#input_devices MedialiveInput#input_devices}

---

##### `InputNetworkLocation`<sup>Optional</sup> <a name="InputNetworkLocation" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.inputNetworkLocation"></a>

```csharp
public string InputNetworkLocation { get; set; }
```

- *Type:* string

The location of this input.

AWS, for an input existing in the AWS Cloud, On-Prem for
an input in a customer network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#input_network_location MedialiveInput#input_network_location}

---

##### `InputSecurityGroups`<sup>Optional</sup> <a name="InputSecurityGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.inputSecurityGroups"></a>

```csharp
public string[] InputSecurityGroups { get; set; }
```

- *Type:* string[]

A list of security groups referenced by IDs to attach to the input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#input_security_groups MedialiveInput#input_security_groups}

---

##### `MediaConnectFlows`<sup>Optional</sup> <a name="MediaConnectFlows" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.mediaConnectFlows"></a>

```csharp
public IResolvable|MedialiveInputMediaConnectFlows[] MediaConnectFlows { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>[]

A list of MediaConnect Flows for this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_connect_flows MedialiveInput#media_connect_flows}

---

##### `MulticastSettings`<sup>Optional</sup> <a name="MulticastSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.multicastSettings"></a>

```csharp
public MedialiveInputMulticastSettings MulticastSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a>

Multicast Input settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#multicast_settings MedialiveInput#multicast_settings}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The user-assigned name (This is a mutable value).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#name MedialiveInput#name}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the role this input assumes during and after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#role_arn MedialiveInput#role_arn}

---

##### `RouterSettings`<sup>Optional</sup> <a name="RouterSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.routerSettings"></a>

```csharp
public MedialiveInputRouterSettings RouterSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a>

Information about the MediaConnect Router association for this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#router_settings MedialiveInput#router_settings}

---

##### `SdiSources`<sup>Optional</sup> <a name="SdiSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.sdiSources"></a>

```csharp
public string[] SdiSources { get; set; }
```

- *Type:* string[]

SDI Sources for this Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdi_sources MedialiveInput#sdi_sources}

---

##### `Smpte2110ReceiverGroupSettings`<sup>Optional</sup> <a name="Smpte2110ReceiverGroupSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.smpte2110ReceiverGroupSettings"></a>

```csharp
public MedialiveInputSmpte2110ReceiverGroupSettings Smpte2110ReceiverGroupSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a>

Include this parameter if the input is a SMPTE 2110 input, to identify the stream sources for this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#smpte_2110_receiver_group_settings MedialiveInput#smpte_2110_receiver_group_settings}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.sources"></a>

```csharp
public IResolvable|MedialiveInputSources[] Sources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>[]

A list of the sources of the input (PULL-type).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sources MedialiveInput#sources}

---

##### `SrtSettings`<sup>Optional</sup> <a name="SrtSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.srtSettings"></a>

```csharp
public MedialiveInputSrtSettings SrtSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a>

The settings associated with an SRT input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_settings MedialiveInput#srt_settings}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A collection of key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#tags MedialiveInput#tags}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The different types of inputs that AWS Elemental MediaLive supports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#type MedialiveInput#type}

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputConfig.property.vpc"></a>

```csharp
public MedialiveInputVpc Vpc { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a>

Settings for a private VPC Input.

When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
This property requires setting the roleArn property on Input creation.
Not compatible with the inputSecurityGroups property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#vpc MedialiveInput#vpc}

---

### MedialiveInputDestinations <a name="MedialiveInputDestinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputDestinations {
    string Ip = null,
    string Network = null,
    IResolvable|MedialiveInputDestinationsNetworkRoutes[] NetworkRoutes = null,
    string Port = null,
    string StaticIpAddress = null,
    string StreamName = null,
    string Url = null,
    MedialiveInputDestinationsVpc Vpc = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.ip">Ip</a></code> | <code>string</code> | The system-generated static IP address of endpoint. It remains fixed for the lifetime of the input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.network">Network</a></code> | <code>string</code> | The ID of the attached network. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.networkRoutes">NetworkRoutes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>[]</code> | If the push input has an input location of ON-PREM it's a requirement to specify what the route of the input is going to be on the customer local network. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.port">Port</a></code> | <code>string</code> | The port number for the input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.staticIpAddress">StaticIpAddress</a></code> | <code>string</code> | The static IP address for the input destination. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.streamName">StreamName</a></code> | <code>string</code> | The stream name for the input destination. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.url">Url</a></code> | <code>string</code> | This represents the endpoint that the customer stream will be pushed to. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a></code> | The properties for a VPC type input destination. |

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.ip"></a>

```csharp
public string Ip { get; set; }
```

- *Type:* string

The system-generated static IP address of endpoint. It remains fixed for the lifetime of the input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#ip MedialiveInput#ip}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.network"></a>

```csharp
public string Network { get; set; }
```

- *Type:* string

The ID of the attached network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#network MedialiveInput#network}

---

##### `NetworkRoutes`<sup>Optional</sup> <a name="NetworkRoutes" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.networkRoutes"></a>

```csharp
public IResolvable|MedialiveInputDestinationsNetworkRoutes[] NetworkRoutes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>[]

If the push input has an input location of ON-PREM it's a requirement to specify what the route of the input is going to be on the customer local network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#network_routes MedialiveInput#network_routes}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.port"></a>

```csharp
public string Port { get; set; }
```

- *Type:* string

The port number for the input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#port MedialiveInput#port}

---

##### `StaticIpAddress`<sup>Optional</sup> <a name="StaticIpAddress" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.staticIpAddress"></a>

```csharp
public string StaticIpAddress { get; set; }
```

- *Type:* string

The static IP address for the input destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#static_ip_address MedialiveInput#static_ip_address}

---

##### `StreamName`<sup>Optional</sup> <a name="StreamName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.streamName"></a>

```csharp
public string StreamName { get; set; }
```

- *Type:* string

The stream name for the input destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#stream_name MedialiveInput#stream_name}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

This represents the endpoint that the customer stream will be pushed to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#url MedialiveInput#url}

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations.property.vpc"></a>

```csharp
public MedialiveInputDestinationsVpc Vpc { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a>

The properties for a VPC type input destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#vpc MedialiveInput#vpc}

---

### MedialiveInputDestinationsNetworkRoutes <a name="MedialiveInputDestinationsNetworkRoutes" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputDestinationsNetworkRoutes {
    string Cidr = null,
    string Gateway = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes.property.cidr">Cidr</a></code> | <code>string</code> | The CIDR of the route. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes.property.gateway">Gateway</a></code> | <code>string</code> | An optional gateway for the route. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

The CIDR of the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#cidr MedialiveInput#cidr}

---

##### `Gateway`<sup>Optional</sup> <a name="Gateway" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes.property.gateway"></a>

```csharp
public string Gateway { get; set; }
```

- *Type:* string

An optional gateway for the route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#gateway MedialiveInput#gateway}

---

### MedialiveInputDestinationsVpc <a name="MedialiveInputDestinationsVpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputDestinationsVpc {
    string AvailabilityZone = null,
    string NetworkInterfaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | The availability zone of the Input destination. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | The network interface ID of the Input destination in the VPC. |

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

The availability zone of the Input destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#availability_zone MedialiveInput#availability_zone}

---

##### `NetworkInterfaceId`<sup>Optional</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; set; }
```

- *Type:* string

The network interface ID of the Input destination in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#network_interface_id MedialiveInput#network_interface_id}

---

### MedialiveInputInputDevices <a name="MedialiveInputInputDevices" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputInputDevices {
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices.property.id">Id</a></code> | <code>string</code> | The unique ID for the device. |

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique ID for the device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#id MedialiveInput#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### MedialiveInputMediaConnectFlows <a name="MedialiveInputMediaConnectFlows" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputMediaConnectFlows {
    string FlowArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows.property.flowArn">FlowArn</a></code> | <code>string</code> | The unique ARN of the MediaConnect Flow being used as a source. |

---

##### `FlowArn`<sup>Optional</sup> <a name="FlowArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows.property.flowArn"></a>

```csharp
public string FlowArn { get; set; }
```

- *Type:* string

The unique ARN of the MediaConnect Flow being used as a source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#flow_arn MedialiveInput#flow_arn}

---

### MedialiveInputMulticastSettings <a name="MedialiveInputMulticastSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputMulticastSettings {
    IResolvable|MedialiveInputMulticastSettingsSources[] Sources = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings.property.sources">Sources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>[]</code> | Placeholder documentation for __listOfMulticastSource. |

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings.property.sources"></a>

```csharp
public IResolvable|MedialiveInputMulticastSettingsSources[] Sources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>[]

Placeholder documentation for __listOfMulticastSource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sources MedialiveInput#sources}

---

### MedialiveInputMulticastSettingsSources <a name="MedialiveInputMulticastSettingsSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputMulticastSettingsSources {
    string SourceIp = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources.property.sourceIp">SourceIp</a></code> | <code>string</code> | This represents the ip address of the device sending the multicast stream. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources.property.url">Url</a></code> | <code>string</code> | This represents the customer's source URL where multicast stream is pulled from. |

---

##### `SourceIp`<sup>Optional</sup> <a name="SourceIp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources.property.sourceIp"></a>

```csharp
public string SourceIp { get; set; }
```

- *Type:* string

This represents the ip address of the device sending the multicast stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#source_ip MedialiveInput#source_ip}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

This represents the customer's source URL where multicast stream is pulled from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#url MedialiveInput#url}

---

### MedialiveInputRouterSettings <a name="MedialiveInputRouterSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputRouterSettings {
    IResolvable|MedialiveInputRouterSettingsDestinations[] Destinations = null,
    string EncryptionType = null,
    string SecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.property.destinations">Destinations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>[]</code> | MediaConnect Router destinations associated with this input. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.property.encryptionType">EncryptionType</a></code> | <code>string</code> | Encryption configuration for the MediaConnect Router association. AUTOMATIC uses a service-managed secret; SECRETS_MANAGER requires SecretArn. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.property.secretArn">SecretArn</a></code> | <code>string</code> | The ARN of the Secrets Manager secret used to encrypt this input. Required when EncryptionType is SECRETS_MANAGER. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.property.destinations"></a>

```csharp
public IResolvable|MedialiveInputRouterSettingsDestinations[] Destinations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>[]

MediaConnect Router destinations associated with this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#destinations MedialiveInput#destinations}

---

##### `EncryptionType`<sup>Optional</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.property.encryptionType"></a>

```csharp
public string EncryptionType { get; set; }
```

- *Type:* string

Encryption configuration for the MediaConnect Router association. AUTOMATIC uses a service-managed secret; SECRETS_MANAGER requires SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#encryption_type MedialiveInput#encryption_type}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

The ARN of the Secrets Manager secret used to encrypt this input. Required when EncryptionType is SECRETS_MANAGER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#secret_arn MedialiveInput#secret_arn}

---

### MedialiveInputRouterSettingsDestinations <a name="MedialiveInputRouterSettingsDestinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputRouterSettingsDestinations {
    string AvailabilityZoneName = null,
    string RouterOutputArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>string</code> | The Availability Zone (AZ) name this destination is created in. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations.property.routerOutputArn">RouterOutputArn</a></code> | <code>string</code> | The ARN of the MediaConnect Router output currently connected to this input. |

---

##### `AvailabilityZoneName`<sup>Optional</sup> <a name="AvailabilityZoneName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations.property.availabilityZoneName"></a>

```csharp
public string AvailabilityZoneName { get; set; }
```

- *Type:* string

The Availability Zone (AZ) name this destination is created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#availability_zone_name MedialiveInput#availability_zone_name}

---

##### `RouterOutputArn`<sup>Optional</sup> <a name="RouterOutputArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations.property.routerOutputArn"></a>

```csharp
public string RouterOutputArn { get; set; }
```

- *Type:* string

The ARN of the MediaConnect Router output currently connected to this input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#router_output_arn MedialiveInput#router_output_arn}

---

### MedialiveInputSmpte2110ReceiverGroupSettings <a name="MedialiveInputSmpte2110ReceiverGroupSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSmpte2110ReceiverGroupSettings {
    IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups[] Smpte2110ReceiverGroups = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings.property.smpte2110ReceiverGroups">Smpte2110ReceiverGroups</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>[]</code> | Placeholder documentation for __listOfSmpte2110ReceiverGroup. |

---

##### `Smpte2110ReceiverGroups`<sup>Optional</sup> <a name="Smpte2110ReceiverGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings.property.smpte2110ReceiverGroups"></a>

```csharp
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups[] Smpte2110ReceiverGroups { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>[]

Placeholder documentation for __listOfSmpte2110ReceiverGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#smpte_2110_receiver_groups MedialiveInput#smpte_2110_receiver_groups}

---

### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups {
    MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings SdpSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups.property.sdpSettings">SdpSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a></code> | The single Smpte2110ReceiverGroupSdpSettings that identify the video, audio, and ancillary streams for this receiver group. |

---

##### `SdpSettings`<sup>Optional</sup> <a name="SdpSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups.property.sdpSettings"></a>

```csharp
public MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings SdpSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a>

The single Smpte2110ReceiverGroupSdpSettings that identify the video, audio, and ancillary streams for this receiver group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdp_settings MedialiveInput#sdp_settings}

---

### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings {
    IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps[] AncillarySdps = null,
    IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps[] AudioSdps = null,
    MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp VideoSdp = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.property.ancillarySdps">AncillarySdps</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>[]</code> | A list of InputSdpLocations. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.property.audioSdps">AudioSdps</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>[]</code> | A list of InputSdpLocations. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.property.videoSdp">VideoSdp</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a></code> | The InputSdpLocation that specifies the SDP file and index for the single video SMPTE 2110 stream for this 2110 input. |

---

##### `AncillarySdps`<sup>Optional</sup> <a name="AncillarySdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.property.ancillarySdps"></a>

```csharp
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps[] AncillarySdps { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>[]

A list of InputSdpLocations.

Each item in the list specifies the SDP file and index for one ancillary SMPTE 2110 stream.
Each stream encapsulates one captions stream (out of any number you can include) or the single SCTE 35 stream that you can include.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#ancillary_sdps MedialiveInput#ancillary_sdps}

---

##### `AudioSdps`<sup>Optional</sup> <a name="AudioSdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.property.audioSdps"></a>

```csharp
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps[] AudioSdps { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>[]

A list of InputSdpLocations.

Each item in the list specifies the SDP file and index for one audio SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#audio_sdps MedialiveInput#audio_sdps}

---

##### `VideoSdp`<sup>Optional</sup> <a name="VideoSdp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings.property.videoSdp"></a>

```csharp
public MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp VideoSdp { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a>

The InputSdpLocation that specifies the SDP file and index for the single video SMPTE 2110 stream for this 2110 input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#video_sdp MedialiveInput#video_sdp}

---

### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps {
    double MediaIndex = null,
    string SdpUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps.property.mediaIndex">MediaIndex</a></code> | <code>double</code> | The index of the media stream in the SDP file for one SMPTE 2110 stream. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps.property.sdpUrl">SdpUrl</a></code> | <code>string</code> | The URL of the SDP file for one SMPTE 2110 stream. |

---

##### `MediaIndex`<sup>Optional</sup> <a name="MediaIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps.property.mediaIndex"></a>

```csharp
public double MediaIndex { get; set; }
```

- *Type:* double

The index of the media stream in the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_index MedialiveInput#media_index}

---

##### `SdpUrl`<sup>Optional</sup> <a name="SdpUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps.property.sdpUrl"></a>

```csharp
public string SdpUrl { get; set; }
```

- *Type:* string

The URL of the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdp_url MedialiveInput#sdp_url}

---

### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps {
    double MediaIndex = null,
    string SdpUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps.property.mediaIndex">MediaIndex</a></code> | <code>double</code> | The index of the media stream in the SDP file for one SMPTE 2110 stream. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps.property.sdpUrl">SdpUrl</a></code> | <code>string</code> | The URL of the SDP file for one SMPTE 2110 stream. |

---

##### `MediaIndex`<sup>Optional</sup> <a name="MediaIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps.property.mediaIndex"></a>

```csharp
public double MediaIndex { get; set; }
```

- *Type:* double

The index of the media stream in the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_index MedialiveInput#media_index}

---

##### `SdpUrl`<sup>Optional</sup> <a name="SdpUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps.property.sdpUrl"></a>

```csharp
public string SdpUrl { get; set; }
```

- *Type:* string

The URL of the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdp_url MedialiveInput#sdp_url}

---

### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp {
    double MediaIndex = null,
    string SdpUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp.property.mediaIndex">MediaIndex</a></code> | <code>double</code> | The index of the media stream in the SDP file for one SMPTE 2110 stream. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp.property.sdpUrl">SdpUrl</a></code> | <code>string</code> | The URL of the SDP file for one SMPTE 2110 stream. |

---

##### `MediaIndex`<sup>Optional</sup> <a name="MediaIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp.property.mediaIndex"></a>

```csharp
public double MediaIndex { get; set; }
```

- *Type:* double

The index of the media stream in the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#media_index MedialiveInput#media_index}

---

##### `SdpUrl`<sup>Optional</sup> <a name="SdpUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp.property.sdpUrl"></a>

```csharp
public string SdpUrl { get; set; }
```

- *Type:* string

The URL of the SDP file for one SMPTE 2110 stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#sdp_url MedialiveInput#sdp_url}

---

### MedialiveInputSources <a name="MedialiveInputSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSources {
    string PasswordParam = null,
    string Url = null,
    string Username = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.property.passwordParam">PasswordParam</a></code> | <code>string</code> | The key used to extract the password from EC2 Parameter store. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.property.url">Url</a></code> | <code>string</code> | This represents the customer's source URL where stream is pulled from. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.property.username">Username</a></code> | <code>string</code> | The username for the input source. |

---

##### `PasswordParam`<sup>Optional</sup> <a name="PasswordParam" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.property.passwordParam"></a>

```csharp
public string PasswordParam { get; set; }
```

- *Type:* string

The key used to extract the password from EC2 Parameter store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#password_param MedialiveInput#password_param}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

This represents the customer's source URL where stream is pulled from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#url MedialiveInput#url}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSources.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

The username for the input source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#username MedialiveInput#username}

---

### MedialiveInputSrtSettings <a name="MedialiveInputSrtSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSrtSettings {
    IResolvable|MedialiveInputSrtSettingsSrtCallerSources[] SrtCallerSources = null,
    MedialiveInputSrtSettingsSrtListenerSettings SrtListenerSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings.property.srtCallerSources">SrtCallerSources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>[]</code> | Placeholder documentation for __listOfSrtCallerSource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings.property.srtListenerSettings">SrtListenerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a></code> | Settings for an SRT listener input. Configured only when the input uses the SRT_LISTENER input type. |

---

##### `SrtCallerSources`<sup>Optional</sup> <a name="SrtCallerSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings.property.srtCallerSources"></a>

```csharp
public IResolvable|MedialiveInputSrtSettingsSrtCallerSources[] SrtCallerSources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>[]

Placeholder documentation for __listOfSrtCallerSource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_caller_sources MedialiveInput#srt_caller_sources}

---

##### `SrtListenerSettings`<sup>Optional</sup> <a name="SrtListenerSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings.property.srtListenerSettings"></a>

```csharp
public MedialiveInputSrtSettingsSrtListenerSettings SrtListenerSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a>

Settings for an SRT listener input. Configured only when the input uses the SRT_LISTENER input type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_listener_settings MedialiveInput#srt_listener_settings}

---

### MedialiveInputSrtSettingsSrtCallerSources <a name="MedialiveInputSrtSettingsSrtCallerSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSrtSettingsSrtCallerSources {
    MedialiveInputSrtSettingsSrtCallerSourcesDecryption Decryption = null,
    double MinimumLatency = null,
    string SrtListenerAddress = null,
    string SrtListenerPort = null,
    string StreamId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.decryption">Decryption</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a></code> | The decryption settings for the SRT caller source. Present only if the source has decryption enabled. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.minimumLatency">MinimumLatency</a></code> | <code>double</code> | The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.srtListenerAddress">SrtListenerAddress</a></code> | <code>string</code> | The IP address at the upstream system (the listener) that MediaLive (the caller) connects to. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.srtListenerPort">SrtListenerPort</a></code> | <code>string</code> | The port at the upstream system (the listener) that MediaLive (the caller) connects to. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.streamId">StreamId</a></code> | <code>string</code> | The stream ID, if the upstream system uses this identifier. |

---

##### `Decryption`<sup>Optional</sup> <a name="Decryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.decryption"></a>

```csharp
public MedialiveInputSrtSettingsSrtCallerSourcesDecryption Decryption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a>

The decryption settings for the SRT caller source. Present only if the source has decryption enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#decryption MedialiveInput#decryption}

---

##### `MinimumLatency`<sup>Optional</sup> <a name="MinimumLatency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.minimumLatency"></a>

```csharp
public double MinimumLatency { get; set; }
```

- *Type:* double

The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#minimum_latency MedialiveInput#minimum_latency}

---

##### `SrtListenerAddress`<sup>Optional</sup> <a name="SrtListenerAddress" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.srtListenerAddress"></a>

```csharp
public string SrtListenerAddress { get; set; }
```

- *Type:* string

The IP address at the upstream system (the listener) that MediaLive (the caller) connects to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_listener_address MedialiveInput#srt_listener_address}

---

##### `SrtListenerPort`<sup>Optional</sup> <a name="SrtListenerPort" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.srtListenerPort"></a>

```csharp
public string SrtListenerPort { get; set; }
```

- *Type:* string

The port at the upstream system (the listener) that MediaLive (the caller) connects to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#srt_listener_port MedialiveInput#srt_listener_port}

---

##### `StreamId`<sup>Optional</sup> <a name="StreamId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources.property.streamId"></a>

```csharp
public string StreamId { get; set; }
```

- *Type:* string

The stream ID, if the upstream system uses this identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#stream_id MedialiveInput#stream_id}

---

### MedialiveInputSrtSettingsSrtCallerSourcesDecryption <a name="MedialiveInputSrtSettingsSrtCallerSourcesDecryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSrtSettingsSrtCallerSourcesDecryption {
    string Algorithm = null,
    string PassphraseSecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption.property.algorithm">Algorithm</a></code> | <code>string</code> | The algorithm used to encrypt content. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption.property.passphraseSecretArn">PassphraseSecretArn</a></code> | <code>string</code> | The ARN for the secret in Secrets Manager. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

The algorithm used to encrypt content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#algorithm MedialiveInput#algorithm}

---

##### `PassphraseSecretArn`<sup>Optional</sup> <a name="PassphraseSecretArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption.property.passphraseSecretArn"></a>

```csharp
public string PassphraseSecretArn { get; set; }
```

- *Type:* string

The ARN for the secret in Secrets Manager.

Someone in your organization must create a secret and provide you with its ARN. The secret holds the passphrase that MediaLive uses to decrypt the source content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#passphrase_secret_arn MedialiveInput#passphrase_secret_arn}

---

### MedialiveInputSrtSettingsSrtListenerSettings <a name="MedialiveInputSrtSettingsSrtListenerSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSrtSettingsSrtListenerSettings {
    MedialiveInputSrtSettingsSrtListenerSettingsDecryption Decryption = null,
    double MinimumLatency = null,
    string StreamId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.property.decryption">Decryption</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a></code> | The decryption settings for the SRT listener source. Present only if the source has decryption enabled. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.property.minimumLatency">MinimumLatency</a></code> | <code>double</code> | The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.property.streamId">StreamId</a></code> | <code>string</code> | The stream ID, if the upstream system uses this identifier. |

---

##### `Decryption`<sup>Optional</sup> <a name="Decryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.property.decryption"></a>

```csharp
public MedialiveInputSrtSettingsSrtListenerSettingsDecryption Decryption { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a>

The decryption settings for the SRT listener source. Present only if the source has decryption enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#decryption MedialiveInput#decryption}

---

##### `MinimumLatency`<sup>Optional</sup> <a name="MinimumLatency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.property.minimumLatency"></a>

```csharp
public double MinimumLatency { get; set; }
```

- *Type:* double

The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#minimum_latency MedialiveInput#minimum_latency}

---

##### `StreamId`<sup>Optional</sup> <a name="StreamId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings.property.streamId"></a>

```csharp
public string StreamId { get; set; }
```

- *Type:* string

The stream ID, if the upstream system uses this identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#stream_id MedialiveInput#stream_id}

---

### MedialiveInputSrtSettingsSrtListenerSettingsDecryption <a name="MedialiveInputSrtSettingsSrtListenerSettingsDecryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSrtSettingsSrtListenerSettingsDecryption {
    string Algorithm = null,
    string PassphraseSecretArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption.property.algorithm">Algorithm</a></code> | <code>string</code> | The algorithm used to encrypt content. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption.property.passphraseSecretArn">PassphraseSecretArn</a></code> | <code>string</code> | The ARN for the secret in Secrets Manager. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

The algorithm used to encrypt content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#algorithm MedialiveInput#algorithm}

---

##### `PassphraseSecretArn`<sup>Optional</sup> <a name="PassphraseSecretArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption.property.passphraseSecretArn"></a>

```csharp
public string PassphraseSecretArn { get; set; }
```

- *Type:* string

The ARN for the secret in Secrets Manager.

Someone in your organization must create a secret and provide you with its ARN. The secret holds the passphrase that MediaLive uses to decrypt the source content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#passphrase_secret_arn MedialiveInput#passphrase_secret_arn}

---

### MedialiveInputVpc <a name="MedialiveInputVpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputVpc {
    string[] SecurityGroupIds = null,
    string[] SubnetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | A list of 2 VPC subnet IDs from the same VPC. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces.

Requires subnetIds. If none are specified then the VPC default security group will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#security_group_ids MedialiveInput#security_group_ids}

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

A list of 2 VPC subnet IDs from the same VPC.

Subnet IDs must be mapped to two unique availability zones (AZ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.110.0/docs/resources/medialive_input#subnet_ids MedialiveInput#subnet_ids}

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveInputDestinationsList <a name="MedialiveInputDestinationsList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.get"></a>

```csharp
private MedialiveInputDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>[]

---


### MedialiveInputDestinationsNetworkRoutesList <a name="MedialiveInputDestinationsNetworkRoutesList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputDestinationsNetworkRoutesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.get"></a>

```csharp
private MedialiveInputDestinationsNetworkRoutesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputDestinationsNetworkRoutes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>[]

---


### MedialiveInputDestinationsNetworkRoutesOutputReference <a name="MedialiveInputDestinationsNetworkRoutesOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputDestinationsNetworkRoutesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resetGateway">ResetGateway</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resetCidr"></a>

```csharp
private void ResetCidr()
```

##### `ResetGateway` <a name="ResetGateway" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.resetGateway"></a>

```csharp
private void ResetGateway()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.gatewayInput">GatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.gateway">Gateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `GatewayInput`<sup>Optional</sup> <a name="GatewayInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.gatewayInput"></a>

```csharp
public string GatewayInput { get; }
```

- *Type:* string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.gateway"></a>

```csharp
public string Gateway { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputDestinationsNetworkRoutes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>

---


### MedialiveInputDestinationsOutputReference <a name="MedialiveInputDestinationsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putNetworkRoutes">PutNetworkRoutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putVpc">PutVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetNetworkRoutes">ResetNetworkRoutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetStaticIpAddress">ResetStaticIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetStreamName">ResetStreamName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetVpc">ResetVpc</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkRoutes` <a name="PutNetworkRoutes" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putNetworkRoutes"></a>

```csharp
private void PutNetworkRoutes(IResolvable|MedialiveInputDestinationsNetworkRoutes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putNetworkRoutes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>[]

---

##### `PutVpc` <a name="PutVpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putVpc"></a>

```csharp
private void PutVpc(MedialiveInputDestinationsVpc Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a>

---

##### `ResetIp` <a name="ResetIp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetIp"></a>

```csharp
private void ResetIp()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetNetwork"></a>

```csharp
private void ResetNetwork()
```

##### `ResetNetworkRoutes` <a name="ResetNetworkRoutes" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetNetworkRoutes"></a>

```csharp
private void ResetNetworkRoutes()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetStaticIpAddress` <a name="ResetStaticIpAddress" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetStaticIpAddress"></a>

```csharp
private void ResetStaticIpAddress()
```

##### `ResetStreamName` <a name="ResetStreamName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetStreamName"></a>

```csharp
private void ResetStreamName()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.resetVpc"></a>

```csharp
private void ResetVpc()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.networkRoutes">NetworkRoutes</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList">MedialiveInputDestinationsNetworkRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.vpc">Vpc</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference">MedialiveInputDestinationsVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.ipInput">IpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.networkInput">NetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.networkRoutesInput">NetworkRoutesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.portInput">PortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.staticIpAddressInput">StaticIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.streamNameInput">StreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.vpcInput">VpcInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.port">Port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.staticIpAddress">StaticIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.streamName">StreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkRoutes`<sup>Required</sup> <a name="NetworkRoutes" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.networkRoutes"></a>

```csharp
public MedialiveInputDestinationsNetworkRoutesList NetworkRoutes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutesList">MedialiveInputDestinationsNetworkRoutesList</a>

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.vpc"></a>

```csharp
public MedialiveInputDestinationsVpcOutputReference Vpc { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference">MedialiveInputDestinationsVpcOutputReference</a>

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.ipInput"></a>

```csharp
public string IpInput { get; }
```

- *Type:* string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.networkInput"></a>

```csharp
public string NetworkInput { get; }
```

- *Type:* string

---

##### `NetworkRoutesInput`<sup>Optional</sup> <a name="NetworkRoutesInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.networkRoutesInput"></a>

```csharp
public IResolvable|MedialiveInputDestinationsNetworkRoutes[] NetworkRoutesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsNetworkRoutes">MedialiveInputDestinationsNetworkRoutes</a>[]

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.portInput"></a>

```csharp
public string PortInput { get; }
```

- *Type:* string

---

##### `StaticIpAddressInput`<sup>Optional</sup> <a name="StaticIpAddressInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.staticIpAddressInput"></a>

```csharp
public string StaticIpAddressInput { get; }
```

- *Type:* string

---

##### `StreamNameInput`<sup>Optional</sup> <a name="StreamNameInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.streamNameInput"></a>

```csharp
public string StreamNameInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.vpcInput"></a>

```csharp
public IResolvable|MedialiveInputDestinationsVpc VpcInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a>

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.port"></a>

```csharp
public string Port { get; }
```

- *Type:* string

---

##### `StaticIpAddress`<sup>Required</sup> <a name="StaticIpAddress" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.staticIpAddress"></a>

```csharp
public string StaticIpAddress { get; }
```

- *Type:* string

---

##### `StreamName`<sup>Required</sup> <a name="StreamName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.streamName"></a>

```csharp
public string StreamName { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinations">MedialiveInputDestinations</a>

---


### MedialiveInputDestinationsVpcOutputReference <a name="MedialiveInputDestinationsVpcOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputDestinationsVpcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resetNetworkInterfaceId">ResetNetworkInterfaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resetAvailabilityZone"></a>

```csharp
private void ResetAvailabilityZone()
```

##### `ResetNetworkInterfaceId` <a name="ResetNetworkInterfaceId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.resetNetworkInterfaceId"></a>

```csharp
private void ResetNetworkInterfaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.networkInterfaceIdInput"></a>

```csharp
public string NetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpcOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputDestinationsVpc InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputDestinationsVpc">MedialiveInputDestinationsVpc</a>

---


### MedialiveInputInputDevicesList <a name="MedialiveInputInputDevicesList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputInputDevicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.get"></a>

```csharp
private MedialiveInputInputDevicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesList.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputInputDevices[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>[]

---


### MedialiveInputInputDevicesOutputReference <a name="MedialiveInputInputDevicesOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputInputDevicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.resetId"></a>

```csharp
private void ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevicesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputInputDevices InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputInputDevices">MedialiveInputInputDevices</a>

---


### MedialiveInputMediaConnectFlowsList <a name="MedialiveInputMediaConnectFlowsList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputMediaConnectFlowsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.get"></a>

```csharp
private MedialiveInputMediaConnectFlowsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsList.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputMediaConnectFlows[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>[]

---


### MedialiveInputMediaConnectFlowsOutputReference <a name="MedialiveInputMediaConnectFlowsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputMediaConnectFlowsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.resetFlowArn">ResetFlowArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFlowArn` <a name="ResetFlowArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.resetFlowArn"></a>

```csharp
private void ResetFlowArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.flowArnInput">FlowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.flowArn">FlowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FlowArnInput`<sup>Optional</sup> <a name="FlowArnInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.flowArnInput"></a>

```csharp
public string FlowArnInput { get; }
```

- *Type:* string

---

##### `FlowArn`<sup>Required</sup> <a name="FlowArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.flowArn"></a>

```csharp
public string FlowArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlowsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputMediaConnectFlows InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMediaConnectFlows">MedialiveInputMediaConnectFlows</a>

---


### MedialiveInputMulticastSettingsOutputReference <a name="MedialiveInputMulticastSettingsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputMulticastSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSources` <a name="PutSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.putSources"></a>

```csharp
private void PutSources(IResolvable|MedialiveInputMulticastSettingsSources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.putSources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>[]

---

##### `ResetSources` <a name="ResetSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.resetSources"></a>

```csharp
private void ResetSources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList">MedialiveInputMulticastSettingsSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.sourcesInput">SourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.sources"></a>

```csharp
public MedialiveInputMulticastSettingsSourcesList Sources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList">MedialiveInputMulticastSettingsSourcesList</a>

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.sourcesInput"></a>

```csharp
public IResolvable|MedialiveInputMulticastSettingsSources[] SourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputMulticastSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettings">MedialiveInputMulticastSettings</a>

---


### MedialiveInputMulticastSettingsSourcesList <a name="MedialiveInputMulticastSettingsSourcesList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputMulticastSettingsSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.get"></a>

```csharp
private MedialiveInputMulticastSettingsSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesList.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputMulticastSettingsSources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>[]

---


### MedialiveInputMulticastSettingsSourcesOutputReference <a name="MedialiveInputMulticastSettingsSourcesOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputMulticastSettingsSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resetSourceIp">ResetSourceIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSourceIp` <a name="ResetSourceIp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resetSourceIp"></a>

```csharp
private void ResetSourceIp()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.sourceIpInput">SourceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.sourceIp">SourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SourceIpInput`<sup>Optional</sup> <a name="SourceIpInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.sourceIpInput"></a>

```csharp
public string SourceIpInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.sourceIp"></a>

```csharp
public string SourceIp { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputMulticastSettingsSources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputMulticastSettingsSources">MedialiveInputMulticastSettingsSources</a>

---


### MedialiveInputRouterSettingsDestinationsList <a name="MedialiveInputRouterSettingsDestinationsList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputRouterSettingsDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.get"></a>

```csharp
private MedialiveInputRouterSettingsDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputRouterSettingsDestinations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>[]

---


### MedialiveInputRouterSettingsDestinationsOutputReference <a name="MedialiveInputRouterSettingsDestinationsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputRouterSettingsDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resetAvailabilityZoneName">ResetAvailabilityZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resetRouterOutputArn">ResetRouterOutputArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityZoneName` <a name="ResetAvailabilityZoneName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resetAvailabilityZoneName"></a>

```csharp
private void ResetAvailabilityZoneName()
```

##### `ResetRouterOutputArn` <a name="ResetRouterOutputArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.resetRouterOutputArn"></a>

```csharp
private void ResetRouterOutputArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.availabilityZoneNameInput">AvailabilityZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.routerOutputArnInput">RouterOutputArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.routerOutputArn">RouterOutputArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneNameInput`<sup>Optional</sup> <a name="AvailabilityZoneNameInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.availabilityZoneNameInput"></a>

```csharp
public string AvailabilityZoneNameInput { get; }
```

- *Type:* string

---

##### `RouterOutputArnInput`<sup>Optional</sup> <a name="RouterOutputArnInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.routerOutputArnInput"></a>

```csharp
public string RouterOutputArnInput { get; }
```

- *Type:* string

---

##### `AvailabilityZoneName`<sup>Required</sup> <a name="AvailabilityZoneName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.availabilityZoneName"></a>

```csharp
public string AvailabilityZoneName { get; }
```

- *Type:* string

---

##### `RouterOutputArn`<sup>Required</sup> <a name="RouterOutputArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.routerOutputArn"></a>

```csharp
public string RouterOutputArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputRouterSettingsDestinations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>

---


### MedialiveInputRouterSettingsOutputReference <a name="MedialiveInputRouterSettingsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputRouterSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resetEncryptionType">ResetEncryptionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.putDestinations"></a>

```csharp
private void PutDestinations(IResolvable|MedialiveInputRouterSettingsDestinations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.putDestinations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>[]

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resetDestinations"></a>

```csharp
private void ResetDestinations()
```

##### `ResetEncryptionType` <a name="ResetEncryptionType" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resetEncryptionType"></a>

```csharp
private void ResetEncryptionType()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList">MedialiveInputRouterSettingsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.encryptionTypeInput">EncryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.encryptionType">EncryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.destinations"></a>

```csharp
public MedialiveInputRouterSettingsDestinationsList Destinations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinationsList">MedialiveInputRouterSettingsDestinationsList</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.destinationsInput"></a>

```csharp
public IResolvable|MedialiveInputRouterSettingsDestinations[] DestinationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsDestinations">MedialiveInputRouterSettingsDestinations</a>[]

---

##### `EncryptionTypeInput`<sup>Optional</sup> <a name="EncryptionTypeInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.encryptionTypeInput"></a>

```csharp
public string EncryptionTypeInput { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.encryptionType"></a>

```csharp
public string EncryptionType { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputRouterSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputRouterSettings">MedialiveInputRouterSettings</a>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference <a name="MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.putSmpte2110ReceiverGroups">PutSmpte2110ReceiverGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resetSmpte2110ReceiverGroups">ResetSmpte2110ReceiverGroups</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSmpte2110ReceiverGroups` <a name="PutSmpte2110ReceiverGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.putSmpte2110ReceiverGroups"></a>

```csharp
private void PutSmpte2110ReceiverGroups(IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.putSmpte2110ReceiverGroups.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>[]

---

##### `ResetSmpte2110ReceiverGroups` <a name="ResetSmpte2110ReceiverGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.resetSmpte2110ReceiverGroups"></a>

```csharp
private void ResetSmpte2110ReceiverGroups()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.smpte2110ReceiverGroups">Smpte2110ReceiverGroups</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.smpte2110ReceiverGroupsInput">Smpte2110ReceiverGroupsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Smpte2110ReceiverGroups`<sup>Required</sup> <a name="Smpte2110ReceiverGroups" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.smpte2110ReceiverGroups"></a>

```csharp
public MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList Smpte2110ReceiverGroups { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList</a>

---

##### `Smpte2110ReceiverGroupsInput`<sup>Optional</sup> <a name="Smpte2110ReceiverGroupsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.smpte2110ReceiverGroupsInput"></a>

```csharp
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups[] Smpte2110ReceiverGroupsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettings">MedialiveInputSmpte2110ReceiverGroupSettings</a>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.get"></a>

```csharp
private MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsList.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>[]

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.putSdpSettings">PutSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resetSdpSettings">ResetSdpSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSdpSettings` <a name="PutSdpSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.putSdpSettings"></a>

```csharp
private void PutSdpSettings(MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.putSdpSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a>

---

##### `ResetSdpSettings` <a name="ResetSdpSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.resetSdpSettings"></a>

```csharp
private void ResetSdpSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.sdpSettings">SdpSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.sdpSettingsInput">SdpSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SdpSettings`<sup>Required</sup> <a name="SdpSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.sdpSettings"></a>

```csharp
public MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference SdpSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference</a>

---

##### `SdpSettingsInput`<sup>Optional</sup> <a name="SdpSettingsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.sdpSettingsInput"></a>

```csharp
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings SdpSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroups</a>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.get"></a>

```csharp
private MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>[]

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resetMediaIndex">ResetMediaIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resetSdpUrl">ResetSdpUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMediaIndex` <a name="ResetMediaIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resetMediaIndex"></a>

```csharp
private void ResetMediaIndex()
```

##### `ResetSdpUrl` <a name="ResetSdpUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.resetSdpUrl"></a>

```csharp
private void ResetSdpUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.mediaIndexInput">MediaIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.sdpUrlInput">SdpUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.mediaIndex">MediaIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.sdpUrl">SdpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MediaIndexInput`<sup>Optional</sup> <a name="MediaIndexInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.mediaIndexInput"></a>

```csharp
public double MediaIndexInput { get; }
```

- *Type:* double

---

##### `SdpUrlInput`<sup>Optional</sup> <a name="SdpUrlInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.sdpUrlInput"></a>

```csharp
public string SdpUrlInput { get; }
```

- *Type:* string

---

##### `MediaIndex`<sup>Required</sup> <a name="MediaIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.mediaIndex"></a>

```csharp
public double MediaIndex { get; }
```

- *Type:* double

---

##### `SdpUrl`<sup>Required</sup> <a name="SdpUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.sdpUrl"></a>

```csharp
public string SdpUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.get"></a>

```csharp
private MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>[]

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resetMediaIndex">ResetMediaIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resetSdpUrl">ResetSdpUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMediaIndex` <a name="ResetMediaIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resetMediaIndex"></a>

```csharp
private void ResetMediaIndex()
```

##### `ResetSdpUrl` <a name="ResetSdpUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.resetSdpUrl"></a>

```csharp
private void ResetSdpUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.mediaIndexInput">MediaIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.sdpUrlInput">SdpUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.mediaIndex">MediaIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.sdpUrl">SdpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MediaIndexInput`<sup>Optional</sup> <a name="MediaIndexInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.mediaIndexInput"></a>

```csharp
public double MediaIndexInput { get; }
```

- *Type:* double

---

##### `SdpUrlInput`<sup>Optional</sup> <a name="SdpUrlInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.sdpUrlInput"></a>

```csharp
public string SdpUrlInput { get; }
```

- *Type:* string

---

##### `MediaIndex`<sup>Required</sup> <a name="MediaIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.mediaIndex"></a>

```csharp
public double MediaIndex { get; }
```

- *Type:* double

---

##### `SdpUrl`<sup>Required</sup> <a name="SdpUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.sdpUrl"></a>

```csharp
public string SdpUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putAncillarySdps">PutAncillarySdps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putAudioSdps">PutAudioSdps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putVideoSdp">PutVideoSdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resetAncillarySdps">ResetAncillarySdps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resetAudioSdps">ResetAudioSdps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resetVideoSdp">ResetVideoSdp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAncillarySdps` <a name="PutAncillarySdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putAncillarySdps"></a>

```csharp
private void PutAncillarySdps(IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putAncillarySdps.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>[]

---

##### `PutAudioSdps` <a name="PutAudioSdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putAudioSdps"></a>

```csharp
private void PutAudioSdps(IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putAudioSdps.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>[]

---

##### `PutVideoSdp` <a name="PutVideoSdp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putVideoSdp"></a>

```csharp
private void PutVideoSdp(MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.putVideoSdp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a>

---

##### `ResetAncillarySdps` <a name="ResetAncillarySdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resetAncillarySdps"></a>

```csharp
private void ResetAncillarySdps()
```

##### `ResetAudioSdps` <a name="ResetAudioSdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resetAudioSdps"></a>

```csharp
private void ResetAudioSdps()
```

##### `ResetVideoSdp` <a name="ResetVideoSdp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.resetVideoSdp"></a>

```csharp
private void ResetVideoSdp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.ancillarySdps">AncillarySdps</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.audioSdps">AudioSdps</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.videoSdp">VideoSdp</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.ancillarySdpsInput">AncillarySdpsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.audioSdpsInput">AudioSdpsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.videoSdpInput">VideoSdpInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AncillarySdps`<sup>Required</sup> <a name="AncillarySdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.ancillarySdps"></a>

```csharp
public MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList AncillarySdps { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdpsList</a>

---

##### `AudioSdps`<sup>Required</sup> <a name="AudioSdps" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.audioSdps"></a>

```csharp
public MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList AudioSdps { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdpsList</a>

---

##### `VideoSdp`<sup>Required</sup> <a name="VideoSdp" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.videoSdp"></a>

```csharp
public MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference VideoSdp { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference</a>

---

##### `AncillarySdpsInput`<sup>Optional</sup> <a name="AncillarySdpsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.ancillarySdpsInput"></a>

```csharp
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps[] AncillarySdpsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAncillarySdps</a>[]

---

##### `AudioSdpsInput`<sup>Optional</sup> <a name="AudioSdpsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.audioSdpsInput"></a>

```csharp
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps[] AudioSdpsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsAudioSdps</a>[]

---

##### `VideoSdpInput`<sup>Optional</sup> <a name="VideoSdpInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.videoSdpInput"></a>

```csharp
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp VideoSdpInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettings</a>

---


### MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference <a name="MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resetMediaIndex">ResetMediaIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resetSdpUrl">ResetSdpUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMediaIndex` <a name="ResetMediaIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resetMediaIndex"></a>

```csharp
private void ResetMediaIndex()
```

##### `ResetSdpUrl` <a name="ResetSdpUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.resetSdpUrl"></a>

```csharp
private void ResetSdpUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.mediaIndexInput">MediaIndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.sdpUrlInput">SdpUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.mediaIndex">MediaIndex</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.sdpUrl">SdpUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MediaIndexInput`<sup>Optional</sup> <a name="MediaIndexInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.mediaIndexInput"></a>

```csharp
public double MediaIndexInput { get; }
```

- *Type:* double

---

##### `SdpUrlInput`<sup>Optional</sup> <a name="SdpUrlInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.sdpUrlInput"></a>

```csharp
public string SdpUrlInput { get; }
```

- *Type:* string

---

##### `MediaIndex`<sup>Required</sup> <a name="MediaIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.mediaIndex"></a>

```csharp
public double MediaIndex { get; }
```

- *Type:* double

---

##### `SdpUrl`<sup>Required</sup> <a name="SdpUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.sdpUrl"></a>

```csharp
public string SdpUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdpOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp">MedialiveInputSmpte2110ReceiverGroupSettingsSmpte2110ReceiverGroupsSdpSettingsVideoSdp</a>

---


### MedialiveInputSourcesList <a name="MedialiveInputSourcesList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.get"></a>

```csharp
private MedialiveInputSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesList.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputSources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>[]

---


### MedialiveInputSourcesOutputReference <a name="MedialiveInputSourcesOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resetPasswordParam">ResetPasswordParam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPasswordParam` <a name="ResetPasswordParam" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resetPasswordParam"></a>

```csharp
private void ResetPasswordParam()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.passwordParamInput">PasswordParamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.passwordParam">PasswordParam</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordParamInput`<sup>Optional</sup> <a name="PasswordParamInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.passwordParamInput"></a>

```csharp
public string PasswordParamInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `PasswordParam`<sup>Required</sup> <a name="PasswordParam" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.passwordParam"></a>

```csharp
public string PasswordParam { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputSources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSources">MedialiveInputSources</a>

---


### MedialiveInputSrtSettingsOutputReference <a name="MedialiveInputSrtSettingsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSrtSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtCallerSources">PutSrtCallerSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtListenerSettings">PutSrtListenerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resetSrtCallerSources">ResetSrtCallerSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resetSrtListenerSettings">ResetSrtListenerSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSrtCallerSources` <a name="PutSrtCallerSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtCallerSources"></a>

```csharp
private void PutSrtCallerSources(IResolvable|MedialiveInputSrtSettingsSrtCallerSources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtCallerSources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>[]

---

##### `PutSrtListenerSettings` <a name="PutSrtListenerSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtListenerSettings"></a>

```csharp
private void PutSrtListenerSettings(MedialiveInputSrtSettingsSrtListenerSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.putSrtListenerSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a>

---

##### `ResetSrtCallerSources` <a name="ResetSrtCallerSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resetSrtCallerSources"></a>

```csharp
private void ResetSrtCallerSources()
```

##### `ResetSrtListenerSettings` <a name="ResetSrtListenerSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.resetSrtListenerSettings"></a>

```csharp
private void ResetSrtListenerSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtCallerSources">SrtCallerSources</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList">MedialiveInputSrtSettingsSrtCallerSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtListenerSettings">SrtListenerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference">MedialiveInputSrtSettingsSrtListenerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtCallerSourcesInput">SrtCallerSourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtListenerSettingsInput">SrtListenerSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SrtCallerSources`<sup>Required</sup> <a name="SrtCallerSources" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtCallerSources"></a>

```csharp
public MedialiveInputSrtSettingsSrtCallerSourcesList SrtCallerSources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList">MedialiveInputSrtSettingsSrtCallerSourcesList</a>

---

##### `SrtListenerSettings`<sup>Required</sup> <a name="SrtListenerSettings" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtListenerSettings"></a>

```csharp
public MedialiveInputSrtSettingsSrtListenerSettingsOutputReference SrtListenerSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference">MedialiveInputSrtSettingsSrtListenerSettingsOutputReference</a>

---

##### `SrtCallerSourcesInput`<sup>Optional</sup> <a name="SrtCallerSourcesInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtCallerSourcesInput"></a>

```csharp
public IResolvable|MedialiveInputSrtSettingsSrtCallerSources[] SrtCallerSourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>[]

---

##### `SrtListenerSettingsInput`<sup>Optional</sup> <a name="SrtListenerSettingsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.srtListenerSettingsInput"></a>

```csharp
public IResolvable|MedialiveInputSrtSettingsSrtListenerSettings SrtListenerSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputSrtSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettings">MedialiveInputSrtSettings</a>

---


### MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference <a name="MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resetPassphraseSecretArn">ResetPassphraseSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetPassphraseSecretArn` <a name="ResetPassphraseSecretArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.resetPassphraseSecretArn"></a>

```csharp
private void ResetPassphraseSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.passphraseSecretArnInput">PassphraseSecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.passphraseSecretArn">PassphraseSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `PassphraseSecretArnInput`<sup>Optional</sup> <a name="PassphraseSecretArnInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.passphraseSecretArnInput"></a>

```csharp
public string PassphraseSecretArnInput { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `PassphraseSecretArn`<sup>Required</sup> <a name="PassphraseSecretArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.passphraseSecretArn"></a>

```csharp
public string PassphraseSecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputSrtSettingsSrtCallerSourcesDecryption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a>

---


### MedialiveInputSrtSettingsSrtCallerSourcesList <a name="MedialiveInputSrtSettingsSrtCallerSourcesList" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSrtSettingsSrtCallerSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.get"></a>

```csharp
private MedialiveInputSrtSettingsSrtCallerSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesList.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputSrtSettingsSrtCallerSources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>[]

---


### MedialiveInputSrtSettingsSrtCallerSourcesOutputReference <a name="MedialiveInputSrtSettingsSrtCallerSourcesOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSrtSettingsSrtCallerSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.putDecryption">PutDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetDecryption">ResetDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetMinimumLatency">ResetMinimumLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetSrtListenerAddress">ResetSrtListenerAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetSrtListenerPort">ResetSrtListenerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetStreamId">ResetStreamId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDecryption` <a name="PutDecryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.putDecryption"></a>

```csharp
private void PutDecryption(MedialiveInputSrtSettingsSrtCallerSourcesDecryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.putDecryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a>

---

##### `ResetDecryption` <a name="ResetDecryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetDecryption"></a>

```csharp
private void ResetDecryption()
```

##### `ResetMinimumLatency` <a name="ResetMinimumLatency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetMinimumLatency"></a>

```csharp
private void ResetMinimumLatency()
```

##### `ResetSrtListenerAddress` <a name="ResetSrtListenerAddress" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetSrtListenerAddress"></a>

```csharp
private void ResetSrtListenerAddress()
```

##### `ResetSrtListenerPort` <a name="ResetSrtListenerPort" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetSrtListenerPort"></a>

```csharp
private void ResetSrtListenerPort()
```

##### `ResetStreamId` <a name="ResetStreamId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.resetStreamId"></a>

```csharp
private void ResetStreamId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.decryption">Decryption</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference">MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.decryptionInput">DecryptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.minimumLatencyInput">MinimumLatencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerAddressInput">SrtListenerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerPortInput">SrtListenerPortInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.streamIdInput">StreamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.minimumLatency">MinimumLatency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerAddress">SrtListenerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerPort">SrtListenerPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.streamId">StreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Decryption`<sup>Required</sup> <a name="Decryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.decryption"></a>

```csharp
public MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference Decryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference">MedialiveInputSrtSettingsSrtCallerSourcesDecryptionOutputReference</a>

---

##### `DecryptionInput`<sup>Optional</sup> <a name="DecryptionInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.decryptionInput"></a>

```csharp
public IResolvable|MedialiveInputSrtSettingsSrtCallerSourcesDecryption DecryptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesDecryption">MedialiveInputSrtSettingsSrtCallerSourcesDecryption</a>

---

##### `MinimumLatencyInput`<sup>Optional</sup> <a name="MinimumLatencyInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.minimumLatencyInput"></a>

```csharp
public double MinimumLatencyInput { get; }
```

- *Type:* double

---

##### `SrtListenerAddressInput`<sup>Optional</sup> <a name="SrtListenerAddressInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerAddressInput"></a>

```csharp
public string SrtListenerAddressInput { get; }
```

- *Type:* string

---

##### `SrtListenerPortInput`<sup>Optional</sup> <a name="SrtListenerPortInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerPortInput"></a>

```csharp
public string SrtListenerPortInput { get; }
```

- *Type:* string

---

##### `StreamIdInput`<sup>Optional</sup> <a name="StreamIdInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.streamIdInput"></a>

```csharp
public string StreamIdInput { get; }
```

- *Type:* string

---

##### `MinimumLatency`<sup>Required</sup> <a name="MinimumLatency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.minimumLatency"></a>

```csharp
public double MinimumLatency { get; }
```

- *Type:* double

---

##### `SrtListenerAddress`<sup>Required</sup> <a name="SrtListenerAddress" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerAddress"></a>

```csharp
public string SrtListenerAddress { get; }
```

- *Type:* string

---

##### `SrtListenerPort`<sup>Required</sup> <a name="SrtListenerPort" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.srtListenerPort"></a>

```csharp
public string SrtListenerPort { get; }
```

- *Type:* string

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.streamId"></a>

```csharp
public string StreamId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputSrtSettingsSrtCallerSources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtCallerSources">MedialiveInputSrtSettingsSrtCallerSources</a>

---


### MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference <a name="MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resetPassphraseSecretArn">ResetPassphraseSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetPassphraseSecretArn` <a name="ResetPassphraseSecretArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.resetPassphraseSecretArn"></a>

```csharp
private void ResetPassphraseSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.passphraseSecretArnInput">PassphraseSecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.passphraseSecretArn">PassphraseSecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `PassphraseSecretArnInput`<sup>Optional</sup> <a name="PassphraseSecretArnInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.passphraseSecretArnInput"></a>

```csharp
public string PassphraseSecretArnInput { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `PassphraseSecretArn`<sup>Required</sup> <a name="PassphraseSecretArn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.passphraseSecretArn"></a>

```csharp
public string PassphraseSecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputSrtSettingsSrtListenerSettingsDecryption InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a>

---


### MedialiveInputSrtSettingsSrtListenerSettingsOutputReference <a name="MedialiveInputSrtSettingsSrtListenerSettingsOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputSrtSettingsSrtListenerSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.putDecryption">PutDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resetDecryption">ResetDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resetMinimumLatency">ResetMinimumLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resetStreamId">ResetStreamId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDecryption` <a name="PutDecryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.putDecryption"></a>

```csharp
private void PutDecryption(MedialiveInputSrtSettingsSrtListenerSettingsDecryption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.putDecryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a>

---

##### `ResetDecryption` <a name="ResetDecryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resetDecryption"></a>

```csharp
private void ResetDecryption()
```

##### `ResetMinimumLatency` <a name="ResetMinimumLatency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resetMinimumLatency"></a>

```csharp
private void ResetMinimumLatency()
```

##### `ResetStreamId` <a name="ResetStreamId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.resetStreamId"></a>

```csharp
private void ResetStreamId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.decryption">Decryption</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference">MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.decryptionInput">DecryptionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.minimumLatencyInput">MinimumLatencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.streamIdInput">StreamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.minimumLatency">MinimumLatency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.streamId">StreamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Decryption`<sup>Required</sup> <a name="Decryption" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.decryption"></a>

```csharp
public MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference Decryption { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference">MedialiveInputSrtSettingsSrtListenerSettingsDecryptionOutputReference</a>

---

##### `DecryptionInput`<sup>Optional</sup> <a name="DecryptionInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.decryptionInput"></a>

```csharp
public IResolvable|MedialiveInputSrtSettingsSrtListenerSettingsDecryption DecryptionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsDecryption">MedialiveInputSrtSettingsSrtListenerSettingsDecryption</a>

---

##### `MinimumLatencyInput`<sup>Optional</sup> <a name="MinimumLatencyInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.minimumLatencyInput"></a>

```csharp
public double MinimumLatencyInput { get; }
```

- *Type:* double

---

##### `StreamIdInput`<sup>Optional</sup> <a name="StreamIdInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.streamIdInput"></a>

```csharp
public string StreamIdInput { get; }
```

- *Type:* string

---

##### `MinimumLatency`<sup>Required</sup> <a name="MinimumLatency" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.minimumLatency"></a>

```csharp
public double MinimumLatency { get; }
```

- *Type:* double

---

##### `StreamId`<sup>Required</sup> <a name="StreamId" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.streamId"></a>

```csharp
public string StreamId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputSrtSettingsSrtListenerSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputSrtSettingsSrtListenerSettings">MedialiveInputSrtSettingsSrtListenerSettings</a>

---


### MedialiveInputVpcOutputReference <a name="MedialiveInputVpcOutputReference" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MedialiveInputVpcOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.resetSubnetIds"></a>

```csharp
private void ResetSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveInput.MedialiveInputVpcOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MedialiveInputVpc InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.medialiveInput.MedialiveInputVpc">MedialiveInputVpc</a>

---



