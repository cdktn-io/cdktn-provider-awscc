# `ec2TransitGatewayMulticastGroupMember` Submodule <a name="`ec2TransitGatewayMulticastGroupMember` Submodule" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayMulticastGroupMember <a name="Ec2TransitGatewayMulticastGroupMember" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_multicast_group_member awscc_ec2_transit_gateway_multicast_group_member}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TransitGatewayMulticastGroupMember(Construct Scope, string Id, Ec2TransitGatewayMulticastGroupMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig">Ec2TransitGatewayMulticastGroupMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig">Ec2TransitGatewayMulticastGroupMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayMulticastGroupMember resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2TransitGatewayMulticastGroupMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2TransitGatewayMulticastGroupMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2TransitGatewayMulticastGroupMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2TransitGatewayMulticastGroupMember.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2TransitGatewayMulticastGroupMember resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayMulticastGroupMember to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayMulticastGroupMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_multicast_group_member#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayMulticastGroupMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.groupMember">GroupMember</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.groupSource">GroupSource</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.memberType">MemberType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.transitGatewayAttachmentId">TransitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.groupIpAddressInput">GroupIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.networkInterfaceIdInput">NetworkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.transitGatewayMulticastDomainIdInput">TransitGatewayMulticastDomainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.groupIpAddress">GroupIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.transitGatewayMulticastDomainId">TransitGatewayMulticastDomainId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GroupMember`<sup>Required</sup> <a name="GroupMember" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.groupMember"></a>

```csharp
public IResolvable GroupMember { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `GroupSource`<sup>Required</sup> <a name="GroupSource" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.groupSource"></a>

```csharp
public IResolvable GroupSource { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MemberType`<sup>Required</sup> <a name="MemberType" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.memberType"></a>

```csharp
public string MemberType { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `TransitGatewayAttachmentId`<sup>Required</sup> <a name="TransitGatewayAttachmentId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.transitGatewayAttachmentId"></a>

```csharp
public string TransitGatewayAttachmentId { get; }
```

- *Type:* string

---

##### `GroupIpAddressInput`<sup>Optional</sup> <a name="GroupIpAddressInput" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.groupIpAddressInput"></a>

```csharp
public string GroupIpAddressInput { get; }
```

- *Type:* string

---

##### `NetworkInterfaceIdInput`<sup>Optional</sup> <a name="NetworkInterfaceIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.networkInterfaceIdInput"></a>

```csharp
public string NetworkInterfaceIdInput { get; }
```

- *Type:* string

---

##### `TransitGatewayMulticastDomainIdInput`<sup>Optional</sup> <a name="TransitGatewayMulticastDomainIdInput" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.transitGatewayMulticastDomainIdInput"></a>

```csharp
public string TransitGatewayMulticastDomainIdInput { get; }
```

- *Type:* string

---

##### `GroupIpAddress`<sup>Required</sup> <a name="GroupIpAddress" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.groupIpAddress"></a>

```csharp
public string GroupIpAddress { get; }
```

- *Type:* string

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; }
```

- *Type:* string

---

##### `TransitGatewayMulticastDomainId`<sup>Required</sup> <a name="TransitGatewayMulticastDomainId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.transitGatewayMulticastDomainId"></a>

```csharp
public string TransitGatewayMulticastDomainId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayMulticastGroupMemberConfig <a name="Ec2TransitGatewayMulticastGroupMemberConfig" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TransitGatewayMulticastGroupMemberConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GroupIpAddress,
    string NetworkInterfaceId,
    string TransitGatewayMulticastDomainId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.groupIpAddress">GroupIpAddress</a></code> | <code>string</code> | The IP address assigned to the transit gateway multicast group. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.networkInterfaceId">NetworkInterfaceId</a></code> | <code>string</code> | The ID of the transit gateway attachment. |
| <code><a href="#@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.transitGatewayMulticastDomainId">TransitGatewayMulticastDomainId</a></code> | <code>string</code> | The ID of the transit gateway multicast domain. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GroupIpAddress`<sup>Required</sup> <a name="GroupIpAddress" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.groupIpAddress"></a>

```csharp
public string GroupIpAddress { get; set; }
```

- *Type:* string

The IP address assigned to the transit gateway multicast group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_multicast_group_member#group_ip_address Ec2TransitGatewayMulticastGroupMember#group_ip_address}

---

##### `NetworkInterfaceId`<sup>Required</sup> <a name="NetworkInterfaceId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.networkInterfaceId"></a>

```csharp
public string NetworkInterfaceId { get; set; }
```

- *Type:* string

The ID of the transit gateway attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_multicast_group_member#network_interface_id Ec2TransitGatewayMulticastGroupMember#network_interface_id}

---

##### `TransitGatewayMulticastDomainId`<sup>Required</sup> <a name="TransitGatewayMulticastDomainId" id="@cdktn/provider-awscc.ec2TransitGatewayMulticastGroupMember.Ec2TransitGatewayMulticastGroupMemberConfig.property.transitGatewayMulticastDomainId"></a>

```csharp
public string TransitGatewayMulticastDomainId { get; set; }
```

- *Type:* string

The ID of the transit gateway multicast domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_transit_gateway_multicast_group_member#transit_gateway_multicast_domain_id Ec2TransitGatewayMulticastGroupMember#transit_gateway_multicast_domain_id}

---



