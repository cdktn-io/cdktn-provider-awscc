# `ec2LocalGatewayRouteTable` Submodule <a name="`ec2LocalGatewayRouteTable` Submodule" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2LocalGatewayRouteTable <a name="Ec2LocalGatewayRouteTable" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table awscc_ec2_local_gateway_route_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2LocalGatewayRouteTable(Construct Scope, string Id, Ec2LocalGatewayRouteTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig">Ec2LocalGatewayRouteTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig">Ec2LocalGatewayRouteTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2LocalGatewayRouteTableTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTags">Ec2LocalGatewayRouteTableTags</a>[]

---

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.resetMode"></a>

```csharp
private void ResetMode()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2LocalGatewayRouteTable resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2LocalGatewayRouteTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2LocalGatewayRouteTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2LocalGatewayRouteTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2LocalGatewayRouteTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2LocalGatewayRouteTable resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2LocalGatewayRouteTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2LocalGatewayRouteTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2LocalGatewayRouteTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.localGatewayRouteTableArn">LocalGatewayRouteTableArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.localGatewayRouteTableId">LocalGatewayRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.outpostArn">OutpostArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList">Ec2LocalGatewayRouteTableTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.localGatewayIdInput">LocalGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTags">Ec2LocalGatewayRouteTableTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.localGatewayId">LocalGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.mode">Mode</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LocalGatewayRouteTableArn`<sup>Required</sup> <a name="LocalGatewayRouteTableArn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.localGatewayRouteTableArn"></a>

```csharp
public string LocalGatewayRouteTableArn { get; }
```

- *Type:* string

---

##### `LocalGatewayRouteTableId`<sup>Required</sup> <a name="LocalGatewayRouteTableId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.localGatewayRouteTableId"></a>

```csharp
public string LocalGatewayRouteTableId { get; }
```

- *Type:* string

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.outpostArn"></a>

```csharp
public string OutpostArn { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.tags"></a>

```csharp
public Ec2LocalGatewayRouteTableTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList">Ec2LocalGatewayRouteTableTagsList</a>

---

##### `LocalGatewayIdInput`<sup>Optional</sup> <a name="LocalGatewayIdInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.localGatewayIdInput"></a>

```csharp
public string LocalGatewayIdInput { get; }
```

- *Type:* string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.tagsInput"></a>

```csharp
public IResolvable|Ec2LocalGatewayRouteTableTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTags">Ec2LocalGatewayRouteTableTags</a>[]

---

##### `LocalGatewayId`<sup>Required</sup> <a name="LocalGatewayId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.localGatewayId"></a>

```csharp
public string LocalGatewayId { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2LocalGatewayRouteTableConfig <a name="Ec2LocalGatewayRouteTableConfig" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2LocalGatewayRouteTableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string LocalGatewayId,
    string Mode = null,
    IResolvable|Ec2LocalGatewayRouteTableTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.localGatewayId">LocalGatewayId</a></code> | <code>string</code> | The ID of the local gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.mode">Mode</a></code> | <code>string</code> | The mode of the local gateway route table. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTags">Ec2LocalGatewayRouteTableTags</a>[]</code> | The tags for the local gateway route table. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `LocalGatewayId`<sup>Required</sup> <a name="LocalGatewayId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.localGatewayId"></a>

```csharp
public string LocalGatewayId { get; set; }
```

- *Type:* string

The ID of the local gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table#local_gateway_id Ec2LocalGatewayRouteTable#local_gateway_id}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

The mode of the local gateway route table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table#mode Ec2LocalGatewayRouteTable#mode}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableConfig.property.tags"></a>

```csharp
public IResolvable|Ec2LocalGatewayRouteTableTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTags">Ec2LocalGatewayRouteTableTags</a>[]

The tags for the local gateway route table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table#tags Ec2LocalGatewayRouteTable#tags}

---

### Ec2LocalGatewayRouteTableTags <a name="Ec2LocalGatewayRouteTableTags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2LocalGatewayRouteTableTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table#key Ec2LocalGatewayRouteTable#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table#value Ec2LocalGatewayRouteTable#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table#key Ec2LocalGatewayRouteTable#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_route_table#value Ec2LocalGatewayRouteTable#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2LocalGatewayRouteTableTagsList <a name="Ec2LocalGatewayRouteTableTagsList" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2LocalGatewayRouteTableTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.get"></a>

```csharp
private Ec2LocalGatewayRouteTableTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTags">Ec2LocalGatewayRouteTableTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2LocalGatewayRouteTableTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTags">Ec2LocalGatewayRouteTableTags</a>[]

---


### Ec2LocalGatewayRouteTableTagsOutputReference <a name="Ec2LocalGatewayRouteTableTagsOutputReference" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2LocalGatewayRouteTableTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTags">Ec2LocalGatewayRouteTableTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2LocalGatewayRouteTableTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTable.Ec2LocalGatewayRouteTableTags">Ec2LocalGatewayRouteTableTags</a>

---



