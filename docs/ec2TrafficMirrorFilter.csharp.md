# `ec2TrafficMirrorFilter` Submodule <a name="`ec2TrafficMirrorFilter` Submodule" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TrafficMirrorFilter <a name="Ec2TrafficMirrorFilter" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_traffic_mirror_filter awscc_ec2_traffic_mirror_filter}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TrafficMirrorFilter(Construct Scope, string Id, Ec2TrafficMirrorFilterConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig">Ec2TrafficMirrorFilterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig">Ec2TrafficMirrorFilterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.resetNetworkServices">ResetNetworkServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2TrafficMirrorFilterTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTags">Ec2TrafficMirrorFilterTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetNetworkServices` <a name="ResetNetworkServices" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.resetNetworkServices"></a>

```csharp
private void ResetNetworkServices()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TrafficMirrorFilter resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2TrafficMirrorFilter.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2TrafficMirrorFilter.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2TrafficMirrorFilter.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2TrafficMirrorFilter.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2TrafficMirrorFilter resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TrafficMirrorFilter to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TrafficMirrorFilter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_traffic_mirror_filter#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TrafficMirrorFilter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList">Ec2TrafficMirrorFilterTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.trafficMirrorFilterId">TrafficMirrorFilterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.networkServicesInput">NetworkServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTags">Ec2TrafficMirrorFilterTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.networkServices">NetworkServices</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.tags"></a>

```csharp
public Ec2TrafficMirrorFilterTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList">Ec2TrafficMirrorFilterTagsList</a>

---

##### `TrafficMirrorFilterId`<sup>Required</sup> <a name="TrafficMirrorFilterId" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.trafficMirrorFilterId"></a>

```csharp
public string TrafficMirrorFilterId { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NetworkServicesInput`<sup>Optional</sup> <a name="NetworkServicesInput" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.networkServicesInput"></a>

```csharp
public string[] NetworkServicesInput { get; }
```

- *Type:* string[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.tagsInput"></a>

```csharp
public IResolvable|Ec2TrafficMirrorFilterTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTags">Ec2TrafficMirrorFilterTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `NetworkServices`<sup>Required</sup> <a name="NetworkServices" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.networkServices"></a>

```csharp
public string[] NetworkServices { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilter.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TrafficMirrorFilterConfig <a name="Ec2TrafficMirrorFilterConfig" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TrafficMirrorFilterConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Description = null,
    string[] NetworkServices = null,
    IResolvable|Ec2TrafficMirrorFilterTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.description">Description</a></code> | <code>string</code> | The description of a traffic mirror filter. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.networkServices">NetworkServices</a></code> | <code>string[]</code> | The network service that is associated with the traffic mirror filter. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTags">Ec2TrafficMirrorFilterTags</a>[]</code> | The tags for a traffic mirror filter. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of a traffic mirror filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_traffic_mirror_filter#description Ec2TrafficMirrorFilter#description}

---

##### `NetworkServices`<sup>Optional</sup> <a name="NetworkServices" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.networkServices"></a>

```csharp
public string[] NetworkServices { get; set; }
```

- *Type:* string[]

The network service that is associated with the traffic mirror filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_traffic_mirror_filter#network_services Ec2TrafficMirrorFilter#network_services}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterConfig.property.tags"></a>

```csharp
public IResolvable|Ec2TrafficMirrorFilterTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTags">Ec2TrafficMirrorFilterTags</a>[]

The tags for a traffic mirror filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_traffic_mirror_filter#tags Ec2TrafficMirrorFilter#tags}

---

### Ec2TrafficMirrorFilterTags <a name="Ec2TrafficMirrorFilterTags" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TrafficMirrorFilterTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_traffic_mirror_filter#key Ec2TrafficMirrorFilter#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_traffic_mirror_filter#value Ec2TrafficMirrorFilter#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_traffic_mirror_filter#key Ec2TrafficMirrorFilter#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_traffic_mirror_filter#value Ec2TrafficMirrorFilter#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TrafficMirrorFilterTagsList <a name="Ec2TrafficMirrorFilterTagsList" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TrafficMirrorFilterTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.get"></a>

```csharp
private Ec2TrafficMirrorFilterTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTags">Ec2TrafficMirrorFilterTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2TrafficMirrorFilterTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTags">Ec2TrafficMirrorFilterTags</a>[]

---


### Ec2TrafficMirrorFilterTagsOutputReference <a name="Ec2TrafficMirrorFilterTagsOutputReference" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2TrafficMirrorFilterTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTags">Ec2TrafficMirrorFilterTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2TrafficMirrorFilterTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2TrafficMirrorFilter.Ec2TrafficMirrorFilterTags">Ec2TrafficMirrorFilterTags</a>

---



