# `networkmanagerVpcAttachment` Submodule <a name="`networkmanagerVpcAttachment` Submodule" id="@cdktn/provider-awscc.networkmanagerVpcAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerVpcAttachment <a name="NetworkmanagerVpcAttachment" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment awscc_networkmanager_vpc_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerVpcAttachment(Construct Scope, string Id, NetworkmanagerVpcAttachmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig">NetworkmanagerVpcAttachmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig">NetworkmanagerVpcAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedNetworkFunctionGroupChange">PutProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedSegmentChange">PutProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetProposedNetworkFunctionGroupChange">ResetProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetProposedSegmentChange">ResetProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetRoutingPolicyLabel">ResetRoutingPolicyLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptions` <a name="PutOptions" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions"></a>

```csharp
private void PutOptions(NetworkmanagerVpcAttachmentOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

---

##### `PutProposedNetworkFunctionGroupChange` <a name="PutProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedNetworkFunctionGroupChange"></a>

```csharp
private void PutProposedNetworkFunctionGroupChange(NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedNetworkFunctionGroupChange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a>

---

##### `PutProposedSegmentChange` <a name="PutProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedSegmentChange"></a>

```csharp
private void PutProposedSegmentChange(NetworkmanagerVpcAttachmentProposedSegmentChange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putProposedSegmentChange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTags"></a>

```csharp
private void PutTags(IResolvable|NetworkmanagerVpcAttachmentTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>[]

---

##### `ResetOptions` <a name="ResetOptions" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetProposedNetworkFunctionGroupChange` <a name="ResetProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetProposedNetworkFunctionGroupChange"></a>

```csharp
private void ResetProposedNetworkFunctionGroupChange()
```

##### `ResetProposedSegmentChange` <a name="ResetProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetProposedSegmentChange"></a>

```csharp
private void ResetProposedSegmentChange()
```

##### `ResetRoutingPolicyLabel` <a name="ResetRoutingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetRoutingPolicyLabel"></a>

```csharp
private void ResetRoutingPolicyLabel()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkmanagerVpcAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkmanagerVpcAttachment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkmanagerVpcAttachment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkmanagerVpcAttachment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NetworkmanagerVpcAttachment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NetworkmanagerVpcAttachment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkmanagerVpcAttachment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkmanagerVpcAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NetworkmanagerVpcAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentId">AttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentType">AttachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.edgeLocation">EdgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.lastModificationErrors">LastModificationErrors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.networkFunctionGroupName">NetworkFunctionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference">NetworkmanagerVpcAttachmentOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.ownerAccountId">OwnerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedNetworkFunctionGroupChange">ProposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedSegmentChange">ProposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference">NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.resourceArn">ResourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.segmentName">SegmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList">NetworkmanagerVpcAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkIdInput">CoreNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.optionsInput">OptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedNetworkFunctionGroupChangeInput">ProposedNetworkFunctionGroupChangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedSegmentChangeInput">ProposedSegmentChangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.routingPolicyLabelInput">RoutingPolicyLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArnsInput">SubnetArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArnInput">VpcArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkId">CoreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.routingPolicyLabel">RoutingPolicyLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArns">SubnetArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArn">VpcArn</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentId"></a>

```csharp
public string AttachmentId { get; }
```

- *Type:* string

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentPolicyRuleNumber"></a>

```csharp
public double AttachmentPolicyRuleNumber { get; }
```

- *Type:* double

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.attachmentType"></a>

```csharp
public string AttachmentType { get; }
```

- *Type:* string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkArn"></a>

```csharp
public string CoreNetworkArn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `EdgeLocation`<sup>Required</sup> <a name="EdgeLocation" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.edgeLocation"></a>

```csharp
public string EdgeLocation { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModificationErrors`<sup>Required</sup> <a name="LastModificationErrors" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.lastModificationErrors"></a>

```csharp
public string[] LastModificationErrors { get; }
```

- *Type:* string[]

---

##### `NetworkFunctionGroupName`<sup>Required</sup> <a name="NetworkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.networkFunctionGroupName"></a>

```csharp
public string NetworkFunctionGroupName { get; }
```

- *Type:* string

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.options"></a>

```csharp
public NetworkmanagerVpcAttachmentOptionsOutputReference Options { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference">NetworkmanagerVpcAttachmentOptionsOutputReference</a>

---

##### `OwnerAccountId`<sup>Required</sup> <a name="OwnerAccountId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.ownerAccountId"></a>

```csharp
public string OwnerAccountId { get; }
```

- *Type:* string

---

##### `ProposedNetworkFunctionGroupChange`<sup>Required</sup> <a name="ProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedNetworkFunctionGroupChange"></a>

```csharp
public NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference ProposedNetworkFunctionGroupChange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference</a>

---

##### `ProposedSegmentChange`<sup>Required</sup> <a name="ProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedSegmentChange"></a>

```csharp
public NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference ProposedSegmentChange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference">NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference</a>

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.resourceArn"></a>

```csharp
public string ResourceArn { get; }
```

- *Type:* string

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.segmentName"></a>

```csharp
public string SegmentName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tags"></a>

```csharp
public NetworkmanagerVpcAttachmentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList">NetworkmanagerVpcAttachmentTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `CoreNetworkIdInput`<sup>Optional</sup> <a name="CoreNetworkIdInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkIdInput"></a>

```csharp
public string CoreNetworkIdInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.optionsInput"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentOptions OptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

---

##### `ProposedNetworkFunctionGroupChangeInput`<sup>Optional</sup> <a name="ProposedNetworkFunctionGroupChangeInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedNetworkFunctionGroupChangeInput"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange ProposedNetworkFunctionGroupChangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a>

---

##### `ProposedSegmentChangeInput`<sup>Optional</sup> <a name="ProposedSegmentChangeInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.proposedSegmentChangeInput"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentProposedSegmentChange ProposedSegmentChangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a>

---

##### `RoutingPolicyLabelInput`<sup>Optional</sup> <a name="RoutingPolicyLabelInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.routingPolicyLabelInput"></a>

```csharp
public string RoutingPolicyLabelInput { get; }
```

- *Type:* string

---

##### `SubnetArnsInput`<sup>Optional</sup> <a name="SubnetArnsInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArnsInput"></a>

```csharp
public string[] SubnetArnsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tagsInput"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>[]

---

##### `VpcArnInput`<sup>Optional</sup> <a name="VpcArnInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArnInput"></a>

```csharp
public string VpcArnInput { get; }
```

- *Type:* string

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.coreNetworkId"></a>

```csharp
public string CoreNetworkId { get; }
```

- *Type:* string

---

##### `RoutingPolicyLabel`<sup>Required</sup> <a name="RoutingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.routingPolicyLabel"></a>

```csharp
public string RoutingPolicyLabel { get; }
```

- *Type:* string

---

##### `SubnetArns`<sup>Required</sup> <a name="SubnetArns" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.subnetArns"></a>

```csharp
public string[] SubnetArns { get; }
```

- *Type:* string[]

---

##### `VpcArn`<sup>Required</sup> <a name="VpcArn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.vpcArn"></a>

```csharp
public string VpcArn { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerVpcAttachmentConfig <a name="NetworkmanagerVpcAttachmentConfig" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerVpcAttachmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CoreNetworkId,
    string[] SubnetArns,
    string VpcArn,
    NetworkmanagerVpcAttachmentOptions Options = null,
    NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange ProposedNetworkFunctionGroupChange = null,
    NetworkmanagerVpcAttachmentProposedSegmentChange ProposedSegmentChange = null,
    string RoutingPolicyLabel = null,
    IResolvable|NetworkmanagerVpcAttachmentTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.coreNetworkId">CoreNetworkId</a></code> | <code>string</code> | The ID of a core network for the VPC attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.subnetArns">SubnetArns</a></code> | <code>string[]</code> | Subnet Arn list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.vpcArn">VpcArn</a></code> | <code>string</code> | The ARN of the VPC. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.options">Options</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | Vpc options of the attachment. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.proposedNetworkFunctionGroupChange">ProposedNetworkFunctionGroupChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a></code> | The attachment to move from one network function group to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.proposedSegmentChange">ProposedSegmentChange</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a></code> | The attachment to move from one segment to another. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.routingPolicyLabel">RoutingPolicyLabel</a></code> | <code>string</code> | Routing policy label. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>[]</code> | Tags for the attachment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CoreNetworkId`<sup>Required</sup> <a name="CoreNetworkId" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.coreNetworkId"></a>

```csharp
public string CoreNetworkId { get; set; }
```

- *Type:* string

The ID of a core network for the VPC attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#core_network_id NetworkmanagerVpcAttachment#core_network_id}

---

##### `SubnetArns`<sup>Required</sup> <a name="SubnetArns" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.subnetArns"></a>

```csharp
public string[] SubnetArns { get; set; }
```

- *Type:* string[]

Subnet Arn list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#subnet_arns NetworkmanagerVpcAttachment#subnet_arns}

---

##### `VpcArn`<sup>Required</sup> <a name="VpcArn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.vpcArn"></a>

```csharp
public string VpcArn { get; set; }
```

- *Type:* string

The ARN of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#vpc_arn NetworkmanagerVpcAttachment#vpc_arn}

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.options"></a>

```csharp
public NetworkmanagerVpcAttachmentOptions Options { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

Vpc options of the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#options NetworkmanagerVpcAttachment#options}

---

##### `ProposedNetworkFunctionGroupChange`<sup>Optional</sup> <a name="ProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.proposedNetworkFunctionGroupChange"></a>

```csharp
public NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange ProposedNetworkFunctionGroupChange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a>

The attachment to move from one network function group to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#proposed_network_function_group_change NetworkmanagerVpcAttachment#proposed_network_function_group_change}

---

##### `ProposedSegmentChange`<sup>Optional</sup> <a name="ProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.proposedSegmentChange"></a>

```csharp
public NetworkmanagerVpcAttachmentProposedSegmentChange ProposedSegmentChange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a>

The attachment to move from one segment to another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#proposed_segment_change NetworkmanagerVpcAttachment#proposed_segment_change}

---

##### `RoutingPolicyLabel`<sup>Optional</sup> <a name="RoutingPolicyLabel" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.routingPolicyLabel"></a>

```csharp
public string RoutingPolicyLabel { get; set; }
```

- *Type:* string

Routing policy label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#routing_policy_label NetworkmanagerVpcAttachment#routing_policy_label}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentConfig.property.tags"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>[]

Tags for the attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}

---

### NetworkmanagerVpcAttachmentOptions <a name="NetworkmanagerVpcAttachmentOptions" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerVpcAttachmentOptions {
    bool|IResolvable ApplianceModeSupport = null,
    bool|IResolvable DnsSupport = null,
    bool|IResolvable Ipv6Support = null,
    bool|IResolvable SecurityGroupReferencingSupport = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.applianceModeSupport">ApplianceModeSupport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to enable ApplianceModeSupport Support for Vpc Attachment. Valid Values: true \| false. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.dnsSupport">DnsSupport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to enable private DNS Support for Vpc Attachment. Valid Values: true \| false. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.ipv6Support">Ipv6Support</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable \| disable. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.securityGroupReferencingSupport">SecurityGroupReferencingSupport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to enable Security Group Referencing Support for Vpc Attachment. Valid Values: true \| false. |

---

##### `ApplianceModeSupport`<sup>Optional</sup> <a name="ApplianceModeSupport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.applianceModeSupport"></a>

```csharp
public bool|IResolvable ApplianceModeSupport { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to enable ApplianceModeSupport Support for Vpc Attachment. Valid Values: true | false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#appliance_mode_support NetworkmanagerVpcAttachment#appliance_mode_support}

---

##### `DnsSupport`<sup>Optional</sup> <a name="DnsSupport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.dnsSupport"></a>

```csharp
public bool|IResolvable DnsSupport { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to enable private DNS Support for Vpc Attachment. Valid Values: true | false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#dns_support NetworkmanagerVpcAttachment#dns_support}

---

##### `Ipv6Support`<sup>Optional</sup> <a name="Ipv6Support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.ipv6Support"></a>

```csharp
public bool|IResolvable Ipv6Support { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#ipv_6_support NetworkmanagerVpcAttachment#ipv_6_support}

---

##### `SecurityGroupReferencingSupport`<sup>Optional</sup> <a name="SecurityGroupReferencingSupport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions.property.securityGroupReferencingSupport"></a>

```csharp
public bool|IResolvable SecurityGroupReferencingSupport { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to enable Security Group Referencing Support for Vpc Attachment. Valid Values: true | false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#security_group_referencing_support NetworkmanagerVpcAttachment#security_group_referencing_support}

---

### NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange <a name="NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange {
    double AttachmentPolicyRuleNumber = null,
    string NetworkFunctionGroupName = null,
    IResolvable|NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>double</code> | The rule number in the policy document that applies to this change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.property.networkFunctionGroupName">NetworkFunctionGroupName</a></code> | <code>string</code> | The name of the network function group to change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>[]</code> | The key-value tags that changed for the network function group. |

---

##### `AttachmentPolicyRuleNumber`<sup>Optional</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.property.attachmentPolicyRuleNumber"></a>

```csharp
public double AttachmentPolicyRuleNumber { get; set; }
```

- *Type:* double

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#attachment_policy_rule_number NetworkmanagerVpcAttachment#attachment_policy_rule_number}

---

##### `NetworkFunctionGroupName`<sup>Optional</sup> <a name="NetworkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.property.networkFunctionGroupName"></a>

```csharp
public string NetworkFunctionGroupName { get; set; }
```

- *Type:* string

The name of the network function group to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#network_function_group_name NetworkmanagerVpcAttachment#network_function_group_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange.property.tags"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>[]

The key-value tags that changed for the network function group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}

---

### NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags <a name="NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#key NetworkmanagerVpcAttachment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#value NetworkmanagerVpcAttachment#value}

---

### NetworkmanagerVpcAttachmentProposedSegmentChange <a name="NetworkmanagerVpcAttachmentProposedSegmentChange" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerVpcAttachmentProposedSegmentChange {
    double AttachmentPolicyRuleNumber = null,
    string SegmentName = null,
    IResolvable|NetworkmanagerVpcAttachmentProposedSegmentChangeTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>double</code> | The rule number in the policy document that applies to this change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.property.segmentName">SegmentName</a></code> | <code>string</code> | The name of the segment to change. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>[]</code> | The key-value tags that changed for the segment. |

---

##### `AttachmentPolicyRuleNumber`<sup>Optional</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.property.attachmentPolicyRuleNumber"></a>

```csharp
public double AttachmentPolicyRuleNumber { get; set; }
```

- *Type:* double

The rule number in the policy document that applies to this change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#attachment_policy_rule_number NetworkmanagerVpcAttachment#attachment_policy_rule_number}

---

##### `SegmentName`<sup>Optional</sup> <a name="SegmentName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.property.segmentName"></a>

```csharp
public string SegmentName { get; set; }
```

- *Type:* string

The name of the segment to change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#segment_name NetworkmanagerVpcAttachment#segment_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange.property.tags"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentProposedSegmentChangeTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>[]

The key-value tags that changed for the segment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#tags NetworkmanagerVpcAttachment#tags}

---

### NetworkmanagerVpcAttachmentProposedSegmentChangeTags <a name="NetworkmanagerVpcAttachmentProposedSegmentChangeTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerVpcAttachmentProposedSegmentChangeTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#key NetworkmanagerVpcAttachment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#value NetworkmanagerVpcAttachment#value}

---

### NetworkmanagerVpcAttachmentTags <a name="NetworkmanagerVpcAttachmentTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerVpcAttachmentTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#key NetworkmanagerVpcAttachment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/networkmanager_vpc_attachment#value NetworkmanagerVpcAttachment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerVpcAttachmentOptionsOutputReference <a name="NetworkmanagerVpcAttachmentOptionsOutputReference" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerVpcAttachmentOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetApplianceModeSupport">ResetApplianceModeSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetDnsSupport">ResetDnsSupport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetIpv6Support">ResetIpv6Support</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetSecurityGroupReferencingSupport">ResetSecurityGroupReferencingSupport</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplianceModeSupport` <a name="ResetApplianceModeSupport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetApplianceModeSupport"></a>

```csharp
private void ResetApplianceModeSupport()
```

##### `ResetDnsSupport` <a name="ResetDnsSupport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetDnsSupport"></a>

```csharp
private void ResetDnsSupport()
```

##### `ResetIpv6Support` <a name="ResetIpv6Support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetIpv6Support"></a>

```csharp
private void ResetIpv6Support()
```

##### `ResetSecurityGroupReferencingSupport` <a name="ResetSecurityGroupReferencingSupport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.resetSecurityGroupReferencingSupport"></a>

```csharp
private void ResetSecurityGroupReferencingSupport()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupportInput">ApplianceModeSupportInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.dnsSupportInput">DnsSupportInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6SupportInput">Ipv6SupportInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupportInput">SecurityGroupReferencingSupportInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupport">ApplianceModeSupport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.dnsSupport">DnsSupport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6Support">Ipv6Support</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupport">SecurityGroupReferencingSupport</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplianceModeSupportInput`<sup>Optional</sup> <a name="ApplianceModeSupportInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupportInput"></a>

```csharp
public bool|IResolvable ApplianceModeSupportInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DnsSupportInput`<sup>Optional</sup> <a name="DnsSupportInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.dnsSupportInput"></a>

```csharp
public bool|IResolvable DnsSupportInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Ipv6SupportInput`<sup>Optional</sup> <a name="Ipv6SupportInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6SupportInput"></a>

```csharp
public bool|IResolvable Ipv6SupportInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecurityGroupReferencingSupportInput`<sup>Optional</sup> <a name="SecurityGroupReferencingSupportInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupportInput"></a>

```csharp
public bool|IResolvable SecurityGroupReferencingSupportInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ApplianceModeSupport`<sup>Required</sup> <a name="ApplianceModeSupport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.applianceModeSupport"></a>

```csharp
public bool|IResolvable ApplianceModeSupport { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DnsSupport`<sup>Required</sup> <a name="DnsSupport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.dnsSupport"></a>

```csharp
public bool|IResolvable DnsSupport { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Ipv6Support`<sup>Required</sup> <a name="Ipv6Support" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.ipv6Support"></a>

```csharp
public bool|IResolvable Ipv6Support { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SecurityGroupReferencingSupport`<sup>Required</sup> <a name="SecurityGroupReferencingSupport" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.securityGroupReferencingSupport"></a>

```csharp
public bool|IResolvable SecurityGroupReferencingSupport { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentOptions">NetworkmanagerVpcAttachmentOptions</a>

---


### NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference <a name="NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetAttachmentPolicyRuleNumber">ResetAttachmentPolicyRuleNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetNetworkFunctionGroupName">ResetNetworkFunctionGroupName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags"></a>

```csharp
private void PutTags(IResolvable|NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>[]

---

##### `ResetAttachmentPolicyRuleNumber` <a name="ResetAttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetAttachmentPolicyRuleNumber"></a>

```csharp
private void ResetAttachmentPolicyRuleNumber()
```

##### `ResetNetworkFunctionGroupName` <a name="ResetNetworkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetNetworkFunctionGroupName"></a>

```csharp
private void ResetNetworkFunctionGroupName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumberInput">AttachmentPolicyRuleNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupNameInput">NetworkFunctionGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName">NetworkFunctionGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags"></a>

```csharp
public NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList</a>

---

##### `AttachmentPolicyRuleNumberInput`<sup>Optional</sup> <a name="AttachmentPolicyRuleNumberInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumberInput"></a>

```csharp
public double AttachmentPolicyRuleNumberInput { get; }
```

- *Type:* double

---

##### `NetworkFunctionGroupNameInput`<sup>Optional</sup> <a name="NetworkFunctionGroupNameInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupNameInput"></a>

```csharp
public string NetworkFunctionGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>[]

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```csharp
public double AttachmentPolicyRuleNumber { get; }
```

- *Type:* double

---

##### `NetworkFunctionGroupName`<sup>Required</sup> <a name="NetworkFunctionGroupName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName"></a>

```csharp
public string NetworkFunctionGroupName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChange</a>

---


### NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList <a name="NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.get"></a>

```csharp
private NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>[]

---


### NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference <a name="NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags">NetworkmanagerVpcAttachmentProposedNetworkFunctionGroupChangeTags</a>

---


### NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference <a name="NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resetAttachmentPolicyRuleNumber">ResetAttachmentPolicyRuleNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resetSegmentName">ResetSegmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.putTags"></a>

```csharp
private void PutTags(IResolvable|NetworkmanagerVpcAttachmentProposedSegmentChangeTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>[]

---

##### `ResetAttachmentPolicyRuleNumber` <a name="ResetAttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resetAttachmentPolicyRuleNumber"></a>

```csharp
private void ResetAttachmentPolicyRuleNumber()
```

##### `ResetSegmentName` <a name="ResetSegmentName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resetSegmentName"></a>

```csharp
private void ResetSegmentName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList">NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumberInput">AttachmentPolicyRuleNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.segmentNameInput">SegmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber">AttachmentPolicyRuleNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.segmentName">SegmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.tags"></a>

```csharp
public NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList">NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList</a>

---

##### `AttachmentPolicyRuleNumberInput`<sup>Optional</sup> <a name="AttachmentPolicyRuleNumberInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumberInput"></a>

```csharp
public double AttachmentPolicyRuleNumberInput { get; }
```

- *Type:* double

---

##### `SegmentNameInput`<sup>Optional</sup> <a name="SegmentNameInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.segmentNameInput"></a>

```csharp
public string SegmentNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.tagsInput"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentProposedSegmentChangeTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>[]

---

##### `AttachmentPolicyRuleNumber`<sup>Required</sup> <a name="AttachmentPolicyRuleNumber" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```csharp
public double AttachmentPolicyRuleNumber { get; }
```

- *Type:* double

---

##### `SegmentName`<sup>Required</sup> <a name="SegmentName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.segmentName"></a>

```csharp
public string SegmentName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentProposedSegmentChange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChange">NetworkmanagerVpcAttachmentProposedSegmentChange</a>

---


### NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList <a name="NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.get"></a>

```csharp
private NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentProposedSegmentChangeTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>[]

---


### NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference <a name="NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentProposedSegmentChangeTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentProposedSegmentChangeTags">NetworkmanagerVpcAttachmentProposedSegmentChangeTags</a>

---


### NetworkmanagerVpcAttachmentTagsList <a name="NetworkmanagerVpcAttachmentTagsList" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerVpcAttachmentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.get"></a>

```csharp
private NetworkmanagerVpcAttachmentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsList.property.internalValue"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>[]

---


### NetworkmanagerVpcAttachmentTagsOutputReference <a name="NetworkmanagerVpcAttachmentTagsOutputReference" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NetworkmanagerVpcAttachmentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NetworkmanagerVpcAttachmentTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.networkmanagerVpcAttachment.NetworkmanagerVpcAttachmentTags">NetworkmanagerVpcAttachmentTags</a>

---



