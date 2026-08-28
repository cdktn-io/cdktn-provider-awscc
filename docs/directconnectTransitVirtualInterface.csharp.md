# `directconnectTransitVirtualInterface` Submodule <a name="`directconnectTransitVirtualInterface` Submodule" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectTransitVirtualInterface <a name="DirectconnectTransitVirtualInterface" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface awscc_directconnect_transit_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectTransitVirtualInterface(Construct Scope, string Id, DirectconnectTransitVirtualInterfaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig">DirectconnectTransitVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig">DirectconnectTransitVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putBgpPeers">PutBgpPeers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetAllocateTransitVirtualInterfaceRoleArn">ResetAllocateTransitVirtualInterfaceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetEnableSiteLink">ResetEnableSiteLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetMtu">ResetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetRateLimit">ResetRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBgpPeers` <a name="PutBgpPeers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putBgpPeers"></a>

```csharp
private void PutBgpPeers(IResolvable|DirectconnectTransitVirtualInterfaceBgpPeers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putBgpPeers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putTags"></a>

```csharp
private void PutTags(IResolvable|DirectconnectTransitVirtualInterfaceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>[]

---

##### `ResetAllocateTransitVirtualInterfaceRoleArn` <a name="ResetAllocateTransitVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetAllocateTransitVirtualInterfaceRoleArn"></a>

```csharp
private void ResetAllocateTransitVirtualInterfaceRoleArn()
```

##### `ResetEnableSiteLink` <a name="ResetEnableSiteLink" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetEnableSiteLink"></a>

```csharp
private void ResetEnableSiteLink()
```

##### `ResetMtu` <a name="ResetMtu" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetMtu"></a>

```csharp
private void ResetMtu()
```

##### `ResetRateLimit` <a name="ResetRateLimit" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetRateLimit"></a>

```csharp
private void ResetRateLimit()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectTransitVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectTransitVirtualInterface.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectTransitVirtualInterface.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectTransitVirtualInterface.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectTransitVirtualInterface.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DirectconnectTransitVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectconnectTransitVirtualInterface to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectconnectTransitVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectTransitVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.bgpPeers">BgpPeers</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList">DirectconnectTransitVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList">DirectconnectTransitVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceArn">VirtualInterfaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceId">VirtualInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArnInput">AllocateTransitVirtualInterfaceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.bgpPeersInput">BgpPeersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.directConnectGatewayIdInput">DirectConnectGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.enableSiteLinkInput">EnableSiteLinkInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.mtuInput">MtuInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.rateLimitInput">RateLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceNameInput">VirtualInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.vlanInput">VlanInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArn">AllocateTransitVirtualInterfaceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.directConnectGatewayId">DirectConnectGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.enableSiteLink">EnableSiteLink</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.mtu">Mtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.rateLimit">RateLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceName">VirtualInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.vlan">Vlan</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BgpPeers`<sup>Required</sup> <a name="BgpPeers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.bgpPeers"></a>

```csharp
public DirectconnectTransitVirtualInterfaceBgpPeersList BgpPeers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList">DirectconnectTransitVirtualInterfaceBgpPeersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tags"></a>

```csharp
public DirectconnectTransitVirtualInterfaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList">DirectconnectTransitVirtualInterfaceTagsList</a>

---

##### `VirtualInterfaceArn`<sup>Required</sup> <a name="VirtualInterfaceArn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceArn"></a>

```csharp
public string VirtualInterfaceArn { get; }
```

- *Type:* string

---

##### `VirtualInterfaceId`<sup>Required</sup> <a name="VirtualInterfaceId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceId"></a>

```csharp
public string VirtualInterfaceId { get; }
```

- *Type:* string

---

##### `AllocateTransitVirtualInterfaceRoleArnInput`<sup>Optional</sup> <a name="AllocateTransitVirtualInterfaceRoleArnInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArnInput"></a>

```csharp
public string AllocateTransitVirtualInterfaceRoleArnInput { get; }
```

- *Type:* string

---

##### `BgpPeersInput`<sup>Optional</sup> <a name="BgpPeersInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.bgpPeersInput"></a>

```csharp
public IResolvable|DirectconnectTransitVirtualInterfaceBgpPeers[] BgpPeersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>[]

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `DirectConnectGatewayIdInput`<sup>Optional</sup> <a name="DirectConnectGatewayIdInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.directConnectGatewayIdInput"></a>

```csharp
public string DirectConnectGatewayIdInput { get; }
```

- *Type:* string

---

##### `EnableSiteLinkInput`<sup>Optional</sup> <a name="EnableSiteLinkInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.enableSiteLinkInput"></a>

```csharp
public bool|IResolvable EnableSiteLinkInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MtuInput`<sup>Optional</sup> <a name="MtuInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.mtuInput"></a>

```csharp
public double MtuInput { get; }
```

- *Type:* double

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.rateLimitInput"></a>

```csharp
public string RateLimitInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tagsInput"></a>

```csharp
public IResolvable|DirectconnectTransitVirtualInterfaceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>[]

---

##### `VirtualInterfaceNameInput`<sup>Optional</sup> <a name="VirtualInterfaceNameInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceNameInput"></a>

```csharp
public string VirtualInterfaceNameInput { get; }
```

- *Type:* string

---

##### `VlanInput`<sup>Optional</sup> <a name="VlanInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.vlanInput"></a>

```csharp
public double VlanInput { get; }
```

- *Type:* double

---

##### `AllocateTransitVirtualInterfaceRoleArn`<sup>Required</sup> <a name="AllocateTransitVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.allocateTransitVirtualInterfaceRoleArn"></a>

```csharp
public string AllocateTransitVirtualInterfaceRoleArn { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `DirectConnectGatewayId`<sup>Required</sup> <a name="DirectConnectGatewayId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.directConnectGatewayId"></a>

```csharp
public string DirectConnectGatewayId { get; }
```

- *Type:* string

---

##### `EnableSiteLink`<sup>Required</sup> <a name="EnableSiteLink" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.enableSiteLink"></a>

```csharp
public bool|IResolvable EnableSiteLink { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Mtu`<sup>Required</sup> <a name="Mtu" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.mtu"></a>

```csharp
public double Mtu { get; }
```

- *Type:* double

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.rateLimit"></a>

```csharp
public string RateLimit { get; }
```

- *Type:* string

---

##### `VirtualInterfaceName`<sup>Required</sup> <a name="VirtualInterfaceName" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.virtualInterfaceName"></a>

```csharp
public string VirtualInterfaceName { get; }
```

- *Type:* string

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.vlan"></a>

```csharp
public double Vlan { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterface.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectTransitVirtualInterfaceBgpPeers <a name="DirectconnectTransitVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectTransitVirtualInterfaceBgpPeers {
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
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.addressFamily">AddressFamily</a></code> | <code>string</code> | The address family for the BGP peer. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.asn">Asn</a></code> | <code>string</code> | The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.amazonAddress">AmazonAddress</a></code> | <code>string</code> | The IP address assigned to the Amazon interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.authKey">AuthKey</a></code> | <code>string</code> | The authentication key for BGP configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.bgpPeerId">BgpPeerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#bgp_peer_id DirectconnectTransitVirtualInterface#bgp_peer_id}. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.customerAddress">CustomerAddress</a></code> | <code>string</code> | The IP address assigned to the customer interface. |

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.addressFamily"></a>

```csharp
public string AddressFamily { get; set; }
```

- *Type:* string

The address family for the BGP peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#address_family DirectconnectTransitVirtualInterface#address_family}

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.asn"></a>

```csharp
public string Asn { get; set; }
```

- *Type:* string

The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#asn DirectconnectTransitVirtualInterface#asn}

---

##### `AmazonAddress`<sup>Optional</sup> <a name="AmazonAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.amazonAddress"></a>

```csharp
public string AmazonAddress { get; set; }
```

- *Type:* string

The IP address assigned to the Amazon interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#amazon_address DirectconnectTransitVirtualInterface#amazon_address}

---

##### `AuthKey`<sup>Optional</sup> <a name="AuthKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.authKey"></a>

```csharp
public string AuthKey { get; set; }
```

- *Type:* string

The authentication key for BGP configuration.

This string has a minimum length of 6 characters and and a maximum length of 80 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#auth_key DirectconnectTransitVirtualInterface#auth_key}

---

##### `BgpPeerId`<sup>Optional</sup> <a name="BgpPeerId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.bgpPeerId"></a>

```csharp
public string BgpPeerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#bgp_peer_id DirectconnectTransitVirtualInterface#bgp_peer_id}.

---

##### `CustomerAddress`<sup>Optional</sup> <a name="CustomerAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers.property.customerAddress"></a>

```csharp
public string CustomerAddress { get; set; }
```

- *Type:* string

The IP address assigned to the customer interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#customer_address DirectconnectTransitVirtualInterface#customer_address}

---

### DirectconnectTransitVirtualInterfaceConfig <a name="DirectconnectTransitVirtualInterfaceConfig" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectTransitVirtualInterfaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DirectconnectTransitVirtualInterfaceBgpPeers[] BgpPeers,
    string ConnectionId,
    string DirectConnectGatewayId,
    string VirtualInterfaceName,
    double Vlan,
    string AllocateTransitVirtualInterfaceRoleArn = null,
    bool|IResolvable EnableSiteLink = null,
    double Mtu = null,
    string RateLimit = null,
    IResolvable|DirectconnectTransitVirtualInterfaceTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.bgpPeers">BgpPeers</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>[]</code> | The BGP peers configured on this virtual interface.. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.connectionId">ConnectionId</a></code> | <code>string</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.directConnectGatewayId">DirectConnectGatewayId</a></code> | <code>string</code> | The ID or ARN of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.virtualInterfaceName">VirtualInterfaceName</a></code> | <code>string</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.vlan">Vlan</a></code> | <code>double</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.allocateTransitVirtualInterfaceRoleArn">AllocateTransitVirtualInterfaceRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the role to allocate the TransitVifAllocation. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.enableSiteLink">EnableSiteLink</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether to enable or disable SiteLink. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.mtu">Mtu</a></code> | <code>double</code> | The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.rateLimit">RateLimit</a></code> | <code>string</code> | The rate limit (bandwidth allocation) for the virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>[]</code> | The tags associated with the private virtual interface. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BgpPeers`<sup>Required</sup> <a name="BgpPeers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.bgpPeers"></a>

```csharp
public IResolvable|DirectconnectTransitVirtualInterfaceBgpPeers[] BgpPeers { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>[]

The BGP peers configured on this virtual interface..

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#bgp_peers DirectconnectTransitVirtualInterface#bgp_peers}

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#connection_id DirectconnectTransitVirtualInterface#connection_id}

---

##### `DirectConnectGatewayId`<sup>Required</sup> <a name="DirectConnectGatewayId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.directConnectGatewayId"></a>

```csharp
public string DirectConnectGatewayId { get; set; }
```

- *Type:* string

The ID or ARN of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#direct_connect_gateway_id DirectconnectTransitVirtualInterface#direct_connect_gateway_id}

---

##### `VirtualInterfaceName`<sup>Required</sup> <a name="VirtualInterfaceName" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.virtualInterfaceName"></a>

```csharp
public string VirtualInterfaceName { get; set; }
```

- *Type:* string

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#virtual_interface_name DirectconnectTransitVirtualInterface#virtual_interface_name}

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.vlan"></a>

```csharp
public double Vlan { get; set; }
```

- *Type:* double

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#vlan DirectconnectTransitVirtualInterface#vlan}

---

##### `AllocateTransitVirtualInterfaceRoleArn`<sup>Optional</sup> <a name="AllocateTransitVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.allocateTransitVirtualInterfaceRoleArn"></a>

```csharp
public string AllocateTransitVirtualInterfaceRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the role to allocate the TransitVifAllocation.

Needs directconnect:AllocateTransitVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#allocate_transit_virtual_interface_role_arn DirectconnectTransitVirtualInterface#allocate_transit_virtual_interface_role_arn}

---

##### `EnableSiteLink`<sup>Optional</sup> <a name="EnableSiteLink" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.enableSiteLink"></a>

```csharp
public bool|IResolvable EnableSiteLink { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether to enable or disable SiteLink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#enable_site_link DirectconnectTransitVirtualInterface#enable_site_link}

---

##### `Mtu`<sup>Optional</sup> <a name="Mtu" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.mtu"></a>

```csharp
public double Mtu { get; set; }
```

- *Type:* double

The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#mtu DirectconnectTransitVirtualInterface#mtu}

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.rateLimit"></a>

```csharp
public string RateLimit { get; set; }
```

- *Type:* string

The rate limit (bandwidth allocation) for the virtual interface.

The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#rate_limit DirectconnectTransitVirtualInterface#rate_limit}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceConfig.property.tags"></a>

```csharp
public IResolvable|DirectconnectTransitVirtualInterfaceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>[]

The tags associated with the private virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#tags DirectconnectTransitVirtualInterface#tags}

---

### DirectconnectTransitVirtualInterfaceTags <a name="DirectconnectTransitVirtualInterfaceTags" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectTransitVirtualInterfaceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#key DirectconnectTransitVirtualInterface#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_transit_virtual_interface#value DirectconnectTransitVirtualInterface#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectTransitVirtualInterfaceBgpPeersList <a name="DirectconnectTransitVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectTransitVirtualInterfaceBgpPeersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.get"></a>

```csharp
private DirectconnectTransitVirtualInterfaceBgpPeersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersList.property.internalValue"></a>

```csharp
public IResolvable|DirectconnectTransitVirtualInterfaceBgpPeers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>[]

---


### DirectconnectTransitVirtualInterfaceBgpPeersOutputReference <a name="DirectconnectTransitVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectTransitVirtualInterfaceBgpPeersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress">ResetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetAuthKey">ResetAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId">ResetBgpPeerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress">ResetCustomerAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmazonAddress` <a name="ResetAmazonAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress"></a>

```csharp
private void ResetAmazonAddress()
```

##### `ResetAuthKey` <a name="ResetAuthKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetAuthKey"></a>

```csharp
private void ResetAuthKey()
```

##### `ResetBgpPeerId` <a name="ResetBgpPeerId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId"></a>

```csharp
private void ResetBgpPeerId()
```

##### `ResetCustomerAddress` <a name="ResetCustomerAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress"></a>

```csharp
private void ResetCustomerAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput">AddressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput">AmazonAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asnInput">AsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKeyInput">AuthKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput">BgpPeerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput">CustomerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamily">AddressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">AmazonAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asn">Asn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKey">AuthKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">BgpPeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddress">CustomerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressFamilyInput`<sup>Optional</sup> <a name="AddressFamilyInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput"></a>

```csharp
public string AddressFamilyInput { get; }
```

- *Type:* string

---

##### `AmazonAddressInput`<sup>Optional</sup> <a name="AmazonAddressInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput"></a>

```csharp
public string AmazonAddressInput { get; }
```

- *Type:* string

---

##### `AsnInput`<sup>Optional</sup> <a name="AsnInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asnInput"></a>

```csharp
public string AsnInput { get; }
```

- *Type:* string

---

##### `AuthKeyInput`<sup>Optional</sup> <a name="AuthKeyInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKeyInput"></a>

```csharp
public string AuthKeyInput { get; }
```

- *Type:* string

---

##### `BgpPeerIdInput`<sup>Optional</sup> <a name="BgpPeerIdInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput"></a>

```csharp
public string BgpPeerIdInput { get; }
```

- *Type:* string

---

##### `CustomerAddressInput`<sup>Optional</sup> <a name="CustomerAddressInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput"></a>

```csharp
public string CustomerAddressInput { get; }
```

- *Type:* string

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```csharp
public string AddressFamily { get; }
```

- *Type:* string

---

##### `AmazonAddress`<sup>Required</sup> <a name="AmazonAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```csharp
public string AmazonAddress { get; }
```

- *Type:* string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```csharp
public string Asn { get; }
```

- *Type:* string

---

##### `AuthKey`<sup>Required</sup> <a name="AuthKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```csharp
public string AuthKey { get; }
```

- *Type:* string

---

##### `BgpPeerId`<sup>Required</sup> <a name="BgpPeerId" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```csharp
public string BgpPeerId { get; }
```

- *Type:* string

---

##### `CustomerAddress`<sup>Required</sup> <a name="CustomerAddress" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```csharp
public string CustomerAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DirectconnectTransitVirtualInterfaceBgpPeers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceBgpPeers">DirectconnectTransitVirtualInterfaceBgpPeers</a>

---


### DirectconnectTransitVirtualInterfaceTagsList <a name="DirectconnectTransitVirtualInterfaceTagsList" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectTransitVirtualInterfaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.get"></a>

```csharp
private DirectconnectTransitVirtualInterfaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsList.property.internalValue"></a>

```csharp
public IResolvable|DirectconnectTransitVirtualInterfaceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>[]

---


### DirectconnectTransitVirtualInterfaceTagsOutputReference <a name="DirectconnectTransitVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectTransitVirtualInterfaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DirectconnectTransitVirtualInterfaceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectTransitVirtualInterface.DirectconnectTransitVirtualInterfaceTags">DirectconnectTransitVirtualInterfaceTags</a>

---



