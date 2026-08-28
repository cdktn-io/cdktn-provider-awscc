# `directconnectPrivateVirtualInterface` Submodule <a name="`directconnectPrivateVirtualInterface` Submodule" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectPrivateVirtualInterface <a name="DirectconnectPrivateVirtualInterface" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface awscc_directconnect_private_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectPrivateVirtualInterface(Construct Scope, string Id, DirectconnectPrivateVirtualInterfaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig">DirectconnectPrivateVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig">DirectconnectPrivateVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putBgpPeers">PutBgpPeers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetAllocatePrivateVirtualInterfaceRoleArn">ResetAllocatePrivateVirtualInterfaceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetDirectConnectGatewayId">ResetDirectConnectGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetEnableSiteLink">ResetEnableSiteLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetRateLimit">ResetRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetVirtualGatewayId">ResetVirtualGatewayId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBgpPeers` <a name="PutBgpPeers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putBgpPeers"></a>

```csharp
private void PutBgpPeers(IResolvable|DirectconnectPrivateVirtualInterfaceBgpPeers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putBgpPeers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putTags"></a>

```csharp
private void PutTags(IResolvable|DirectconnectPrivateVirtualInterfaceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>[]

---

##### `ResetAllocatePrivateVirtualInterfaceRoleArn` <a name="ResetAllocatePrivateVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetAllocatePrivateVirtualInterfaceRoleArn"></a>

```csharp
private void ResetAllocatePrivateVirtualInterfaceRoleArn()
```

##### `ResetDirectConnectGatewayId` <a name="ResetDirectConnectGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetDirectConnectGatewayId"></a>

```csharp
private void ResetDirectConnectGatewayId()
```

##### `ResetEnableSiteLink` <a name="ResetEnableSiteLink" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetEnableSiteLink"></a>

```csharp
private void ResetEnableSiteLink()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetMtu"></a>

```csharp
private void ResetMtu()
```

##### `ResetRateLimit` <a name="ResetRateLimit" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetRateLimit"></a>

```csharp
private void ResetRateLimit()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVirtualGatewayId` <a name="ResetVirtualGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.resetVirtualGatewayId"></a>

```csharp
private void ResetVirtualGatewayId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectPrivateVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectPrivateVirtualInterface.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectPrivateVirtualInterface.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectPrivateVirtualInterface.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectPrivateVirtualInterface.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DirectconnectPrivateVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectconnectPrivateVirtualInterface to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectconnectPrivateVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectPrivateVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeers">BgpPeers</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList">DirectconnectPrivateVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList">DirectconnectPrivateVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceArn">VirtualInterfaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceId">VirtualInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArnInput">AllocatePrivateVirtualInterfaceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeersInput">BgpPeersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayIdInput">DirectConnectGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLinkInput">EnableSiteLinkInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtuInput">MtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.rateLimitInput">RateLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayIdInput">VirtualGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceNameInput">VirtualInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlanInput">VlanInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArn">AllocatePrivateVirtualInterfaceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayId">DirectConnectGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLink">EnableSiteLink</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.rateLimit">RateLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayId">VirtualGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceName">VirtualInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlan">Vlan</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BgpPeers`<sup>Required</sup> <a name="BgpPeers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeers"></a>

```csharp
public DirectconnectPrivateVirtualInterfaceBgpPeersList BgpPeers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList">DirectconnectPrivateVirtualInterfaceBgpPeersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tags"></a>

```csharp
public DirectconnectPrivateVirtualInterfaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList">DirectconnectPrivateVirtualInterfaceTagsList</a>

---

##### `VirtualInterfaceArn`<sup>Required</sup> <a name="VirtualInterfaceArn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceArn"></a>

```csharp
public string VirtualInterfaceArn { get; }
```

- *Type:* string

---

##### `VirtualInterfaceId`<sup>Required</sup> <a name="VirtualInterfaceId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceId"></a>

```csharp
public string VirtualInterfaceId { get; }
```

- *Type:* string

---

##### `AllocatePrivateVirtualInterfaceRoleArnInput`<sup>Optional</sup> <a name="AllocatePrivateVirtualInterfaceRoleArnInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArnInput"></a>

```csharp
public string AllocatePrivateVirtualInterfaceRoleArnInput { get; }
```

- *Type:* string

---

##### `BgpPeersInput`<sup>Optional</sup> <a name="BgpPeersInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.bgpPeersInput"></a>

```csharp
public IResolvable|DirectconnectPrivateVirtualInterfaceBgpPeers[] BgpPeersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>[]

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `DirectConnectGatewayIdInput`<sup>Optional</sup> <a name="DirectConnectGatewayIdInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayIdInput"></a>

```csharp
public string DirectConnectGatewayIdInput { get; }
```

- *Type:* string

---

##### `EnableSiteLinkInput`<sup>Optional</sup> <a name="EnableSiteLinkInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLinkInput"></a>

```csharp
public bool|IResolvable EnableSiteLinkInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtuInput"></a>

```csharp
public double MtuInput { get; }
```

- *Type:* double

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.rateLimitInput"></a>

```csharp
public string RateLimitInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tagsInput"></a>

```csharp
public IResolvable|DirectconnectPrivateVirtualInterfaceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>[]

---

##### `VirtualGatewayIdInput`<sup>Optional</sup> <a name="VirtualGatewayIdInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayIdInput"></a>

```csharp
public string VirtualGatewayIdInput { get; }
```

- *Type:* string

---

##### `VirtualInterfaceNameInput`<sup>Optional</sup> <a name="VirtualInterfaceNameInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceNameInput"></a>

```csharp
public string VirtualInterfaceNameInput { get; }
```

- *Type:* string

---

##### `VlanInput`<sup>Optional</sup> <a name="VlanInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlanInput"></a>

```csharp
public double VlanInput { get; }
```

- *Type:* double

---

##### `AllocatePrivateVirtualInterfaceRoleArn`<sup>Required</sup> <a name="AllocatePrivateVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.allocatePrivateVirtualInterfaceRoleArn"></a>

```csharp
public string AllocatePrivateVirtualInterfaceRoleArn { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `DirectConnectGatewayId`<sup>Required</sup> <a name="DirectConnectGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.directConnectGatewayId"></a>

```csharp
public string DirectConnectGatewayId { get; }
```

- *Type:* string

---

##### `EnableSiteLink`<sup>Required</sup> <a name="EnableSiteLink" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.enableSiteLink"></a>

```csharp
public bool|IResolvable EnableSiteLink { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.rateLimit"></a>

```csharp
public string RateLimit { get; }
```

- *Type:* string

---

##### `VirtualGatewayId`<sup>Required</sup> <a name="VirtualGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualGatewayId"></a>

```csharp
public string VirtualGatewayId { get; }
```

- *Type:* string

---

##### `VirtualInterfaceName`<sup>Required</sup> <a name="VirtualInterfaceName" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.virtualInterfaceName"></a>

```csharp
public string VirtualInterfaceName { get; }
```

- *Type:* string

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.vlan"></a>

```csharp
public double Vlan { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterface.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectPrivateVirtualInterfaceBgpPeers <a name="DirectconnectPrivateVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectPrivateVirtualInterfaceBgpPeers {
    string AddressFamily,
    string Asn,
    string AmazonAddress = null,
    string AuthKey = null,
    string BgpPeerId = null,
    string CustomerAddress = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.addressFamily">AddressFamily</a></code> | <code>string</code> | The address family for the BGP peer. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.asn">Asn</a></code> | <code>string</code> | The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.amazonAddress">AmazonAddress</a></code> | <code>string</code> | The IP address assigned to the Amazon interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.authKey">AuthKey</a></code> | <code>string</code> | The authentication key for BGP configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.bgpPeerId">BgpPeerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#bgp_peer_id DirectconnectPrivateVirtualInterface#bgp_peer_id}. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.customerAddress">CustomerAddress</a></code> | <code>string</code> | The IP address assigned to the customer interface. |

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.addressFamily"></a>

```csharp
public string AddressFamily { get; set; }
```

- *Type:* string

The address family for the BGP peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#address_family DirectconnectPrivateVirtualInterface#address_family}

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.asn"></a>

```csharp
public string Asn { get; set; }
```

- *Type:* string

The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#asn DirectconnectPrivateVirtualInterface#asn}

---

##### `AmazonAddress`<sup>Optional</sup> <a name="AmazonAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.amazonAddress"></a>

```csharp
public string AmazonAddress { get; set; }
```

- *Type:* string

The IP address assigned to the Amazon interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#amazon_address DirectconnectPrivateVirtualInterface#amazon_address}

---

##### `AuthKey`<sup>Optional</sup> <a name="AuthKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.authKey"></a>

```csharp
public string AuthKey { get; set; }
```

- *Type:* string

The authentication key for BGP configuration.

This string has a minimum length of 6 characters and and a maximum length of 80 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#auth_key DirectconnectPrivateVirtualInterface#auth_key}

---

##### `BgpPeerId`<sup>Optional</sup> <a name="BgpPeerId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.bgpPeerId"></a>

```csharp
public string BgpPeerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#bgp_peer_id DirectconnectPrivateVirtualInterface#bgp_peer_id}.

---

##### `CustomerAddress`<sup>Optional</sup> <a name="CustomerAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers.property.customerAddress"></a>

```csharp
public string CustomerAddress { get; set; }
```

- *Type:* string

The IP address assigned to the customer interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#customer_address DirectconnectPrivateVirtualInterface#customer_address}

---

### DirectconnectPrivateVirtualInterfaceConfig <a name="DirectconnectPrivateVirtualInterfaceConfig" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectPrivateVirtualInterfaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DirectconnectPrivateVirtualInterfaceBgpPeers[] BgpPeers,
    string ConnectionId,
    string VirtualInterfaceName,
    double Vlan,
    string AllocatePrivateVirtualInterfaceRoleArn = null,
    string DirectConnectGatewayId = null,
    bool|IResolvable EnableSiteLink = null,
    double Mtu = null,
    string RateLimit = null,
    IResolvable|DirectconnectPrivateVirtualInterfaceTags[] Tags = null,
    string VirtualGatewayId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.bgpPeers">BgpPeers</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>[]</code> | The BGP peers configured on this virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connectionId">ConnectionId</a></code> | <code>string</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualInterfaceName">VirtualInterfaceName</a></code> | <code>string</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.vlan">Vlan</a></code> | <code>double</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.allocatePrivateVirtualInterfaceRoleArn">AllocatePrivateVirtualInterfaceRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the role to allocate the private virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.directConnectGatewayId">DirectConnectGatewayId</a></code> | <code>string</code> | The ID or ARN of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.enableSiteLink">EnableSiteLink</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to enable or disable SiteLink. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.mtu">Mtu</a></code> | <code>double</code> | The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.rateLimit">RateLimit</a></code> | <code>string</code> | The rate limit (bandwidth allocation) for the virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>[]</code> | The tags associated with the private virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualGatewayId">VirtualGatewayId</a></code> | <code>string</code> | The ID or ARN of the virtual private gateway. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BgpPeers`<sup>Required</sup> <a name="BgpPeers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.bgpPeers"></a>

```csharp
public IResolvable|DirectconnectPrivateVirtualInterfaceBgpPeers[] BgpPeers { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>[]

The BGP peers configured on this virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#bgp_peers DirectconnectPrivateVirtualInterface#bgp_peers}

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#connection_id DirectconnectPrivateVirtualInterface#connection_id}

---

##### `VirtualInterfaceName`<sup>Required</sup> <a name="VirtualInterfaceName" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualInterfaceName"></a>

```csharp
public string VirtualInterfaceName { get; set; }
```

- *Type:* string

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#virtual_interface_name DirectconnectPrivateVirtualInterface#virtual_interface_name}

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.vlan"></a>

```csharp
public double Vlan { get; set; }
```

- *Type:* double

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#vlan DirectconnectPrivateVirtualInterface#vlan}

---

##### `AllocatePrivateVirtualInterfaceRoleArn`<sup>Optional</sup> <a name="AllocatePrivateVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.allocatePrivateVirtualInterfaceRoleArn"></a>

```csharp
public string AllocatePrivateVirtualInterfaceRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the role to allocate the private virtual interface.

Needs directconnect:AllocatePrivateVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#allocate_private_virtual_interface_role_arn DirectconnectPrivateVirtualInterface#allocate_private_virtual_interface_role_arn}

---

##### `DirectConnectGatewayId`<sup>Optional</sup> <a name="DirectConnectGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.directConnectGatewayId"></a>

```csharp
public string DirectConnectGatewayId { get; set; }
```

- *Type:* string

The ID or ARN of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#direct_connect_gateway_id DirectconnectPrivateVirtualInterface#direct_connect_gateway_id}

---

##### `EnableSiteLink`<sup>Optional</sup> <a name="EnableSiteLink" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.enableSiteLink"></a>

```csharp
public bool|IResolvable EnableSiteLink { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to enable or disable SiteLink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#enable_site_link DirectconnectPrivateVirtualInterface#enable_site_link}

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.mtu"></a>

```csharp
public double Mtu { get; set; }
```

- *Type:* double

The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#mtu DirectconnectPrivateVirtualInterface#mtu}

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.rateLimit"></a>

```csharp
public string RateLimit { get; set; }
```

- *Type:* string

The rate limit (bandwidth allocation) for the virtual interface.

The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#rate_limit DirectconnectPrivateVirtualInterface#rate_limit}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.tags"></a>

```csharp
public IResolvable|DirectconnectPrivateVirtualInterfaceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>[]

The tags associated with the private virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#tags DirectconnectPrivateVirtualInterface#tags}

---

##### `VirtualGatewayId`<sup>Optional</sup> <a name="VirtualGatewayId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceConfig.property.virtualGatewayId"></a>

```csharp
public string VirtualGatewayId { get; set; }
```

- *Type:* string

The ID or ARN of the virtual private gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#virtual_gateway_id DirectconnectPrivateVirtualInterface#virtual_gateway_id}

---

### DirectconnectPrivateVirtualInterfaceTags <a name="DirectconnectPrivateVirtualInterfaceTags" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectPrivateVirtualInterfaceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#key DirectconnectPrivateVirtualInterface#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_private_virtual_interface#value DirectconnectPrivateVirtualInterface#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectPrivateVirtualInterfaceBgpPeersList <a name="DirectconnectPrivateVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectPrivateVirtualInterfaceBgpPeersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.get"></a>

```csharp
private DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersList.property.internalValue"></a>

```csharp
public IResolvable|DirectconnectPrivateVirtualInterfaceBgpPeers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>[]

---


### DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference <a name="DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress">ResetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAuthKey">ResetAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId">ResetBgpPeerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress">ResetCustomerAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmazonAddress` <a name="ResetAmazonAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress"></a>

```csharp
private void ResetAmazonAddress()
```

##### `ResetAuthKey` <a name="ResetAuthKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetAuthKey"></a>

```csharp
private void ResetAuthKey()
```

##### `ResetBgpPeerId` <a name="ResetBgpPeerId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId"></a>

```csharp
private void ResetBgpPeerId()
```

##### `ResetCustomerAddress` <a name="ResetCustomerAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress"></a>

```csharp
private void ResetCustomerAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput">AddressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput">AmazonAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asnInput">AsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKeyInput">AuthKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput">BgpPeerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput">CustomerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamily">AddressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">AmazonAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asn">Asn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKey">AuthKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">BgpPeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddress">CustomerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressFamilyInput`<sup>Optional</sup> <a name="AddressFamilyInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput"></a>

```csharp
public string AddressFamilyInput { get; }
```

- *Type:* string

---

##### `AmazonAddressInput`<sup>Optional</sup> <a name="AmazonAddressInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput"></a>

```csharp
public string AmazonAddressInput { get; }
```

- *Type:* string

---

##### `AsnInput`<sup>Optional</sup> <a name="AsnInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asnInput"></a>

```csharp
public string AsnInput { get; }
```

- *Type:* string

---

##### `AuthKeyInput`<sup>Optional</sup> <a name="AuthKeyInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKeyInput"></a>

```csharp
public string AuthKeyInput { get; }
```

- *Type:* string

---

##### `BgpPeerIdInput`<sup>Optional</sup> <a name="BgpPeerIdInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput"></a>

```csharp
public string BgpPeerIdInput { get; }
```

- *Type:* string

---

##### `CustomerAddressInput`<sup>Optional</sup> <a name="CustomerAddressInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput"></a>

```csharp
public string CustomerAddressInput { get; }
```

- *Type:* string

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```csharp
public string AddressFamily { get; }
```

- *Type:* string

---

##### `AmazonAddress`<sup>Required</sup> <a name="AmazonAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```csharp
public string AmazonAddress { get; }
```

- *Type:* string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```csharp
public string Asn { get; }
```

- *Type:* string

---

##### `AuthKey`<sup>Required</sup> <a name="AuthKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```csharp
public string AuthKey { get; }
```

- *Type:* string

---

##### `BgpPeerId`<sup>Required</sup> <a name="BgpPeerId" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```csharp
public string BgpPeerId { get; }
```

- *Type:* string

---

##### `CustomerAddress`<sup>Required</sup> <a name="CustomerAddress" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```csharp
public string CustomerAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DirectconnectPrivateVirtualInterfaceBgpPeers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceBgpPeers">DirectconnectPrivateVirtualInterfaceBgpPeers</a>

---


### DirectconnectPrivateVirtualInterfaceTagsList <a name="DirectconnectPrivateVirtualInterfaceTagsList" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectPrivateVirtualInterfaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.get"></a>

```csharp
private DirectconnectPrivateVirtualInterfaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsList.property.internalValue"></a>

```csharp
public IResolvable|DirectconnectPrivateVirtualInterfaceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>[]

---


### DirectconnectPrivateVirtualInterfaceTagsOutputReference <a name="DirectconnectPrivateVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectPrivateVirtualInterfaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DirectconnectPrivateVirtualInterfaceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPrivateVirtualInterface.DirectconnectPrivateVirtualInterfaceTags">DirectconnectPrivateVirtualInterfaceTags</a>

---



