# `vpclatticeResourceGateway` Submodule <a name="`vpclatticeResourceGateway` Submodule" id="@cdktn/provider-awscc.vpclatticeResourceGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpclatticeResourceGateway <a name="VpclatticeResourceGateway" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway awscc_vpclattice_resource_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeResourceGateway(Construct Scope, string Id, VpclatticeResourceGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig">VpclatticeResourceGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig">VpclatticeResourceGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.resetIpv4AddressesPerEni">ResetIpv4AddressesPerEni</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.resetResourceConfigDnsResolution">ResetResourceConfigDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.putTags"></a>

```csharp
private void PutTags(IResolvable|VpclatticeResourceGatewayTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTags">VpclatticeResourceGatewayTags</a>[]

---

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.resetIpAddressType"></a>

```csharp
private void ResetIpAddressType()
```

##### `ResetIpv4AddressesPerEni` <a name="ResetIpv4AddressesPerEni" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.resetIpv4AddressesPerEni"></a>

```csharp
private void ResetIpv4AddressesPerEni()
```

##### `ResetResourceConfigDnsResolution` <a name="ResetResourceConfigDnsResolution" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.resetResourceConfigDnsResolution"></a>

```csharp
private void ResetResourceConfigDnsResolution()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.resetSecurityGroupIds"></a>

```csharp
private void ResetSecurityGroupIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a VpclatticeResourceGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeResourceGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeResourceGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeResourceGateway.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

VpclatticeResourceGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a VpclatticeResourceGateway resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpclatticeResourceGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpclatticeResourceGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the VpclatticeResourceGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.resourceGatewayId">ResourceGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList">VpclatticeResourceGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.ipv4AddressesPerEniInput">Ipv4AddressesPerEniInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.resourceConfigDnsResolutionInput">ResourceConfigDnsResolutionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTags">VpclatticeResourceGatewayTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.vpcIdentifierInput">VpcIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.ipv4AddressesPerEni">Ipv4AddressesPerEni</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.resourceConfigDnsResolution">ResourceConfigDnsResolution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.vpcIdentifier">VpcIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ResourceGatewayId`<sup>Required</sup> <a name="ResourceGatewayId" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.resourceGatewayId"></a>

```csharp
public string ResourceGatewayId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.tags"></a>

```csharp
public VpclatticeResourceGatewayTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList">VpclatticeResourceGatewayTagsList</a>

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.ipAddressTypeInput"></a>

```csharp
public string IpAddressTypeInput { get; }
```

- *Type:* string

---

##### `Ipv4AddressesPerEniInput`<sup>Optional</sup> <a name="Ipv4AddressesPerEniInput" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.ipv4AddressesPerEniInput"></a>

```csharp
public double Ipv4AddressesPerEniInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ResourceConfigDnsResolutionInput`<sup>Optional</sup> <a name="ResourceConfigDnsResolutionInput" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.resourceConfigDnsResolutionInput"></a>

```csharp
public string ResourceConfigDnsResolutionInput { get; }
```

- *Type:* string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.securityGroupIdsInput"></a>

```csharp
public string[] SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.subnetIdsInput"></a>

```csharp
public string[] SubnetIdsInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.tagsInput"></a>

```csharp
public IResolvable|VpclatticeResourceGatewayTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTags">VpclatticeResourceGatewayTags</a>[]

---

##### `VpcIdentifierInput`<sup>Optional</sup> <a name="VpcIdentifierInput" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.vpcIdentifierInput"></a>

```csharp
public string VpcIdentifierInput { get; }
```

- *Type:* string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; }
```

- *Type:* string

---

##### `Ipv4AddressesPerEni`<sup>Required</sup> <a name="Ipv4AddressesPerEni" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.ipv4AddressesPerEni"></a>

```csharp
public double Ipv4AddressesPerEni { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ResourceConfigDnsResolution`<sup>Required</sup> <a name="ResourceConfigDnsResolution" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.resourceConfigDnsResolution"></a>

```csharp
public string ResourceConfigDnsResolution { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `VpcIdentifier`<sup>Required</sup> <a name="VpcIdentifier" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.vpcIdentifier"></a>

```csharp
public string VpcIdentifier { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpclatticeResourceGatewayConfig <a name="VpclatticeResourceGatewayConfig" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeResourceGatewayConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string[] SubnetIds,
    string VpcIdentifier,
    string IpAddressType = null,
    double Ipv4AddressesPerEni = null,
    string ResourceConfigDnsResolution = null,
    string[] SecurityGroupIds = null,
    IResolvable|VpclatticeResourceGatewayTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway#name VpclatticeResourceGateway#name}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | The ID of one or more subnets in which to create an endpoint network interface. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.vpcIdentifier">VpcIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway#vpc_identifier VpclatticeResourceGateway#vpc_identifier}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.ipAddressType">IpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway#ip_address_type VpclatticeResourceGateway#ip_address_type}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.ipv4AddressesPerEni">Ipv4AddressesPerEni</a></code> | <code>double</code> | The number of IPv4 addresses to allocate per ENI for the resource gateway. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.resourceConfigDnsResolution">ResourceConfigDnsResolution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway#resource_config_dns_resolution VpclatticeResourceGateway#resource_config_dns_resolution}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | The ID of one or more security groups to associate with the endpoint network interface. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTags">VpclatticeResourceGatewayTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway#tags VpclatticeResourceGateway#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway#name VpclatticeResourceGateway#name}.

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; set; }
```

- *Type:* string[]

The ID of one or more subnets in which to create an endpoint network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway#subnet_ids VpclatticeResourceGateway#subnet_ids}

---

##### `VpcIdentifier`<sup>Required</sup> <a name="VpcIdentifier" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.vpcIdentifier"></a>

```csharp
public string VpcIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway#vpc_identifier VpclatticeResourceGateway#vpc_identifier}.

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.ipAddressType"></a>

```csharp
public string IpAddressType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway#ip_address_type VpclatticeResourceGateway#ip_address_type}.

---

##### `Ipv4AddressesPerEni`<sup>Optional</sup> <a name="Ipv4AddressesPerEni" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.ipv4AddressesPerEni"></a>

```csharp
public double Ipv4AddressesPerEni { get; set; }
```

- *Type:* double

The number of IPv4 addresses to allocate per ENI for the resource gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway#ipv_4_addresses_per_eni VpclatticeResourceGateway#ipv_4_addresses_per_eni}

---

##### `ResourceConfigDnsResolution`<sup>Optional</sup> <a name="ResourceConfigDnsResolution" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.resourceConfigDnsResolution"></a>

```csharp
public string ResourceConfigDnsResolution { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway#resource_config_dns_resolution VpclatticeResourceGateway#resource_config_dns_resolution}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; set; }
```

- *Type:* string[]

The ID of one or more security groups to associate with the endpoint network interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway#security_group_ids VpclatticeResourceGateway#security_group_ids}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayConfig.property.tags"></a>

```csharp
public IResolvable|VpclatticeResourceGatewayTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTags">VpclatticeResourceGatewayTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway#tags VpclatticeResourceGateway#tags}.

---

### VpclatticeResourceGatewayTags <a name="VpclatticeResourceGatewayTags" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeResourceGatewayTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway#key VpclatticeResourceGateway#key}. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway#value VpclatticeResourceGateway#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway#key VpclatticeResourceGateway#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/vpclattice_resource_gateway#value VpclatticeResourceGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpclatticeResourceGatewayTagsList <a name="VpclatticeResourceGatewayTagsList" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeResourceGatewayTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.get"></a>

```csharp
private VpclatticeResourceGatewayTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTags">VpclatticeResourceGatewayTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsList.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeResourceGatewayTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTags">VpclatticeResourceGatewayTags</a>[]

---


### VpclatticeResourceGatewayTagsOutputReference <a name="VpclatticeResourceGatewayTagsOutputReference" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new VpclatticeResourceGatewayTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTags">VpclatticeResourceGatewayTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|VpclatticeResourceGatewayTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.vpclatticeResourceGateway.VpclatticeResourceGatewayTags">VpclatticeResourceGatewayTags</a>

---



