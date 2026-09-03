# `ec2LocalGatewayVirtualInterface` Submodule <a name="`ec2LocalGatewayVirtualInterface` Submodule" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2LocalGatewayVirtualInterface <a name="Ec2LocalGatewayVirtualInterface" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface awscc_ec2_local_gateway_virtual_interface}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2LocalGatewayVirtualInterface(Construct Scope, string Id, Ec2LocalGatewayVirtualInterfaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig">Ec2LocalGatewayVirtualInterfaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig">Ec2LocalGatewayVirtualInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetPeerBgpAsn">ResetPeerBgpAsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetPeerBgpAsnExtended">ResetPeerBgpAsnExtended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2LocalGatewayVirtualInterfaceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>[]

---

##### `ResetPeerBgpAsn` <a name="ResetPeerBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetPeerBgpAsn"></a>

```csharp
private void ResetPeerBgpAsn()
```

##### `ResetPeerBgpAsnExtended` <a name="ResetPeerBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetPeerBgpAsnExtended"></a>

```csharp
private void ResetPeerBgpAsnExtended()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2LocalGatewayVirtualInterface resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2LocalGatewayVirtualInterface.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2LocalGatewayVirtualInterface.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2LocalGatewayVirtualInterface.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2LocalGatewayVirtualInterface.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2LocalGatewayVirtualInterface resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2LocalGatewayVirtualInterface to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2LocalGatewayVirtualInterface that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2LocalGatewayVirtualInterface to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.configurationState">ConfigurationState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localBgpAsn">LocalBgpAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayId">LocalGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceId">LocalGatewayVirtualInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList">Ec2LocalGatewayVirtualInterfaceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localAddressInput">LocalAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupIdInput">LocalGatewayVirtualInterfaceGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.outpostLagIdInput">OutpostLagIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerAddressInput">PeerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnExtendedInput">PeerBgpAsnExtendedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnInput">PeerBgpAsnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.vlanInput">VlanInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localAddress">LocalAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupId">LocalGatewayVirtualInterfaceGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.outpostLagId">OutpostLagId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerAddress">PeerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsn">PeerBgpAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnExtended">PeerBgpAsnExtended</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.vlan">Vlan</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConfigurationState`<sup>Required</sup> <a name="ConfigurationState" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.configurationState"></a>

```csharp
public string ConfigurationState { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocalBgpAsn`<sup>Required</sup> <a name="LocalBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localBgpAsn"></a>

```csharp
public double LocalBgpAsn { get; }
```

- *Type:* double

---

##### `LocalGatewayId`<sup>Required</sup> <a name="LocalGatewayId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayId"></a>

```csharp
public string LocalGatewayId { get; }
```

- *Type:* string

---

##### `LocalGatewayVirtualInterfaceId`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceId"></a>

```csharp
public string LocalGatewayVirtualInterfaceId { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tags"></a>

```csharp
public Ec2LocalGatewayVirtualInterfaceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList">Ec2LocalGatewayVirtualInterfaceTagsList</a>

---

##### `LocalAddressInput`<sup>Optional</sup> <a name="LocalAddressInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localAddressInput"></a>

```csharp
public string LocalAddressInput { get; }
```

- *Type:* string

---

##### `LocalGatewayVirtualInterfaceGroupIdInput`<sup>Optional</sup> <a name="LocalGatewayVirtualInterfaceGroupIdInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupIdInput"></a>

```csharp
public string LocalGatewayVirtualInterfaceGroupIdInput { get; }
```

- *Type:* string

---

##### `OutpostLagIdInput`<sup>Optional</sup> <a name="OutpostLagIdInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.outpostLagIdInput"></a>

```csharp
public string OutpostLagIdInput { get; }
```

- *Type:* string

---

##### `PeerAddressInput`<sup>Optional</sup> <a name="PeerAddressInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerAddressInput"></a>

```csharp
public string PeerAddressInput { get; }
```

- *Type:* string

---

##### `PeerBgpAsnExtendedInput`<sup>Optional</sup> <a name="PeerBgpAsnExtendedInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnExtendedInput"></a>

```csharp
public double PeerBgpAsnExtendedInput { get; }
```

- *Type:* double

---

##### `PeerBgpAsnInput`<sup>Optional</sup> <a name="PeerBgpAsnInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnInput"></a>

```csharp
public double PeerBgpAsnInput { get; }
```

- *Type:* double

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tagsInput"></a>

```csharp
public IResolvable|Ec2LocalGatewayVirtualInterfaceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>[]

---

##### `VlanInput`<sup>Optional</sup> <a name="VlanInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.vlanInput"></a>

```csharp
public double VlanInput { get; }
```

- *Type:* double

---

##### `LocalAddress`<sup>Required</sup> <a name="LocalAddress" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localAddress"></a>

```csharp
public string LocalAddress { get; }
```

- *Type:* string

---

##### `LocalGatewayVirtualInterfaceGroupId`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceGroupId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.localGatewayVirtualInterfaceGroupId"></a>

```csharp
public string LocalGatewayVirtualInterfaceGroupId { get; }
```

- *Type:* string

---

##### `OutpostLagId`<sup>Required</sup> <a name="OutpostLagId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.outpostLagId"></a>

```csharp
public string OutpostLagId { get; }
```

- *Type:* string

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerAddress"></a>

```csharp
public string PeerAddress { get; }
```

- *Type:* string

---

##### `PeerBgpAsn`<sup>Required</sup> <a name="PeerBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsn"></a>

```csharp
public double PeerBgpAsn { get; }
```

- *Type:* double

---

##### `PeerBgpAsnExtended`<sup>Required</sup> <a name="PeerBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.peerBgpAsnExtended"></a>

```csharp
public double PeerBgpAsnExtended { get; }
```

- *Type:* double

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.vlan"></a>

```csharp
public double Vlan { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterface.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2LocalGatewayVirtualInterfaceConfig <a name="Ec2LocalGatewayVirtualInterfaceConfig" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2LocalGatewayVirtualInterfaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string LocalAddress,
    string LocalGatewayVirtualInterfaceGroupId,
    string OutpostLagId,
    string PeerAddress,
    double Vlan,
    double PeerBgpAsn = null,
    double PeerBgpAsnExtended = null,
    IResolvable|Ec2LocalGatewayVirtualInterfaceTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.localAddress">LocalAddress</a></code> | <code>string</code> | The local address. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.localGatewayVirtualInterfaceGroupId">LocalGatewayVirtualInterfaceGroupId</a></code> | <code>string</code> | The ID of the virtual interface group. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.outpostLagId">OutpostLagId</a></code> | <code>string</code> | The Outpost LAG ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerAddress">PeerAddress</a></code> | <code>string</code> | The peer address. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.vlan">Vlan</a></code> | <code>double</code> | The ID of the VLAN. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerBgpAsn">PeerBgpAsn</a></code> | <code>double</code> | The peer BGP ASN. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerBgpAsnExtended">PeerBgpAsnExtended</a></code> | <code>double</code> | The extended 32-bit ASN of the BGP peer for use with larger ASN values. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LocalAddress`<sup>Required</sup> <a name="LocalAddress" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.localAddress"></a>

```csharp
public string LocalAddress { get; set; }
```

- *Type:* string

The local address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#local_address Ec2LocalGatewayVirtualInterface#local_address}

---

##### `LocalGatewayVirtualInterfaceGroupId`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceGroupId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.localGatewayVirtualInterfaceGroupId"></a>

```csharp
public string LocalGatewayVirtualInterfaceGroupId { get; set; }
```

- *Type:* string

The ID of the virtual interface group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#local_gateway_virtual_interface_group_id Ec2LocalGatewayVirtualInterface#local_gateway_virtual_interface_group_id}

---

##### `OutpostLagId`<sup>Required</sup> <a name="OutpostLagId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.outpostLagId"></a>

```csharp
public string OutpostLagId { get; set; }
```

- *Type:* string

The Outpost LAG ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#outpost_lag_id Ec2LocalGatewayVirtualInterface#outpost_lag_id}

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerAddress"></a>

```csharp
public string PeerAddress { get; set; }
```

- *Type:* string

The peer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#peer_address Ec2LocalGatewayVirtualInterface#peer_address}

---

##### `Vlan`<sup>Required</sup> <a name="Vlan" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.vlan"></a>

```csharp
public double Vlan { get; set; }
```

- *Type:* double

The ID of the VLAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#vlan Ec2LocalGatewayVirtualInterface#vlan}

---

##### `PeerBgpAsn`<sup>Optional</sup> <a name="PeerBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerBgpAsn"></a>

```csharp
public double PeerBgpAsn { get; set; }
```

- *Type:* double

The peer BGP ASN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#peer_bgp_asn Ec2LocalGatewayVirtualInterface#peer_bgp_asn}

---

##### `PeerBgpAsnExtended`<sup>Optional</sup> <a name="PeerBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.peerBgpAsnExtended"></a>

```csharp
public double PeerBgpAsnExtended { get; set; }
```

- *Type:* double

The extended 32-bit ASN of the BGP peer for use with larger ASN values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#peer_bgp_asn_extended Ec2LocalGatewayVirtualInterface#peer_bgp_asn_extended}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceConfig.property.tags"></a>

```csharp
public IResolvable|Ec2LocalGatewayVirtualInterfaceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#tags Ec2LocalGatewayVirtualInterface#tags}

---

### Ec2LocalGatewayVirtualInterfaceTags <a name="Ec2LocalGatewayVirtualInterfaceTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2LocalGatewayVirtualInterfaceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#key Ec2LocalGatewayVirtualInterface#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/ec2_local_gateway_virtual_interface#value Ec2LocalGatewayVirtualInterface#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2LocalGatewayVirtualInterfaceTagsList <a name="Ec2LocalGatewayVirtualInterfaceTagsList" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2LocalGatewayVirtualInterfaceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.get"></a>

```csharp
private Ec2LocalGatewayVirtualInterfaceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2LocalGatewayVirtualInterfaceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>[]

---


### Ec2LocalGatewayVirtualInterfaceTagsOutputReference <a name="Ec2LocalGatewayVirtualInterfaceTagsOutputReference" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2LocalGatewayVirtualInterfaceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2LocalGatewayVirtualInterfaceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterface.Ec2LocalGatewayVirtualInterfaceTags">Ec2LocalGatewayVirtualInterfaceTags</a>

---



