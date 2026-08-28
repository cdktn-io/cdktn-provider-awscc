# `iotsitewiseGateway` Submodule <a name="`iotsitewiseGateway` Submodule" id="@cdktn/provider-awscc.iotsitewiseGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewiseGateway <a name="IotsitewiseGateway" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_gateway awscc_iotsitewise_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseGateway(Construct Scope, string Id, IotsitewiseGatewayConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig">IotsitewiseGatewayConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig">IotsitewiseGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayCapabilitySummaries">PutGatewayCapabilitySummaries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayPlatform">PutGatewayPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetGatewayCapabilitySummaries">ResetGatewayCapabilitySummaries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetGatewayVersion">ResetGatewayVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGatewayCapabilitySummaries` <a name="PutGatewayCapabilitySummaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayCapabilitySummaries"></a>

```csharp
private void PutGatewayCapabilitySummaries(IResolvable|IotsitewiseGatewayGatewayCapabilitySummaries[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayCapabilitySummaries.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>[]

---

##### `PutGatewayPlatform` <a name="PutGatewayPlatform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayPlatform"></a>

```csharp
private void PutGatewayPlatform(IotsitewiseGatewayGatewayPlatform Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayPlatform.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putTags"></a>

```csharp
private void PutTags(IResolvable|IotsitewiseGatewayTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>[]

---

##### `ResetGatewayCapabilitySummaries` <a name="ResetGatewayCapabilitySummaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetGatewayCapabilitySummaries"></a>

```csharp
private void ResetGatewayCapabilitySummaries()
```

##### `ResetGatewayVersion` <a name="ResetGatewayVersion" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetGatewayVersion"></a>

```csharp
private void ResetGatewayVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotsitewiseGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotsitewiseGateway.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotsitewiseGateway.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotsitewiseGateway.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

IotsitewiseGateway.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a IotsitewiseGateway resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotsitewiseGateway to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotsitewiseGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_gateway#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewiseGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayCapabilitySummaries">GatewayCapabilitySummaries</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList">IotsitewiseGatewayGatewayCapabilitySummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayId">GatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayPlatform">GatewayPlatform</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference">IotsitewiseGatewayGatewayPlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList">IotsitewiseGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayCapabilitySummariesInput">GatewayCapabilitySummariesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayNameInput">GatewayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayPlatformInput">GatewayPlatformInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayVersionInput">GatewayVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayName">GatewayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayVersion">GatewayVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GatewayCapabilitySummaries`<sup>Required</sup> <a name="GatewayCapabilitySummaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayCapabilitySummaries"></a>

```csharp
public IotsitewiseGatewayGatewayCapabilitySummariesList GatewayCapabilitySummaries { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList">IotsitewiseGatewayGatewayCapabilitySummariesList</a>

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayId"></a>

```csharp
public string GatewayId { get; }
```

- *Type:* string

---

##### `GatewayPlatform`<sup>Required</sup> <a name="GatewayPlatform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayPlatform"></a>

```csharp
public IotsitewiseGatewayGatewayPlatformOutputReference GatewayPlatform { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference">IotsitewiseGatewayGatewayPlatformOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tags"></a>

```csharp
public IotsitewiseGatewayTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList">IotsitewiseGatewayTagsList</a>

---

##### `GatewayCapabilitySummariesInput`<sup>Optional</sup> <a name="GatewayCapabilitySummariesInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayCapabilitySummariesInput"></a>

```csharp
public IResolvable|IotsitewiseGatewayGatewayCapabilitySummaries[] GatewayCapabilitySummariesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>[]

---

##### `GatewayNameInput`<sup>Optional</sup> <a name="GatewayNameInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayNameInput"></a>

```csharp
public string GatewayNameInput { get; }
```

- *Type:* string

---

##### `GatewayPlatformInput`<sup>Optional</sup> <a name="GatewayPlatformInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayPlatformInput"></a>

```csharp
public IResolvable|IotsitewiseGatewayGatewayPlatform GatewayPlatformInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a>

---

##### `GatewayVersionInput`<sup>Optional</sup> <a name="GatewayVersionInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayVersionInput"></a>

```csharp
public string GatewayVersionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tagsInput"></a>

```csharp
public IResolvable|IotsitewiseGatewayTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>[]

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayName"></a>

```csharp
public string GatewayName { get; }
```

- *Type:* string

---

##### `GatewayVersion`<sup>Required</sup> <a name="GatewayVersion" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayVersion"></a>

```csharp
public string GatewayVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewiseGatewayConfig <a name="IotsitewiseGatewayConfig" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseGatewayConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string GatewayName,
    IotsitewiseGatewayGatewayPlatform GatewayPlatform,
    IResolvable|IotsitewiseGatewayGatewayCapabilitySummaries[] GatewayCapabilitySummaries = null,
    string GatewayVersion = null,
    IResolvable|IotsitewiseGatewayTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayName">GatewayName</a></code> | <code>string</code> | A unique, friendly name for the gateway. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayPlatform">GatewayPlatform</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a></code> | The gateway's platform. You can only specify one platform in a gateway. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayCapabilitySummaries">GatewayCapabilitySummaries</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>[]</code> | A list of gateway capability summaries that each contain a namespace and status. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayVersion">GatewayVersion</a></code> | <code>string</code> | The version of the gateway you want to create. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>[]</code> | A list of key-value pairs that contain metadata for the gateway. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayName"></a>

```csharp
public string GatewayName { get; set; }
```

- *Type:* string

A unique, friendly name for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_gateway#gateway_name IotsitewiseGateway#gateway_name}

---

##### `GatewayPlatform`<sup>Required</sup> <a name="GatewayPlatform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayPlatform"></a>

```csharp
public IotsitewiseGatewayGatewayPlatform GatewayPlatform { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a>

The gateway's platform. You can only specify one platform in a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_gateway#gateway_platform IotsitewiseGateway#gateway_platform}

---

##### `GatewayCapabilitySummaries`<sup>Optional</sup> <a name="GatewayCapabilitySummaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayCapabilitySummaries"></a>

```csharp
public IResolvable|IotsitewiseGatewayGatewayCapabilitySummaries[] GatewayCapabilitySummaries { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>[]

A list of gateway capability summaries that each contain a namespace and status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_gateway#gateway_capability_summaries IotsitewiseGateway#gateway_capability_summaries}

---

##### `GatewayVersion`<sup>Optional</sup> <a name="GatewayVersion" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayVersion"></a>

```csharp
public string GatewayVersion { get; set; }
```

- *Type:* string

The version of the gateway you want to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_gateway#gateway_version IotsitewiseGateway#gateway_version}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.tags"></a>

```csharp
public IResolvable|IotsitewiseGatewayTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>[]

A list of key-value pairs that contain metadata for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_gateway#tags IotsitewiseGateway#tags}

---

### IotsitewiseGatewayGatewayCapabilitySummaries <a name="IotsitewiseGatewayGatewayCapabilitySummaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseGatewayGatewayCapabilitySummaries {
    string CapabilityConfiguration = null,
    string CapabilityNamespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.property.capabilityConfiguration">CapabilityConfiguration</a></code> | <code>string</code> | The JSON document that defines the gateway capability's configuration. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.property.capabilityNamespace">CapabilityNamespace</a></code> | <code>string</code> | The namespace of the capability configuration. |

---

##### `CapabilityConfiguration`<sup>Optional</sup> <a name="CapabilityConfiguration" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.property.capabilityConfiguration"></a>

```csharp
public string CapabilityConfiguration { get; set; }
```

- *Type:* string

The JSON document that defines the gateway capability's configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_gateway#capability_configuration IotsitewiseGateway#capability_configuration}

---

##### `CapabilityNamespace`<sup>Optional</sup> <a name="CapabilityNamespace" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.property.capabilityNamespace"></a>

```csharp
public string CapabilityNamespace { get; set; }
```

- *Type:* string

The namespace of the capability configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_gateway#capability_namespace IotsitewiseGateway#capability_namespace}

---

### IotsitewiseGatewayGatewayPlatform <a name="IotsitewiseGatewayGatewayPlatform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseGatewayGatewayPlatform {
    IotsitewiseGatewayGatewayPlatformGreengrassV2 GreengrassV2 = null,
    IotsitewiseGatewayGatewayPlatformSiemensIe SiemensIe = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.property.greengrassV2">GreengrassV2</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a></code> | A gateway that runs on AWS IoT Greengrass V2. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.property.siemensIe">SiemensIe</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a></code> | A gateway that runs on Siemens Industrial Edge. |

---

##### `GreengrassV2`<sup>Optional</sup> <a name="GreengrassV2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.property.greengrassV2"></a>

```csharp
public IotsitewiseGatewayGatewayPlatformGreengrassV2 GreengrassV2 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a>

A gateway that runs on AWS IoT Greengrass V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_gateway#greengrass_v2 IotsitewiseGateway#greengrass_v2}

---

##### `SiemensIe`<sup>Optional</sup> <a name="SiemensIe" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.property.siemensIe"></a>

```csharp
public IotsitewiseGatewayGatewayPlatformSiemensIe SiemensIe { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a>

A gateway that runs on Siemens Industrial Edge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_gateway#siemens_ie IotsitewiseGateway#siemens_ie}

---

### IotsitewiseGatewayGatewayPlatformGreengrassV2 <a name="IotsitewiseGatewayGatewayPlatformGreengrassV2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseGatewayGatewayPlatformGreengrassV2 {
    string CoreDeviceOperatingSystem = null,
    string CoreDeviceThingName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.property.coreDeviceOperatingSystem">CoreDeviceOperatingSystem</a></code> | <code>string</code> | The operating system of the core device in AWS IoT Greengrass V2. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.property.coreDeviceThingName">CoreDeviceThingName</a></code> | <code>string</code> | The name of the CoreDevice in GreenGrass V2. |

---

##### `CoreDeviceOperatingSystem`<sup>Optional</sup> <a name="CoreDeviceOperatingSystem" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.property.coreDeviceOperatingSystem"></a>

```csharp
public string CoreDeviceOperatingSystem { get; set; }
```

- *Type:* string

The operating system of the core device in AWS IoT Greengrass V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_gateway#core_device_operating_system IotsitewiseGateway#core_device_operating_system}

---

##### `CoreDeviceThingName`<sup>Optional</sup> <a name="CoreDeviceThingName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.property.coreDeviceThingName"></a>

```csharp
public string CoreDeviceThingName { get; set; }
```

- *Type:* string

The name of the CoreDevice in GreenGrass V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_gateway#core_device_thing_name IotsitewiseGateway#core_device_thing_name}

---

### IotsitewiseGatewayGatewayPlatformSiemensIe <a name="IotsitewiseGatewayGatewayPlatformSiemensIe" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseGatewayGatewayPlatformSiemensIe {
    string IotCoreThingName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe.property.iotCoreThingName">IotCoreThingName</a></code> | <code>string</code> | The name of the IoT Core Thing. |

---

##### `IotCoreThingName`<sup>Optional</sup> <a name="IotCoreThingName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe.property.iotCoreThingName"></a>

```csharp
public string IotCoreThingName { get; set; }
```

- *Type:* string

The name of the IoT Core Thing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_gateway#iot_core_thing_name IotsitewiseGateway#iot_core_thing_name}

---

### IotsitewiseGatewayTags <a name="IotsitewiseGatewayTags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseGatewayTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_gateway#key IotsitewiseGateway#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_gateway#value IotsitewiseGateway#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_gateway#key IotsitewiseGateway#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotsitewise_gateway#value IotsitewiseGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewiseGatewayGatewayCapabilitySummariesList <a name="IotsitewiseGatewayGatewayCapabilitySummariesList" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseGatewayGatewayCapabilitySummariesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.get"></a>

```csharp
private IotsitewiseGatewayGatewayCapabilitySummariesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.internalValue"></a>

```csharp
public IResolvable|IotsitewiseGatewayGatewayCapabilitySummaries[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>[]

---


### IotsitewiseGatewayGatewayCapabilitySummariesOutputReference <a name="IotsitewiseGatewayGatewayCapabilitySummariesOutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseGatewayGatewayCapabilitySummariesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resetCapabilityConfiguration">ResetCapabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resetCapabilityNamespace">ResetCapabilityNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCapabilityConfiguration` <a name="ResetCapabilityConfiguration" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resetCapabilityConfiguration"></a>

```csharp
private void ResetCapabilityConfiguration()
```

##### `ResetCapabilityNamespace` <a name="ResetCapabilityNamespace" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resetCapabilityNamespace"></a>

```csharp
private void ResetCapabilityNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfigurationInput">CapabilityConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespaceInput">CapabilityNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfiguration">CapabilityConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespace">CapabilityNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapabilityConfigurationInput`<sup>Optional</sup> <a name="CapabilityConfigurationInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfigurationInput"></a>

```csharp
public string CapabilityConfigurationInput { get; }
```

- *Type:* string

---

##### `CapabilityNamespaceInput`<sup>Optional</sup> <a name="CapabilityNamespaceInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespaceInput"></a>

```csharp
public string CapabilityNamespaceInput { get; }
```

- *Type:* string

---

##### `CapabilityConfiguration`<sup>Required</sup> <a name="CapabilityConfiguration" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfiguration"></a>

```csharp
public string CapabilityConfiguration { get; }
```

- *Type:* string

---

##### `CapabilityNamespace`<sup>Required</sup> <a name="CapabilityNamespace" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespace"></a>

```csharp
public string CapabilityNamespace { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotsitewiseGatewayGatewayCapabilitySummaries InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries">IotsitewiseGatewayGatewayCapabilitySummaries</a>

---


### IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference <a name="IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resetCoreDeviceOperatingSystem">ResetCoreDeviceOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resetCoreDeviceThingName">ResetCoreDeviceThingName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCoreDeviceOperatingSystem` <a name="ResetCoreDeviceOperatingSystem" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resetCoreDeviceOperatingSystem"></a>

```csharp
private void ResetCoreDeviceOperatingSystem()
```

##### `ResetCoreDeviceThingName` <a name="ResetCoreDeviceThingName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resetCoreDeviceThingName"></a>

```csharp
private void ResetCoreDeviceThingName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystemInput">CoreDeviceOperatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingNameInput">CoreDeviceThingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystem">CoreDeviceOperatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingName">CoreDeviceThingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoreDeviceOperatingSystemInput`<sup>Optional</sup> <a name="CoreDeviceOperatingSystemInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystemInput"></a>

```csharp
public string CoreDeviceOperatingSystemInput { get; }
```

- *Type:* string

---

##### `CoreDeviceThingNameInput`<sup>Optional</sup> <a name="CoreDeviceThingNameInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingNameInput"></a>

```csharp
public string CoreDeviceThingNameInput { get; }
```

- *Type:* string

---

##### `CoreDeviceOperatingSystem`<sup>Required</sup> <a name="CoreDeviceOperatingSystem" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystem"></a>

```csharp
public string CoreDeviceOperatingSystem { get; }
```

- *Type:* string

---

##### `CoreDeviceThingName`<sup>Required</sup> <a name="CoreDeviceThingName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingName"></a>

```csharp
public string CoreDeviceThingName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotsitewiseGatewayGatewayPlatformGreengrassV2 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a>

---


### IotsitewiseGatewayGatewayPlatformOutputReference <a name="IotsitewiseGatewayGatewayPlatformOutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseGatewayGatewayPlatformOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putGreengrassV2">PutGreengrassV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putSiemensIe">PutSiemensIe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resetGreengrassV2">ResetGreengrassV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resetSiemensIe">ResetSiemensIe</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGreengrassV2` <a name="PutGreengrassV2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putGreengrassV2"></a>

```csharp
private void PutGreengrassV2(IotsitewiseGatewayGatewayPlatformGreengrassV2 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putGreengrassV2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a>

---

##### `PutSiemensIe` <a name="PutSiemensIe" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putSiemensIe"></a>

```csharp
private void PutSiemensIe(IotsitewiseGatewayGatewayPlatformSiemensIe Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putSiemensIe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a>

---

##### `ResetGreengrassV2` <a name="ResetGreengrassV2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resetGreengrassV2"></a>

```csharp
private void ResetGreengrassV2()
```

##### `ResetSiemensIe` <a name="ResetSiemensIe" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resetSiemensIe"></a>

```csharp
private void ResetSiemensIe()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2">GreengrassV2</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference">IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIe">SiemensIe</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference">IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2Input">GreengrassV2Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIeInput">SiemensIeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GreengrassV2`<sup>Required</sup> <a name="GreengrassV2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2"></a>

```csharp
public IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference GreengrassV2 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference">IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference</a>

---

##### `SiemensIe`<sup>Required</sup> <a name="SiemensIe" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIe"></a>

```csharp
public IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference SiemensIe { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference">IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference</a>

---

##### `GreengrassV2Input`<sup>Optional</sup> <a name="GreengrassV2Input" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2Input"></a>

```csharp
public IResolvable|IotsitewiseGatewayGatewayPlatformGreengrassV2 GreengrassV2Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a>

---

##### `SiemensIeInput`<sup>Optional</sup> <a name="SiemensIeInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIeInput"></a>

```csharp
public IResolvable|IotsitewiseGatewayGatewayPlatformSiemensIe SiemensIeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotsitewiseGatewayGatewayPlatform InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a>

---


### IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference <a name="IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resetIotCoreThingName">ResetIotCoreThingName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIotCoreThingName` <a name="ResetIotCoreThingName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resetIotCoreThingName"></a>

```csharp
private void ResetIotCoreThingName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingNameInput">IotCoreThingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingName">IotCoreThingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IotCoreThingNameInput`<sup>Optional</sup> <a name="IotCoreThingNameInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingNameInput"></a>

```csharp
public string IotCoreThingNameInput { get; }
```

- *Type:* string

---

##### `IotCoreThingName`<sup>Required</sup> <a name="IotCoreThingName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingName"></a>

```csharp
public string IotCoreThingName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotsitewiseGatewayGatewayPlatformSiemensIe InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a>

---


### IotsitewiseGatewayTagsList <a name="IotsitewiseGatewayTagsList" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseGatewayTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.get"></a>

```csharp
private IotsitewiseGatewayTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.internalValue"></a>

```csharp
public IResolvable|IotsitewiseGatewayTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>[]

---


### IotsitewiseGatewayTagsOutputReference <a name="IotsitewiseGatewayTagsOutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new IotsitewiseGatewayTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|IotsitewiseGatewayTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags">IotsitewiseGatewayTags</a>

---



