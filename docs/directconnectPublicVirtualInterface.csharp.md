# `directconnectPublicVirtualInterface` Submodule <a name="`directconnectPublicVirtualInterface` Submodule" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectPublicVirtualInterface <a name="DirectconnectPublicVirtualInterface" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface awscc_directconnect_public_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectPublicVirtualInterface(Construct Scope, string Id, DirectconnectPublicVirtualInterfaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig">DirectconnectPublicVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig">DirectconnectPublicVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putBgpPeers">PutBgpPeers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetAllocatePublicVirtualInterfaceRoleArn">ResetAllocatePublicVirtualInterfaceRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetRateLimit">ResetRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetRouteFilterPrefixes">ResetRouteFilterPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBgpPeers` <a name="PutBgpPeers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putBgpPeers"></a>

```csharp
private void PutBgpPeers(IResolvable|DirectconnectPublicVirtualInterfaceBgpPeers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putBgpPeers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putTags"></a>

```csharp
private void PutTags(IResolvable|DirectconnectPublicVirtualInterfaceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>[]

---

##### `ResetAllocatePublicVirtualInterfaceRoleArn` <a name="ResetAllocatePublicVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetAllocatePublicVirtualInterfaceRoleArn"></a>

```csharp
private void ResetAllocatePublicVirtualInterfaceRoleArn()
```

##### `ResetRateLimit` <a name="ResetRateLimit" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetRateLimit"></a>

```csharp
private void ResetRateLimit()
```

##### `ResetRouteFilterPrefixes` <a name="ResetRouteFilterPrefixes" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetRouteFilterPrefixes"></a>

```csharp
private void ResetRouteFilterPrefixes()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectPublicVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectPublicVirtualInterface.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectPublicVirtualInterface.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectPublicVirtualInterface.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectPublicVirtualInterface.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DirectconnectPublicVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectconnectPublicVirtualInterface to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectconnectPublicVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectPublicVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeers">BgpPeers</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList">DirectconnectPublicVirtualInterfaceBgpPeersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList">DirectconnectPublicVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceArn">VirtualInterfaceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceId">VirtualInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArnInput">AllocatePublicVirtualInterfaceRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeersInput">BgpPeersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionIdInput">ConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.rateLimitInput">RateLimitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixesInput">RouteFilterPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceNameInput">VirtualInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlanInput">VlanInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArn">AllocatePublicVirtualInterfaceRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionId">ConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.rateLimit">RateLimit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixes">RouteFilterPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceName">VirtualInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlan">Vlan</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BgpPeers`<sup>Required</sup> <a name="BgpPeers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeers"></a>

```csharp
public DirectconnectPublicVirtualInterfaceBgpPeersList BgpPeers { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList">DirectconnectPublicVirtualInterfaceBgpPeersList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tags"></a>

```csharp
public DirectconnectPublicVirtualInterfaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList">DirectconnectPublicVirtualInterfaceTagsList</a>

---

##### `VirtualInterfaceArn`<sup>Required</sup> <a name="VirtualInterfaceArn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceArn"></a>

```csharp
public string VirtualInterfaceArn { get; }
```

- *Type:* string

---

##### `VirtualInterfaceId`<sup>Required</sup> <a name="VirtualInterfaceId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceId"></a>

```csharp
public string VirtualInterfaceId { get; }
```

- *Type:* string

---

##### `AllocatePublicVirtualInterfaceRoleArnInput`<sup>Optional</sup> <a name="AllocatePublicVirtualInterfaceRoleArnInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArnInput"></a>

```csharp
public string AllocatePublicVirtualInterfaceRoleArnInput { get; }
```

- *Type:* string

---

##### `BgpPeersInput`<sup>Optional</sup> <a name="BgpPeersInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.bgpPeersInput"></a>

```csharp
public IResolvable|DirectconnectPublicVirtualInterfaceBgpPeers[] BgpPeersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>[]

---

##### `ConnectionIdInput`<sup>Optional</sup> <a name="ConnectionIdInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionIdInput"></a>

```csharp
public string ConnectionIdInput { get; }
```

- *Type:* string

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.rateLimitInput"></a>

```csharp
public string RateLimitInput { get; }
```

- *Type:* string

---

##### `RouteFilterPrefixesInput`<sup>Optional</sup> <a name="RouteFilterPrefixesInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixesInput"></a>

```csharp
public string[] RouteFilterPrefixesInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tagsInput"></a>

```csharp
public IResolvable|DirectconnectPublicVirtualInterfaceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>[]

---

##### `VirtualInterfaceNameInput`<sup>Optional</sup> <a name="VirtualInterfaceNameInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceNameInput"></a>

```csharp
public string VirtualInterfaceNameInput { get; }
```

- *Type:* string

---

##### `VlanInput`<sup>Optional</sup> <a name="VlanInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlanInput"></a>

```csharp
public double VlanInput { get; }
```

- *Type:* double

---

##### `AllocatePublicVirtualInterfaceRoleArn`<sup>Required</sup> <a name="AllocatePublicVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.allocatePublicVirtualInterfaceRoleArn"></a>

```csharp
public string AllocatePublicVirtualInterfaceRoleArn { get; }
```

- *Type:* string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.connectionId"></a>

```csharp
public string ConnectionId { get; }
```

- *Type:* string

---

##### `RateLimit`<sup>Required</sup> <a name="RateLimit" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.rateLimit"></a>

```csharp
public string RateLimit { get; }
```

- *Type:* string

---

##### `RouteFilterPrefixes`<sup>Required</sup> <a name="RouteFilterPrefixes" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.routeFilterPrefixes"></a>

```csharp
public string[] RouteFilterPrefixes { get; }
```

- *Type:* string[]

---

##### `VirtualInterfaceName`<sup>Required</sup> <a name="VirtualInterfaceName" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.virtualInterfaceName"></a>

```csharp
public string VirtualInterfaceName { get; }
```

- *Type:* string

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.vlan"></a>

```csharp
public double Vlan { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterface.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectPublicVirtualInterfaceBgpPeers <a name="DirectconnectPublicVirtualInterfaceBgpPeers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectPublicVirtualInterfaceBgpPeers {
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
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.addressFamily">AddressFamily</a></code> | <code>string</code> | The address family for the BGP peer. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.asn">Asn</a></code> | <code>string</code> | The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.amazonAddress">AmazonAddress</a></code> | <code>string</code> | The IP address assigned to the Amazon interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.authKey">AuthKey</a></code> | <code>string</code> | The authentication key for BGP configuration. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.bgpPeerId">BgpPeerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#bgp_peer_id DirectconnectPublicVirtualInterface#bgp_peer_id}. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.customerAddress">CustomerAddress</a></code> | <code>string</code> | The IP address assigned to the customer interface. |

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.addressFamily"></a>

```csharp
public string AddressFamily { get; set; }
```

- *Type:* string

The address family for the BGP peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#address_family DirectconnectPublicVirtualInterface#address_family}

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.asn"></a>

```csharp
public string Asn { get; set; }
```

- *Type:* string

The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#asn DirectconnectPublicVirtualInterface#asn}

---

##### `AmazonAddress`<sup>Optional</sup> <a name="AmazonAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.amazonAddress"></a>

```csharp
public string AmazonAddress { get; set; }
```

- *Type:* string

The IP address assigned to the Amazon interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#amazon_address DirectconnectPublicVirtualInterface#amazon_address}

---

##### `AuthKey`<sup>Optional</sup> <a name="AuthKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.authKey"></a>

```csharp
public string AuthKey { get; set; }
```

- *Type:* string

The authentication key for BGP configuration.

This string has a minimum length of 6 characters and and a maximum length of 80 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#auth_key DirectconnectPublicVirtualInterface#auth_key}

---

##### `BgpPeerId`<sup>Optional</sup> <a name="BgpPeerId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.bgpPeerId"></a>

```csharp
public string BgpPeerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#bgp_peer_id DirectconnectPublicVirtualInterface#bgp_peer_id}.

---

##### `CustomerAddress`<sup>Optional</sup> <a name="CustomerAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers.property.customerAddress"></a>

```csharp
public string CustomerAddress { get; set; }
```

- *Type:* string

The IP address assigned to the customer interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#customer_address DirectconnectPublicVirtualInterface#customer_address}

---

### DirectconnectPublicVirtualInterfaceConfig <a name="DirectconnectPublicVirtualInterfaceConfig" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectPublicVirtualInterfaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|DirectconnectPublicVirtualInterfaceBgpPeers[] BgpPeers,
    string ConnectionId,
    string VirtualInterfaceName,
    double Vlan,
    string AllocatePublicVirtualInterfaceRoleArn = null,
    string RateLimit = null,
    string[] RouteFilterPrefixes = null,
    IResolvable|DirectconnectPublicVirtualInterfaceTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.bgpPeers">BgpPeers</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>[]</code> | The BGP peers configured on this virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connectionId">ConnectionId</a></code> | <code>string</code> | The ID or ARN of the connection or LAG. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.virtualInterfaceName">VirtualInterfaceName</a></code> | <code>string</code> | The name of the virtual interface assigned by the customer network. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.vlan">Vlan</a></code> | <code>double</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.allocatePublicVirtualInterfaceRoleArn">AllocatePublicVirtualInterfaceRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the role to allocate the public virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.rateLimit">RateLimit</a></code> | <code>string</code> | The rate limit (bandwidth allocation) for the virtual interface. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.routeFilterPrefixes">RouteFilterPrefixes</a></code> | <code>string[]</code> | The routes to be advertised to the AWS network in this region. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>[]</code> | The tags associated with the public virtual interface. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BgpPeers`<sup>Required</sup> <a name="BgpPeers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.bgpPeers"></a>

```csharp
public IResolvable|DirectconnectPublicVirtualInterfaceBgpPeers[] BgpPeers { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>[]

The BGP peers configured on this virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#bgp_peers DirectconnectPublicVirtualInterface#bgp_peers}

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.connectionId"></a>

```csharp
public string ConnectionId { get; set; }
```

- *Type:* string

The ID or ARN of the connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#connection_id DirectconnectPublicVirtualInterface#connection_id}

---

##### `VirtualInterfaceName`<sup>Required</sup> <a name="VirtualInterfaceName" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.virtualInterfaceName"></a>

```csharp
public string VirtualInterfaceName { get; set; }
```

- *Type:* string

The name of the virtual interface assigned by the customer network.

The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#virtual_interface_name DirectconnectPublicVirtualInterface#virtual_interface_name}

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.vlan"></a>

```csharp
public double Vlan { get; set; }
```

- *Type:* double

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#vlan DirectconnectPublicVirtualInterface#vlan}

---

##### `AllocatePublicVirtualInterfaceRoleArn`<sup>Optional</sup> <a name="AllocatePublicVirtualInterfaceRoleArn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.allocatePublicVirtualInterfaceRoleArn"></a>

```csharp
public string AllocatePublicVirtualInterfaceRoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the role to allocate the public virtual interface.

Needs directconnect:AllocatePublicVirtualInterface permissions and tag permissions if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#allocate_public_virtual_interface_role_arn DirectconnectPublicVirtualInterface#allocate_public_virtual_interface_role_arn}

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.rateLimit"></a>

```csharp
public string RateLimit { get; set; }
```

- *Type:* string

The rate limit (bandwidth allocation) for the virtual interface.

The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#rate_limit DirectconnectPublicVirtualInterface#rate_limit}

---

##### `RouteFilterPrefixes`<sup>Optional</sup> <a name="RouteFilterPrefixes" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.routeFilterPrefixes"></a>

```csharp
public string[] RouteFilterPrefixes { get; set; }
```

- *Type:* string[]

The routes to be advertised to the AWS network in this region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#route_filter_prefixes DirectconnectPublicVirtualInterface#route_filter_prefixes}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceConfig.property.tags"></a>

```csharp
public IResolvable|DirectconnectPublicVirtualInterfaceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>[]

The tags associated with the public virtual interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#tags DirectconnectPublicVirtualInterface#tags}

---

### DirectconnectPublicVirtualInterfaceTags <a name="DirectconnectPublicVirtualInterfaceTags" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectPublicVirtualInterfaceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#key DirectconnectPublicVirtualInterface#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_public_virtual_interface#value DirectconnectPublicVirtualInterface#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectPublicVirtualInterfaceBgpPeersList <a name="DirectconnectPublicVirtualInterfaceBgpPeersList" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectPublicVirtualInterfaceBgpPeersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.get"></a>

```csharp
private DirectconnectPublicVirtualInterfaceBgpPeersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersList.property.internalValue"></a>

```csharp
public IResolvable|DirectconnectPublicVirtualInterfaceBgpPeers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>[]

---


### DirectconnectPublicVirtualInterfaceBgpPeersOutputReference <a name="DirectconnectPublicVirtualInterfaceBgpPeersOutputReference" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectPublicVirtualInterfaceBgpPeersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress">ResetAmazonAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAuthKey">ResetAuthKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId">ResetBgpPeerId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress">ResetCustomerAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAmazonAddress` <a name="ResetAmazonAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAmazonAddress"></a>

```csharp
private void ResetAmazonAddress()
```

##### `ResetAuthKey` <a name="ResetAuthKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetAuthKey"></a>

```csharp
private void ResetAuthKey()
```

##### `ResetBgpPeerId` <a name="ResetBgpPeerId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetBgpPeerId"></a>

```csharp
private void ResetBgpPeerId()
```

##### `ResetCustomerAddress` <a name="ResetCustomerAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.resetCustomerAddress"></a>

```csharp
private void ResetCustomerAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput">AddressFamilyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput">AmazonAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asnInput">AsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKeyInput">AuthKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput">BgpPeerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput">CustomerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamily">AddressFamily</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddress">AmazonAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asn">Asn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKey">AuthKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId">BgpPeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddress">CustomerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressFamilyInput`<sup>Optional</sup> <a name="AddressFamilyInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamilyInput"></a>

```csharp
public string AddressFamilyInput { get; }
```

- *Type:* string

---

##### `AmazonAddressInput`<sup>Optional</sup> <a name="AmazonAddressInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddressInput"></a>

```csharp
public string AmazonAddressInput { get; }
```

- *Type:* string

---

##### `AsnInput`<sup>Optional</sup> <a name="AsnInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asnInput"></a>

```csharp
public string AsnInput { get; }
```

- *Type:* string

---

##### `AuthKeyInput`<sup>Optional</sup> <a name="AuthKeyInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKeyInput"></a>

```csharp
public string AuthKeyInput { get; }
```

- *Type:* string

---

##### `BgpPeerIdInput`<sup>Optional</sup> <a name="BgpPeerIdInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerIdInput"></a>

```csharp
public string BgpPeerIdInput { get; }
```

- *Type:* string

---

##### `CustomerAddressInput`<sup>Optional</sup> <a name="CustomerAddressInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddressInput"></a>

```csharp
public string CustomerAddressInput { get; }
```

- *Type:* string

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.addressFamily"></a>

```csharp
public string AddressFamily { get; }
```

- *Type:* string

---

##### `AmazonAddress`<sup>Required</sup> <a name="AmazonAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.amazonAddress"></a>

```csharp
public string AmazonAddress { get; }
```

- *Type:* string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.asn"></a>

```csharp
public string Asn { get; }
```

- *Type:* string

---

##### `AuthKey`<sup>Required</sup> <a name="AuthKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.authKey"></a>

```csharp
public string AuthKey { get; }
```

- *Type:* string

---

##### `BgpPeerId`<sup>Required</sup> <a name="BgpPeerId" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.bgpPeerId"></a>

```csharp
public string BgpPeerId { get; }
```

- *Type:* string

---

##### `CustomerAddress`<sup>Required</sup> <a name="CustomerAddress" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.customerAddress"></a>

```csharp
public string CustomerAddress { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DirectconnectPublicVirtualInterfaceBgpPeers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceBgpPeers">DirectconnectPublicVirtualInterfaceBgpPeers</a>

---


### DirectconnectPublicVirtualInterfaceTagsList <a name="DirectconnectPublicVirtualInterfaceTagsList" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectPublicVirtualInterfaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.get"></a>

```csharp
private DirectconnectPublicVirtualInterfaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsList.property.internalValue"></a>

```csharp
public IResolvable|DirectconnectPublicVirtualInterfaceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>[]

---


### DirectconnectPublicVirtualInterfaceTagsOutputReference <a name="DirectconnectPublicVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectPublicVirtualInterfaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DirectconnectPublicVirtualInterfaceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectPublicVirtualInterface.DirectconnectPublicVirtualInterfaceTags">DirectconnectPublicVirtualInterfaceTags</a>

---



