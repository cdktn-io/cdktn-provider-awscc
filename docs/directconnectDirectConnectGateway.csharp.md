# `directconnectDirectConnectGateway` Submodule <a name="`directconnectDirectConnectGateway` Submodule" id="@cdktn/provider-awscc.directconnectDirectConnectGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectDirectConnectGateway <a name="DirectconnectDirectConnectGateway" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_direct_connect_gateway awscc_directconnect_direct_connect_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectDirectConnectGateway(Construct Scope, string Id, DirectconnectDirectConnectGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig">DirectconnectDirectConnectGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig">DirectconnectDirectConnectGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.resetAmazonSideAsn">ResetAmazonSideAsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.putTags"></a>

```csharp
private void PutTags(IResolvable|DirectconnectDirectConnectGatewayTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a>[]

---

##### `ResetAmazonSideAsn` <a name="ResetAmazonSideAsn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.resetAmazonSideAsn"></a>

```csharp
private void ResetAmazonSideAsn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DirectconnectDirectConnectGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectDirectConnectGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectDirectConnectGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectDirectConnectGateway.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DirectconnectDirectConnectGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DirectconnectDirectConnectGateway resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectconnectDirectConnectGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectconnectDirectConnectGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_direct_connect_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectDirectConnectGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.directConnectGatewayArn">DirectConnectGatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.directConnectGatewayId">DirectConnectGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList">DirectconnectDirectConnectGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.amazonSideAsnInput">AmazonSideAsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.directConnectGatewayNameInput">DirectConnectGatewayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.amazonSideAsn">AmazonSideAsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.directConnectGatewayName">DirectConnectGatewayName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DirectConnectGatewayArn`<sup>Required</sup> <a name="DirectConnectGatewayArn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.directConnectGatewayArn"></a>

```csharp
public string DirectConnectGatewayArn { get; }
```

- *Type:* string

---

##### `DirectConnectGatewayId`<sup>Required</sup> <a name="DirectConnectGatewayId" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.directConnectGatewayId"></a>

```csharp
public string DirectConnectGatewayId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.tags"></a>

```csharp
public DirectconnectDirectConnectGatewayTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList">DirectconnectDirectConnectGatewayTagsList</a>

---

##### `AmazonSideAsnInput`<sup>Optional</sup> <a name="AmazonSideAsnInput" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.amazonSideAsnInput"></a>

```csharp
public string AmazonSideAsnInput { get; }
```

- *Type:* string

---

##### `DirectConnectGatewayNameInput`<sup>Optional</sup> <a name="DirectConnectGatewayNameInput" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.directConnectGatewayNameInput"></a>

```csharp
public string DirectConnectGatewayNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.tagsInput"></a>

```csharp
public IResolvable|DirectconnectDirectConnectGatewayTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a>[]

---

##### `AmazonSideAsn`<sup>Required</sup> <a name="AmazonSideAsn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.amazonSideAsn"></a>

```csharp
public string AmazonSideAsn { get; }
```

- *Type:* string

---

##### `DirectConnectGatewayName`<sup>Required</sup> <a name="DirectConnectGatewayName" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.directConnectGatewayName"></a>

```csharp
public string DirectConnectGatewayName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectDirectConnectGatewayConfig <a name="DirectconnectDirectConnectGatewayConfig" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectDirectConnectGatewayConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DirectConnectGatewayName,
    string AmazonSideAsn = null,
    IResolvable|DirectconnectDirectConnectGatewayTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.directConnectGatewayName">DirectConnectGatewayName</a></code> | <code>string</code> | The name of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.amazonSideAsn">AmazonSideAsn</a></code> | <code>string</code> | The autonomous system number (ASN) for the Amazon side of the connection. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a>[]</code> | The tags associated with the Direct Connect gateway. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DirectConnectGatewayName`<sup>Required</sup> <a name="DirectConnectGatewayName" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.directConnectGatewayName"></a>

```csharp
public string DirectConnectGatewayName { get; set; }
```

- *Type:* string

The name of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_direct_connect_gateway#direct_connect_gateway_name DirectconnectDirectConnectGateway#direct_connect_gateway_name}

---

##### `AmazonSideAsn`<sup>Optional</sup> <a name="AmazonSideAsn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.amazonSideAsn"></a>

```csharp
public string AmazonSideAsn { get; set; }
```

- *Type:* string

The autonomous system number (ASN) for the Amazon side of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_direct_connect_gateway#amazon_side_asn DirectconnectDirectConnectGateway#amazon_side_asn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayConfig.property.tags"></a>

```csharp
public IResolvable|DirectconnectDirectConnectGatewayTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a>[]

The tags associated with the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_direct_connect_gateway#tags DirectconnectDirectConnectGateway#tags}

---

### DirectconnectDirectConnectGatewayTags <a name="DirectconnectDirectConnectGatewayTags" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectDirectConnectGatewayTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_direct_connect_gateway#key DirectconnectDirectConnectGateway#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/directconnect_direct_connect_gateway#value DirectconnectDirectConnectGateway#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectconnectDirectConnectGatewayTagsList <a name="DirectconnectDirectConnectGatewayTagsList" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectDirectConnectGatewayTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.get"></a>

```csharp
private DirectconnectDirectConnectGatewayTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsList.property.internalValue"></a>

```csharp
public IResolvable|DirectconnectDirectConnectGatewayTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a>[]

---


### DirectconnectDirectConnectGatewayTagsOutputReference <a name="DirectconnectDirectConnectGatewayTagsOutputReference" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DirectconnectDirectConnectGatewayTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DirectconnectDirectConnectGatewayTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.directconnectDirectConnectGateway.DirectconnectDirectConnectGatewayTags">DirectconnectDirectConnectGatewayTags</a>

---



