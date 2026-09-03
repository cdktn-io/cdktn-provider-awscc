# `rtbfabricInboundExternalLink` Submodule <a name="`rtbfabricInboundExternalLink` Submodule" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtbfabricInboundExternalLink <a name="RtbfabricInboundExternalLink" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link awscc_rtbfabric_inbound_external_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricInboundExternalLink(Construct Scope, string Id, RtbfabricInboundExternalLinkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig">RtbfabricInboundExternalLinkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig">RtbfabricInboundExternalLinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putLinkAttributes">PutLinkAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putLinkLogSettings">PutLinkLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.resetLinkAttributes">ResetLinkAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLinkAttributes` <a name="PutLinkAttributes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putLinkAttributes"></a>

```csharp
private void PutLinkAttributes(RtbfabricInboundExternalLinkLinkAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putLinkAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes">RtbfabricInboundExternalLinkLinkAttributes</a>

---

##### `PutLinkLogSettings` <a name="PutLinkLogSettings" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putLinkLogSettings"></a>

```csharp
private void PutLinkLogSettings(RtbfabricInboundExternalLinkLinkLogSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putLinkLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings">RtbfabricInboundExternalLinkLinkLogSettings</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putTags"></a>

```csharp
private void PutTags(IResolvable|RtbfabricInboundExternalLinkTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags">RtbfabricInboundExternalLinkTags</a>[]

---

##### `ResetLinkAttributes` <a name="ResetLinkAttributes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.resetLinkAttributes"></a>

```csharp
private void ResetLinkAttributes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RtbfabricInboundExternalLink resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RtbfabricInboundExternalLink.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RtbfabricInboundExternalLink.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RtbfabricInboundExternalLink.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

RtbfabricInboundExternalLink.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a RtbfabricInboundExternalLink resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RtbfabricInboundExternalLink to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RtbfabricInboundExternalLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the RtbfabricInboundExternalLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.createdTimestamp">CreatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkAttributes">LinkAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference">RtbfabricInboundExternalLinkLinkAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkId">LinkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkLogSettings">LinkLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference">RtbfabricInboundExternalLinkLinkLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkStatus">LinkStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList">RtbfabricInboundExternalLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.updatedTimestamp">UpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.gatewayIdInput">GatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkAttributesInput">LinkAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes">RtbfabricInboundExternalLinkLinkAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkLogSettingsInput">LinkLogSettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings">RtbfabricInboundExternalLinkLinkLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags">RtbfabricInboundExternalLinkTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.createdTimestamp"></a>

```csharp
public string CreatedTimestamp { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LinkAttributes`<sup>Required</sup> <a name="LinkAttributes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkAttributes"></a>

```csharp
public RtbfabricInboundExternalLinkLinkAttributesOutputReference LinkAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference">RtbfabricInboundExternalLinkLinkAttributesOutputReference</a>

---

##### `LinkId`<sup>Required</sup> <a name="LinkId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkId"></a>

```csharp
public string LinkId { get; }
```

- *Type:* string

---

##### `LinkLogSettings`<sup>Required</sup> <a name="LinkLogSettings" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkLogSettings"></a>

```csharp
public RtbfabricInboundExternalLinkLinkLogSettingsOutputReference LinkLogSettings { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference">RtbfabricInboundExternalLinkLinkLogSettingsOutputReference</a>

---

##### `LinkStatus`<sup>Required</sup> <a name="LinkStatus" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkStatus"></a>

```csharp
public string LinkStatus { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.tags"></a>

```csharp
public RtbfabricInboundExternalLinkTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList">RtbfabricInboundExternalLinkTagsList</a>

---

##### `UpdatedTimestamp`<sup>Required</sup> <a name="UpdatedTimestamp" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.updatedTimestamp"></a>

```csharp
public string UpdatedTimestamp { get; }
```

- *Type:* string

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.gatewayIdInput"></a>

```csharp
public string GatewayIdInput { get; }
```

- *Type:* string

---

##### `LinkAttributesInput`<sup>Optional</sup> <a name="LinkAttributesInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkAttributesInput"></a>

```csharp
public IResolvable|RtbfabricInboundExternalLinkLinkAttributes LinkAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes">RtbfabricInboundExternalLinkLinkAttributes</a>

---

##### `LinkLogSettingsInput`<sup>Optional</sup> <a name="LinkLogSettingsInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.linkLogSettingsInput"></a>

```csharp
public IResolvable|RtbfabricInboundExternalLinkLinkLogSettings LinkLogSettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings">RtbfabricInboundExternalLinkLinkLogSettings</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.tagsInput"></a>

```csharp
public IResolvable|RtbfabricInboundExternalLinkTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags">RtbfabricInboundExternalLinkTags</a>[]

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLink.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RtbfabricInboundExternalLinkConfig <a name="RtbfabricInboundExternalLinkConfig" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricInboundExternalLinkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GatewayId,
    RtbfabricInboundExternalLinkLinkLogSettings LinkLogSettings,
    RtbfabricInboundExternalLinkLinkAttributes LinkAttributes = null,
    IResolvable|RtbfabricInboundExternalLinkTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.gatewayId">GatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#gateway_id RtbfabricInboundExternalLink#gateway_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.linkLogSettings">LinkLogSettings</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings">RtbfabricInboundExternalLinkLinkLogSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#link_log_settings RtbfabricInboundExternalLink#link_log_settings}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.linkAttributes">LinkAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes">RtbfabricInboundExternalLinkLinkAttributes</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#link_attributes RtbfabricInboundExternalLink#link_attributes}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags">RtbfabricInboundExternalLinkTags</a>[]</code> | Tags to assign to the Link. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.gatewayId"></a>

```csharp
public string GatewayId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#gateway_id RtbfabricInboundExternalLink#gateway_id}.

---

##### `LinkLogSettings`<sup>Required</sup> <a name="LinkLogSettings" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.linkLogSettings"></a>

```csharp
public RtbfabricInboundExternalLinkLinkLogSettings LinkLogSettings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings">RtbfabricInboundExternalLinkLinkLogSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#link_log_settings RtbfabricInboundExternalLink#link_log_settings}.

---

##### `LinkAttributes`<sup>Optional</sup> <a name="LinkAttributes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.linkAttributes"></a>

```csharp
public RtbfabricInboundExternalLinkLinkAttributes LinkAttributes { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes">RtbfabricInboundExternalLinkLinkAttributes</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#link_attributes RtbfabricInboundExternalLink#link_attributes}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkConfig.property.tags"></a>

```csharp
public IResolvable|RtbfabricInboundExternalLinkTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags">RtbfabricInboundExternalLinkTags</a>[]

Tags to assign to the Link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#tags RtbfabricInboundExternalLink#tags}

---

### RtbfabricInboundExternalLinkLinkAttributes <a name="RtbfabricInboundExternalLinkLinkAttributes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricInboundExternalLinkLinkAttributes {
    string CustomerProvidedId = null,
    IResolvable|RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking[] ResponderErrorMasking = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes.property.customerProvidedId">CustomerProvidedId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#customer_provided_id RtbfabricInboundExternalLink#customer_provided_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes.property.responderErrorMasking">ResponderErrorMasking</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#responder_error_masking RtbfabricInboundExternalLink#responder_error_masking}. |

---

##### `CustomerProvidedId`<sup>Optional</sup> <a name="CustomerProvidedId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes.property.customerProvidedId"></a>

```csharp
public string CustomerProvidedId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#customer_provided_id RtbfabricInboundExternalLink#customer_provided_id}.

---

##### `ResponderErrorMasking`<sup>Optional</sup> <a name="ResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes.property.responderErrorMasking"></a>

```csharp
public IResolvable|RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking[] ResponderErrorMasking { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#responder_error_masking RtbfabricInboundExternalLink#responder_error_masking}.

---

### RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking <a name="RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking {
    string Action = null,
    string HttpCode = null,
    string[] LoggingTypes = null,
    double ResponseLoggingPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.action">Action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#action RtbfabricInboundExternalLink#action}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.httpCode">HttpCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#http_code RtbfabricInboundExternalLink#http_code}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.loggingTypes">LoggingTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#logging_types RtbfabricInboundExternalLink#logging_types}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.responseLoggingPercentage">ResponseLoggingPercentage</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#response_logging_percentage RtbfabricInboundExternalLink#response_logging_percentage}. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#action RtbfabricInboundExternalLink#action}.

---

##### `HttpCode`<sup>Optional</sup> <a name="HttpCode" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.httpCode"></a>

```csharp
public string HttpCode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#http_code RtbfabricInboundExternalLink#http_code}.

---

##### `LoggingTypes`<sup>Optional</sup> <a name="LoggingTypes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.loggingTypes"></a>

```csharp
public string[] LoggingTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#logging_types RtbfabricInboundExternalLink#logging_types}.

---

##### `ResponseLoggingPercentage`<sup>Optional</sup> <a name="ResponseLoggingPercentage" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking.property.responseLoggingPercentage"></a>

```csharp
public double ResponseLoggingPercentage { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#response_logging_percentage RtbfabricInboundExternalLink#response_logging_percentage}.

---

### RtbfabricInboundExternalLinkLinkLogSettings <a name="RtbfabricInboundExternalLinkLinkLogSettings" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricInboundExternalLinkLinkLogSettings {
    RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs ApplicationLogs
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings.property.applicationLogs">ApplicationLogs</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#application_logs RtbfabricInboundExternalLink#application_logs}. |

---

##### `ApplicationLogs`<sup>Required</sup> <a name="ApplicationLogs" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings.property.applicationLogs"></a>

```csharp
public RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs ApplicationLogs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#application_logs RtbfabricInboundExternalLink#application_logs}.

---

### RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs <a name="RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs {
    RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling LinkApplicationLogSampling
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs.property.linkApplicationLogSampling">LinkApplicationLogSampling</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#link_application_log_sampling RtbfabricInboundExternalLink#link_application_log_sampling}. |

---

##### `LinkApplicationLogSampling`<sup>Required</sup> <a name="LinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs.property.linkApplicationLogSampling"></a>

```csharp
public RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling LinkApplicationLogSampling { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#link_application_log_sampling RtbfabricInboundExternalLink#link_application_log_sampling}.

---

### RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling <a name="RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling {
    double ErrorLog,
    double FilterLog
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.errorLog">ErrorLog</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#error_log RtbfabricInboundExternalLink#error_log}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.filterLog">FilterLog</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#filter_log RtbfabricInboundExternalLink#filter_log}. |

---

##### `ErrorLog`<sup>Required</sup> <a name="ErrorLog" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.errorLog"></a>

```csharp
public double ErrorLog { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#error_log RtbfabricInboundExternalLink#error_log}.

---

##### `FilterLog`<sup>Required</sup> <a name="FilterLog" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.property.filterLog"></a>

```csharp
public double FilterLog { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#filter_log RtbfabricInboundExternalLink#filter_log}.

---

### RtbfabricInboundExternalLinkTags <a name="RtbfabricInboundExternalLinkTags" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricInboundExternalLinkTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#key RtbfabricInboundExternalLink#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_inbound_external_link#value RtbfabricInboundExternalLink#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricInboundExternalLinkLinkAttributesOutputReference <a name="RtbfabricInboundExternalLinkLinkAttributesOutputReference" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricInboundExternalLinkLinkAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.putResponderErrorMasking">PutResponderErrorMasking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resetCustomerProvidedId">ResetCustomerProvidedId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resetResponderErrorMasking">ResetResponderErrorMasking</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResponderErrorMasking` <a name="PutResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.putResponderErrorMasking"></a>

```csharp
private void PutResponderErrorMasking(IResolvable|RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.putResponderErrorMasking.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a>[]

---

##### `ResetCustomerProvidedId` <a name="ResetCustomerProvidedId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resetCustomerProvidedId"></a>

```csharp
private void ResetCustomerProvidedId()
```

##### `ResetResponderErrorMasking` <a name="ResetResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.resetResponderErrorMasking"></a>

```csharp
private void ResetResponderErrorMasking()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.responderErrorMasking">ResponderErrorMasking</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.customerProvidedIdInput">CustomerProvidedIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.responderErrorMaskingInput">ResponderErrorMaskingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.customerProvidedId">CustomerProvidedId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes">RtbfabricInboundExternalLinkLinkAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResponderErrorMasking`<sup>Required</sup> <a name="ResponderErrorMasking" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.responderErrorMasking"></a>

```csharp
public RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList ResponderErrorMasking { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList</a>

---

##### `CustomerProvidedIdInput`<sup>Optional</sup> <a name="CustomerProvidedIdInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.customerProvidedIdInput"></a>

```csharp
public string CustomerProvidedIdInput { get; }
```

- *Type:* string

---

##### `ResponderErrorMaskingInput`<sup>Optional</sup> <a name="ResponderErrorMaskingInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.responderErrorMaskingInput"></a>

```csharp
public IResolvable|RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking[] ResponderErrorMaskingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a>[]

---

##### `CustomerProvidedId`<sup>Required</sup> <a name="CustomerProvidedId" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.customerProvidedId"></a>

```csharp
public string CustomerProvidedId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricInboundExternalLinkLinkAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributes">RtbfabricInboundExternalLinkLinkAttributes</a>

---


### RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList <a name="RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.get"></a>

```csharp
private RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingList.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a>[]

---


### RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference <a name="RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetHttpCode">ResetHttpCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetLoggingTypes">ResetLoggingTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetResponseLoggingPercentage">ResetResponseLoggingPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetHttpCode` <a name="ResetHttpCode" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetHttpCode"></a>

```csharp
private void ResetHttpCode()
```

##### `ResetLoggingTypes` <a name="ResetLoggingTypes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetLoggingTypes"></a>

```csharp
private void ResetLoggingTypes()
```

##### `ResetResponseLoggingPercentage` <a name="ResetResponseLoggingPercentage" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resetResponseLoggingPercentage"></a>

```csharp
private void ResetResponseLoggingPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCodeInput">HttpCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypesInput">LoggingTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentageInput">ResponseLoggingPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode">HttpCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes">LoggingTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage">ResponseLoggingPercentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `HttpCodeInput`<sup>Optional</sup> <a name="HttpCodeInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCodeInput"></a>

```csharp
public string HttpCodeInput { get; }
```

- *Type:* string

---

##### `LoggingTypesInput`<sup>Optional</sup> <a name="LoggingTypesInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypesInput"></a>

```csharp
public string[] LoggingTypesInput { get; }
```

- *Type:* string[]

---

##### `ResponseLoggingPercentageInput`<sup>Optional</sup> <a name="ResponseLoggingPercentageInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentageInput"></a>

```csharp
public double ResponseLoggingPercentageInput { get; }
```

- *Type:* double

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `HttpCode`<sup>Required</sup> <a name="HttpCode" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode"></a>

```csharp
public string HttpCode { get; }
```

- *Type:* string

---

##### `LoggingTypes`<sup>Required</sup> <a name="LoggingTypes" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes"></a>

```csharp
public string[] LoggingTypes { get; }
```

- *Type:* string[]

---

##### `ResponseLoggingPercentage`<sup>Required</sup> <a name="ResponseLoggingPercentage" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage"></a>

```csharp
public double ResponseLoggingPercentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking">RtbfabricInboundExternalLinkLinkAttributesResponderErrorMasking</a>

---


### RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference <a name="RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLogInput">ErrorLogInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLogInput">FilterLogInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog">ErrorLog</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog">FilterLog</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ErrorLogInput`<sup>Optional</sup> <a name="ErrorLogInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLogInput"></a>

```csharp
public double ErrorLogInput { get; }
```

- *Type:* double

---

##### `FilterLogInput`<sup>Optional</sup> <a name="FilterLogInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLogInput"></a>

```csharp
public double FilterLogInput { get; }
```

- *Type:* double

---

##### `ErrorLog`<sup>Required</sup> <a name="ErrorLog" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog"></a>

```csharp
public double ErrorLog { get; }
```

- *Type:* double

---

##### `FilterLog`<sup>Required</sup> <a name="FilterLog" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog"></a>

```csharp
public double FilterLog { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---


### RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference <a name="RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling">PutLinkApplicationLogSampling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLinkApplicationLogSampling` <a name="PutLinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling"></a>

```csharp
private void PutLinkApplicationLogSampling(RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.putLinkApplicationLogSampling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling">LinkApplicationLogSampling</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSamplingInput">LinkApplicationLogSamplingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LinkApplicationLogSampling`<sup>Required</sup> <a name="LinkApplicationLogSampling" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling"></a>

```csharp
public RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference LinkApplicationLogSampling { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a>

---

##### `LinkApplicationLogSamplingInput`<sup>Optional</sup> <a name="LinkApplicationLogSamplingInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSamplingInput"></a>

```csharp
public IResolvable|RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling LinkApplicationLogSamplingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a>

---


### RtbfabricInboundExternalLinkLinkLogSettingsOutputReference <a name="RtbfabricInboundExternalLinkLinkLogSettingsOutputReference" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricInboundExternalLinkLinkLogSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.putApplicationLogs">PutApplicationLogs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApplicationLogs` <a name="PutApplicationLogs" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.putApplicationLogs"></a>

```csharp
private void PutApplicationLogs(RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.putApplicationLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogs">ApplicationLogs</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogsInput">ApplicationLogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings">RtbfabricInboundExternalLinkLinkLogSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationLogs`<sup>Required</sup> <a name="ApplicationLogs" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogs"></a>

```csharp
public RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference ApplicationLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogsOutputReference</a>

---

##### `ApplicationLogsInput`<sup>Optional</sup> <a name="ApplicationLogsInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogsInput"></a>

```csharp
public IResolvable|RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs ApplicationLogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs">RtbfabricInboundExternalLinkLinkLogSettingsApplicationLogs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricInboundExternalLinkLinkLogSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkLinkLogSettings">RtbfabricInboundExternalLinkLinkLogSettings</a>

---


### RtbfabricInboundExternalLinkTagsList <a name="RtbfabricInboundExternalLinkTagsList" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricInboundExternalLinkTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.get"></a>

```csharp
private RtbfabricInboundExternalLinkTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags">RtbfabricInboundExternalLinkTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsList.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricInboundExternalLinkTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags">RtbfabricInboundExternalLinkTags</a>[]

---


### RtbfabricInboundExternalLinkTagsOutputReference <a name="RtbfabricInboundExternalLinkTagsOutputReference" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new RtbfabricInboundExternalLinkTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags">RtbfabricInboundExternalLinkTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|RtbfabricInboundExternalLinkTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.rtbfabricInboundExternalLink.RtbfabricInboundExternalLinkTags">RtbfabricInboundExternalLinkTags</a>

---



