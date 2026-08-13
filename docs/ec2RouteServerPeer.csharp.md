# `ec2RouteServerPeer` Submodule <a name="`ec2RouteServerPeer` Submodule" id="@cdktn/provider-awscc.ec2RouteServerPeer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2RouteServerPeer <a name="Ec2RouteServerPeer" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_route_server_peer awscc_ec2_route_server_peer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2RouteServerPeer(Construct Scope, string Id, Ec2RouteServerPeerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig">Ec2RouteServerPeerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig">Ec2RouteServerPeerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putBgpOptions">PutBgpOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBgpOptions` <a name="PutBgpOptions" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putBgpOptions"></a>

```csharp
private void PutBgpOptions(Ec2RouteServerPeerBgpOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putBgpOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putTags"></a>

```csharp
private void PutTags(IResolvable|Ec2RouteServerPeerTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2RouteServerPeer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2RouteServerPeer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2RouteServerPeer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2RouteServerPeer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Ec2RouteServerPeer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Ec2RouteServerPeer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2RouteServerPeer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2RouteServerPeer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_route_server_peer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Ec2RouteServerPeer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.bgpOptions">BgpOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference">Ec2RouteServerPeerBgpOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.endpointEniAddress">EndpointEniAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.endpointEniId">EndpointEniId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerId">RouteServerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerPeerId">RouteServerPeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList">Ec2RouteServerPeerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.vpcId">VpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.bgpOptionsInput">BgpOptionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.peerAddressInput">PeerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerEndpointIdInput">RouteServerEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.peerAddress">PeerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerEndpointId">RouteServerEndpointId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `BgpOptions`<sup>Required</sup> <a name="BgpOptions" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.bgpOptions"></a>

```csharp
public Ec2RouteServerPeerBgpOptionsOutputReference BgpOptions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference">Ec2RouteServerPeerBgpOptionsOutputReference</a>

---

##### `EndpointEniAddress`<sup>Required</sup> <a name="EndpointEniAddress" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.endpointEniAddress"></a>

```csharp
public string EndpointEniAddress { get; }
```

- *Type:* string

---

##### `EndpointEniId`<sup>Required</sup> <a name="EndpointEniId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.endpointEniId"></a>

```csharp
public string EndpointEniId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RouteServerId`<sup>Required</sup> <a name="RouteServerId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerId"></a>

```csharp
public string RouteServerId { get; }
```

- *Type:* string

---

##### `RouteServerPeerId`<sup>Required</sup> <a name="RouteServerPeerId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerPeerId"></a>

```csharp
public string RouteServerPeerId { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.tags"></a>

```csharp
public Ec2RouteServerPeerTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList">Ec2RouteServerPeerTagsList</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.vpcId"></a>

```csharp
public string VpcId { get; }
```

- *Type:* string

---

##### `BgpOptionsInput`<sup>Optional</sup> <a name="BgpOptionsInput" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.bgpOptionsInput"></a>

```csharp
public IResolvable|Ec2RouteServerPeerBgpOptions BgpOptionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a>

---

##### `PeerAddressInput`<sup>Optional</sup> <a name="PeerAddressInput" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.peerAddressInput"></a>

```csharp
public string PeerAddressInput { get; }
```

- *Type:* string

---

##### `RouteServerEndpointIdInput`<sup>Optional</sup> <a name="RouteServerEndpointIdInput" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerEndpointIdInput"></a>

```csharp
public string RouteServerEndpointIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.tagsInput"></a>

```csharp
public IResolvable|Ec2RouteServerPeerTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>[]

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.peerAddress"></a>

```csharp
public string PeerAddress { get; }
```

- *Type:* string

---

##### `RouteServerEndpointId`<sup>Required</sup> <a name="RouteServerEndpointId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.routeServerEndpointId"></a>

```csharp
public string RouteServerEndpointId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2RouteServerPeerBgpOptions <a name="Ec2RouteServerPeerBgpOptions" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2RouteServerPeerBgpOptions {
    double PeerAsn = null,
    string PeerLivenessDetection = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions.property.peerAsn">PeerAsn</a></code> | <code>double</code> | BGP ASN of the Route Server Peer. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions.property.peerLivenessDetection">PeerLivenessDetection</a></code> | <code>string</code> | BGP Liveness Detection. |

---

##### `PeerAsn`<sup>Optional</sup> <a name="PeerAsn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions.property.peerAsn"></a>

```csharp
public double PeerAsn { get; set; }
```

- *Type:* double

BGP ASN of the Route Server Peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_route_server_peer#peer_asn Ec2RouteServerPeer#peer_asn}

---

##### `PeerLivenessDetection`<sup>Optional</sup> <a name="PeerLivenessDetection" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions.property.peerLivenessDetection"></a>

```csharp
public string PeerLivenessDetection { get; set; }
```

- *Type:* string

BGP Liveness Detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_route_server_peer#peer_liveness_detection Ec2RouteServerPeer#peer_liveness_detection}

---

### Ec2RouteServerPeerConfig <a name="Ec2RouteServerPeerConfig" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2RouteServerPeerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    Ec2RouteServerPeerBgpOptions BgpOptions,
    string PeerAddress,
    string RouteServerEndpointId,
    IResolvable|Ec2RouteServerPeerTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.bgpOptions">BgpOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a></code> | BGP Options. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.peerAddress">PeerAddress</a></code> | <code>string</code> | IP address of the Route Server Peer. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.routeServerEndpointId">RouteServerEndpointId</a></code> | <code>string</code> | Route Server Endpoint ID. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `BgpOptions`<sup>Required</sup> <a name="BgpOptions" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.bgpOptions"></a>

```csharp
public Ec2RouteServerPeerBgpOptions BgpOptions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a>

BGP Options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_route_server_peer#bgp_options Ec2RouteServerPeer#bgp_options}

---

##### `PeerAddress`<sup>Required</sup> <a name="PeerAddress" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.peerAddress"></a>

```csharp
public string PeerAddress { get; set; }
```

- *Type:* string

IP address of the Route Server Peer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_route_server_peer#peer_address Ec2RouteServerPeer#peer_address}

---

##### `RouteServerEndpointId`<sup>Required</sup> <a name="RouteServerEndpointId" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.routeServerEndpointId"></a>

```csharp
public string RouteServerEndpointId { get; set; }
```

- *Type:* string

Route Server Endpoint ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_route_server_peer#route_server_endpoint_id Ec2RouteServerPeer#route_server_endpoint_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerConfig.property.tags"></a>

```csharp
public IResolvable|Ec2RouteServerPeerTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_route_server_peer#tags Ec2RouteServerPeer#tags}

---

### Ec2RouteServerPeerTags <a name="Ec2RouteServerPeerTags" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2RouteServerPeerTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_route_server_peer#key Ec2RouteServerPeer#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_route_server_peer#value Ec2RouteServerPeer#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2RouteServerPeerBgpOptionsOutputReference <a name="Ec2RouteServerPeerBgpOptionsOutputReference" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2RouteServerPeerBgpOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resetPeerAsn">ResetPeerAsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resetPeerLivenessDetection">ResetPeerLivenessDetection</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeerAsn` <a name="ResetPeerAsn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resetPeerAsn"></a>

```csharp
private void ResetPeerAsn()
```

##### `ResetPeerLivenessDetection` <a name="ResetPeerLivenessDetection" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.resetPeerLivenessDetection"></a>

```csharp
private void ResetPeerLivenessDetection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerAsnInput">PeerAsnInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetectionInput">PeerLivenessDetectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerAsn">PeerAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetection">PeerLivenessDetection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeerAsnInput`<sup>Optional</sup> <a name="PeerAsnInput" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerAsnInput"></a>

```csharp
public double PeerAsnInput { get; }
```

- *Type:* double

---

##### `PeerLivenessDetectionInput`<sup>Optional</sup> <a name="PeerLivenessDetectionInput" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetectionInput"></a>

```csharp
public string PeerLivenessDetectionInput { get; }
```

- *Type:* string

---

##### `PeerAsn`<sup>Required</sup> <a name="PeerAsn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerAsn"></a>

```csharp
public double PeerAsn { get; }
```

- *Type:* double

---

##### `PeerLivenessDetection`<sup>Required</sup> <a name="PeerLivenessDetection" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.peerLivenessDetection"></a>

```csharp
public string PeerLivenessDetection { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2RouteServerPeerBgpOptions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerBgpOptions">Ec2RouteServerPeerBgpOptions</a>

---


### Ec2RouteServerPeerTagsList <a name="Ec2RouteServerPeerTagsList" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2RouteServerPeerTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.get"></a>

```csharp
private Ec2RouteServerPeerTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsList.property.internalValue"></a>

```csharp
public IResolvable|Ec2RouteServerPeerTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>[]

---


### Ec2RouteServerPeerTagsOutputReference <a name="Ec2RouteServerPeerTagsOutputReference" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Ec2RouteServerPeerTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Ec2RouteServerPeerTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ec2RouteServerPeer.Ec2RouteServerPeerTags">Ec2RouteServerPeerTags</a>

---



