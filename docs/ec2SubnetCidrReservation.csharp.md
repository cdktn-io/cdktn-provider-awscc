# `ec2SubnetCidrReservation` Submodule <a name="`ec2SubnetCidrReservation` Submodule" id="@cdktn/provider-awscc.ec2SubnetCidrReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2SubnetCidrReservation <a name="Ec2SubnetCidrReservation" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation awscc_ec2_subnet_cidr_reservation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SubnetCidrReservation(Construct Scope, string Id, Ec2SubnetCidrReservationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig">Ec2SubnetCidrReservationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig">Ec2SubnetCidrReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2SubnetCidrReservationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2SubnetCidrReservation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2SubnetCidrReservation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2SubnetCidrReservation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2SubnetCidrReservation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2SubnetCidrReservation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2SubnetCidrReservation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2SubnetCidrReservation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2SubnetCidrReservation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2SubnetCidrReservation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.ownerId">OwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.subnetCidrReservationId">SubnetCidrReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList">Ec2SubnetCidrReservationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.cidrInput">CidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.reservationTypeInput">ReservationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.cidr">Cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.reservationType">ReservationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.ownerId"></a>

```csharp
public string OwnerId { get; }
```

- *Type:* string

---

##### `SubnetCidrReservationId`<sup>Required</sup> <a name="SubnetCidrReservationId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.subnetCidrReservationId"></a>

```csharp
public string SubnetCidrReservationId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.tags"></a>

```csharp
public Ec2SubnetCidrReservationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList">Ec2SubnetCidrReservationTagsList</a>

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.cidrInput"></a>

```csharp
public string CidrInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ReservationTypeInput`<sup>Optional</sup> <a name="ReservationTypeInput" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.reservationTypeInput"></a>

```csharp
public string ReservationTypeInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.tagsInput"></a>

```csharp
public IResolvable|Ec2SubnetCidrReservationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>[]

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.cidr"></a>

```csharp
public string Cidr { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ReservationType`<sup>Required</sup> <a name="ReservationType" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.reservationType"></a>

```csharp
public string ReservationType { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2SubnetCidrReservationConfig <a name="Ec2SubnetCidrReservationConfig" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SubnetCidrReservationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Cidr,
    string ReservationType,
    string SubnetId,
    string Description = null,
    IResolvable|Ec2SubnetCidrReservationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.cidr">Cidr</a></code> | <code>string</code> | The IPv4 or IPv6 CIDR range to reserve. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.reservationType">ReservationType</a></code> | <code>string</code> | The type of reservation. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | The identifier of the subnet the CIDR range is reserved in. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.description">Description</a></code> | <code>string</code> | The description of the subnet CIDR reservation. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>[]</code> | The tags assigned to the subnet CIDR reservation. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.cidr"></a>

```csharp
public string Cidr { get; set; }
```

- *Type:* string

The IPv4 or IPv6 CIDR range to reserve.

Must lie inside the subnet's CIDR block and must not overlap an existing reservation. Supply an IPv6 range exactly as the service returns it: Amazon EC2 stores an IPv6 CIDR in RFC 5952 compressed form, and a noncanonical spelling of the same range is reported as drift because this property is create-only and read back.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#cidr Ec2SubnetCidrReservation#cidr}

---

##### `ReservationType`<sup>Required</sup> <a name="ReservationType" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.reservationType"></a>

```csharp
public string ReservationType { get; set; }
```

- *Type:* string

The type of reservation.

A prefix reservation is used for an IPv6 prefix delegated to a network interface; an explicit reservation is used for a range that Amazon EC2 must not assign automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#reservation_type Ec2SubnetCidrReservation#reservation_type}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

The identifier of the subnet the CIDR range is reserved in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#subnet_id Ec2SubnetCidrReservation#subnet_id}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the subnet CIDR reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#description Ec2SubnetCidrReservation#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationConfig.property.tags"></a>

```csharp
public IResolvable|Ec2SubnetCidrReservationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>[]

The tags assigned to the subnet CIDR reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#tags Ec2SubnetCidrReservation#tags}

---

### Ec2SubnetCidrReservationTags <a name="Ec2SubnetCidrReservationTags" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SubnetCidrReservationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags.property.key">Key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. Amazon EC2 accepts a maximum of 256 Unicode characters. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the tag.

Amazon EC2 reserves keys beginning with 'aws:' for internal use and rejects them for this resource. Amazon EC2 accepts a maximum of 128 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#key Ec2SubnetCidrReservation#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag. Amazon EC2 accepts a maximum of 256 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/ec2_subnet_cidr_reservation#value Ec2SubnetCidrReservation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2SubnetCidrReservationTagsList <a name="Ec2SubnetCidrReservationTagsList" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SubnetCidrReservationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.get"></a>

```csharp
private Ec2SubnetCidrReservationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2SubnetCidrReservationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>[]

---


### Ec2SubnetCidrReservationTagsOutputReference <a name="Ec2SubnetCidrReservationTagsOutputReference" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2SubnetCidrReservationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2SubnetCidrReservationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2SubnetCidrReservation.Ec2SubnetCidrReservationTags">Ec2SubnetCidrReservationTags</a>

---



