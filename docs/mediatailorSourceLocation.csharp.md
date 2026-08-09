# `mediatailorSourceLocation` Submodule <a name="`mediatailorSourceLocation` Submodule" id="@cdktn/provider-awscc.mediatailorSourceLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediatailorSourceLocation <a name="MediatailorSourceLocation" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location awscc_mediatailor_source_location}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorSourceLocation(Construct Scope, string Id, MediatailorSourceLocationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig">MediatailorSourceLocationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig">MediatailorSourceLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putAccessConfiguration">PutAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putDefaultSegmentDeliveryConfiguration">PutDefaultSegmentDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putHttpConfiguration">PutHttpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putSegmentDeliveryConfigurations">PutSegmentDeliveryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetAccessConfiguration">ResetAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetDefaultSegmentDeliveryConfiguration">ResetDefaultSegmentDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetSegmentDeliveryConfigurations">ResetSegmentDeliveryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessConfiguration` <a name="PutAccessConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putAccessConfiguration"></a>

```csharp
private void PutAccessConfiguration(MediatailorSourceLocationAccessConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putAccessConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a>

---

##### `PutDefaultSegmentDeliveryConfiguration` <a name="PutDefaultSegmentDeliveryConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putDefaultSegmentDeliveryConfiguration"></a>

```csharp
private void PutDefaultSegmentDeliveryConfiguration(MediatailorSourceLocationDefaultSegmentDeliveryConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putDefaultSegmentDeliveryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a>

---

##### `PutHttpConfiguration` <a name="PutHttpConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putHttpConfiguration"></a>

```csharp
private void PutHttpConfiguration(MediatailorSourceLocationHttpConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putHttpConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a>

---

##### `PutSegmentDeliveryConfigurations` <a name="PutSegmentDeliveryConfigurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putSegmentDeliveryConfigurations"></a>

```csharp
private void PutSegmentDeliveryConfigurations(IResolvable|MediatailorSourceLocationSegmentDeliveryConfigurations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putSegmentDeliveryConfigurations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putTags"></a>

```csharp
private void PutTags(IResolvable|MediatailorSourceLocationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>[]

---

##### `ResetAccessConfiguration` <a name="ResetAccessConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetAccessConfiguration"></a>

```csharp
private void ResetAccessConfiguration()
```

##### `ResetDefaultSegmentDeliveryConfiguration` <a name="ResetDefaultSegmentDeliveryConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetDefaultSegmentDeliveryConfiguration"></a>

```csharp
private void ResetDefaultSegmentDeliveryConfiguration()
```

##### `ResetSegmentDeliveryConfigurations` <a name="ResetSegmentDeliveryConfigurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetSegmentDeliveryConfigurations"></a>

```csharp
private void ResetSegmentDeliveryConfigurations()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediatailorSourceLocation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediatailorSourceLocation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediatailorSourceLocation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediatailorSourceLocation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

MediatailorSourceLocation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MediatailorSourceLocation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediatailorSourceLocation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediatailorSourceLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MediatailorSourceLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.accessConfiguration">AccessConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference">MediatailorSourceLocationAccessConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.defaultSegmentDeliveryConfiguration">DefaultSegmentDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference">MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.httpConfiguration">HttpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference">MediatailorSourceLocationHttpConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.segmentDeliveryConfigurations">SegmentDeliveryConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList">MediatailorSourceLocationSegmentDeliveryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList">MediatailorSourceLocationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.accessConfigurationInput">AccessConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.defaultSegmentDeliveryConfigurationInput">DefaultSegmentDeliveryConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.httpConfigurationInput">HttpConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.segmentDeliveryConfigurationsInput">SegmentDeliveryConfigurationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.sourceLocationNameInput">SourceLocationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.sourceLocationName">SourceLocationName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccessConfiguration`<sup>Required</sup> <a name="AccessConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.accessConfiguration"></a>

```csharp
public MediatailorSourceLocationAccessConfigurationOutputReference AccessConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference">MediatailorSourceLocationAccessConfigurationOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `DefaultSegmentDeliveryConfiguration`<sup>Required</sup> <a name="DefaultSegmentDeliveryConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.defaultSegmentDeliveryConfiguration"></a>

```csharp
public MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference DefaultSegmentDeliveryConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference">MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference</a>

---

##### `HttpConfiguration`<sup>Required</sup> <a name="HttpConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.httpConfiguration"></a>

```csharp
public MediatailorSourceLocationHttpConfigurationOutputReference HttpConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference">MediatailorSourceLocationHttpConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SegmentDeliveryConfigurations`<sup>Required</sup> <a name="SegmentDeliveryConfigurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.segmentDeliveryConfigurations"></a>

```csharp
public MediatailorSourceLocationSegmentDeliveryConfigurationsList SegmentDeliveryConfigurations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList">MediatailorSourceLocationSegmentDeliveryConfigurationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tags"></a>

```csharp
public MediatailorSourceLocationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList">MediatailorSourceLocationTagsList</a>

---

##### `AccessConfigurationInput`<sup>Optional</sup> <a name="AccessConfigurationInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.accessConfigurationInput"></a>

```csharp
public IResolvable|MediatailorSourceLocationAccessConfiguration AccessConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a>

---

##### `DefaultSegmentDeliveryConfigurationInput`<sup>Optional</sup> <a name="DefaultSegmentDeliveryConfigurationInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.defaultSegmentDeliveryConfigurationInput"></a>

```csharp
public IResolvable|MediatailorSourceLocationDefaultSegmentDeliveryConfiguration DefaultSegmentDeliveryConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a>

---

##### `HttpConfigurationInput`<sup>Optional</sup> <a name="HttpConfigurationInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.httpConfigurationInput"></a>

```csharp
public IResolvable|MediatailorSourceLocationHttpConfiguration HttpConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a>

---

##### `SegmentDeliveryConfigurationsInput`<sup>Optional</sup> <a name="SegmentDeliveryConfigurationsInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.segmentDeliveryConfigurationsInput"></a>

```csharp
public IResolvable|MediatailorSourceLocationSegmentDeliveryConfigurations[] SegmentDeliveryConfigurationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>[]

---

##### `SourceLocationNameInput`<sup>Optional</sup> <a name="SourceLocationNameInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.sourceLocationNameInput"></a>

```csharp
public string SourceLocationNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tagsInput"></a>

```csharp
public IResolvable|MediatailorSourceLocationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>[]

---

##### `SourceLocationName`<sup>Required</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.sourceLocationName"></a>

```csharp
public string SourceLocationName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediatailorSourceLocationAccessConfiguration <a name="MediatailorSourceLocationAccessConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorSourceLocationAccessConfiguration {
    string AccessType = null,
    MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration SecretsManagerAccessTokenConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.property.accessType">AccessType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#access_type MediatailorSourceLocation#access_type}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.property.secretsManagerAccessTokenConfiguration">SecretsManagerAccessTokenConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a></code> | <p>AWS Secrets Manager access token configuration parameters. |

---

##### `AccessType`<sup>Optional</sup> <a name="AccessType" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.property.accessType"></a>

```csharp
public string AccessType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#access_type MediatailorSourceLocation#access_type}.

---

##### `SecretsManagerAccessTokenConfiguration`<sup>Optional</sup> <a name="SecretsManagerAccessTokenConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration.property.secretsManagerAccessTokenConfiguration"></a>

```csharp
public MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration SecretsManagerAccessTokenConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a>

<p>AWS Secrets Manager access token configuration parameters.

For information about Secrets Manager access token authentication, see <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/channel-assembly-access-configuration-access-token.html">Working with AWS Secrets Manager access token authentication</a>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#secrets_manager_access_token_configuration MediatailorSourceLocation#secrets_manager_access_token_configuration}

---

### MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration <a name="MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration {
    string HeaderName = null,
    string SecretArn = null,
    string SecretStringKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.headerName">HeaderName</a></code> | <code>string</code> | <p>The name of the HTTP header used to supply the access token in requests to the source location.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.secretArn">SecretArn</a></code> | <code>string</code> | <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.secretStringKey">SecretStringKey</a></code> | <code>string</code> | <p>The AWS Secrets Manager <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.</p>. |

---

##### `HeaderName`<sup>Optional</sup> <a name="HeaderName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.headerName"></a>

```csharp
public string HeaderName { get; set; }
```

- *Type:* string

<p>The name of the HTTP header used to supply the access token in requests to the source location.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#header_name MediatailorSourceLocation#header_name}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.secretArn"></a>

```csharp
public string SecretArn { get; set; }
```

- *Type:* string

<p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#secret_arn MediatailorSourceLocation#secret_arn}

---

##### `SecretStringKey`<sup>Optional</sup> <a name="SecretStringKey" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration.property.secretStringKey"></a>

```csharp
public string SecretStringKey { get; set; }
```

- *Type:* string

<p>The AWS Secrets Manager <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#secret_string_key MediatailorSourceLocation#secret_string_key}

---

### MediatailorSourceLocationConfig <a name="MediatailorSourceLocationConfig" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorSourceLocationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    MediatailorSourceLocationHttpConfiguration HttpConfiguration,
    string SourceLocationName,
    MediatailorSourceLocationAccessConfiguration AccessConfiguration = null,
    MediatailorSourceLocationDefaultSegmentDeliveryConfiguration DefaultSegmentDeliveryConfiguration = null,
    IResolvable|MediatailorSourceLocationSegmentDeliveryConfigurations[] SegmentDeliveryConfigurations = null,
    IResolvable|MediatailorSourceLocationTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.httpConfiguration">HttpConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a></code> | <p>The HTTP configuration for the source location.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.sourceLocationName">SourceLocationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#source_location_name MediatailorSourceLocation#source_location_name}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.accessConfiguration">AccessConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a></code> | <p>Access configuration parameters.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.defaultSegmentDeliveryConfiguration">DefaultSegmentDeliveryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a></code> | <p>The optional configuration for a server that serves segments. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.segmentDeliveryConfigurations">SegmentDeliveryConfigurations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>[]</code> | <p>A list of the segment delivery configurations associated with this resource.</p>. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>[]</code> | The tags to assign to the source location. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `HttpConfiguration`<sup>Required</sup> <a name="HttpConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.httpConfiguration"></a>

```csharp
public MediatailorSourceLocationHttpConfiguration HttpConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a>

<p>The HTTP configuration for the source location.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#http_configuration MediatailorSourceLocation#http_configuration}

---

##### `SourceLocationName`<sup>Required</sup> <a name="SourceLocationName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.sourceLocationName"></a>

```csharp
public string SourceLocationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#source_location_name MediatailorSourceLocation#source_location_name}.

---

##### `AccessConfiguration`<sup>Optional</sup> <a name="AccessConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.accessConfiguration"></a>

```csharp
public MediatailorSourceLocationAccessConfiguration AccessConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a>

<p>Access configuration parameters.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#access_configuration MediatailorSourceLocation#access_configuration}

---

##### `DefaultSegmentDeliveryConfiguration`<sup>Optional</sup> <a name="DefaultSegmentDeliveryConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.defaultSegmentDeliveryConfiguration"></a>

```csharp
public MediatailorSourceLocationDefaultSegmentDeliveryConfiguration DefaultSegmentDeliveryConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a>

<p>The optional configuration for a server that serves segments.

Use this if you want the segment delivery server to be different from the source location server. For example, you can configure your source location server to be an origination server, such as MediaPackage, and the segment delivery server to be a content delivery network (CDN), such as CloudFront. If you don't specify a segment delivery server, then the source location server is used.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#default_segment_delivery_configuration MediatailorSourceLocation#default_segment_delivery_configuration}

---

##### `SegmentDeliveryConfigurations`<sup>Optional</sup> <a name="SegmentDeliveryConfigurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.segmentDeliveryConfigurations"></a>

```csharp
public IResolvable|MediatailorSourceLocationSegmentDeliveryConfigurations[] SegmentDeliveryConfigurations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>[]

<p>A list of the segment delivery configurations associated with this resource.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#segment_delivery_configurations MediatailorSourceLocation#segment_delivery_configurations}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationConfig.property.tags"></a>

```csharp
public IResolvable|MediatailorSourceLocationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>[]

The tags to assign to the source location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#tags MediatailorSourceLocation#tags}

---

### MediatailorSourceLocationDefaultSegmentDeliveryConfiguration <a name="MediatailorSourceLocationDefaultSegmentDeliveryConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorSourceLocationDefaultSegmentDeliveryConfiguration {
    string BaseUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration.property.baseUrl">BaseUrl</a></code> | <code>string</code> | <p>The hostname of the server that will be used to serve segments. |

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

<p>The hostname of the server that will be used to serve segments.

This string must include the protocol, such as <b>https://</b>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#base_url MediatailorSourceLocation#base_url}

---

### MediatailorSourceLocationHttpConfiguration <a name="MediatailorSourceLocationHttpConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorSourceLocationHttpConfiguration {
    string BaseUrl
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration.property.baseUrl">BaseUrl</a></code> | <code>string</code> | <p>The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.</p>. |

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

<p>The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#base_url MediatailorSourceLocation#base_url}

---

### MediatailorSourceLocationSegmentDeliveryConfigurations <a name="MediatailorSourceLocationSegmentDeliveryConfigurations" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorSourceLocationSegmentDeliveryConfigurations {
    string BaseUrl = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.property.baseUrl">BaseUrl</a></code> | <code>string</code> | <p>The base URL of the host or path of the segment delivery server that you're using to serve segments. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.property.name">Name</a></code> | <code>string</code> | <p>A unique identifier used to distinguish between multiple segment delivery configurations in a source location.</p>. |

---

##### `BaseUrl`<sup>Optional</sup> <a name="BaseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.property.baseUrl"></a>

```csharp
public string BaseUrl { get; set; }
```

- *Type:* string

<p>The base URL of the host or path of the segment delivery server that you're using to serve segments.

This is typically a content delivery network (CDN). The URL can be absolute or relative. To use an absolute URL include the protocol, such as <code>https://example.com/some/path</code>. To use a relative URL specify the relative path, such as <code>/some/path*</code>.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#base_url MediatailorSourceLocation#base_url}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

<p>A unique identifier used to distinguish between multiple segment delivery configurations in a source location.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#name MediatailorSourceLocation#name}

---

### MediatailorSourceLocationTags <a name="MediatailorSourceLocationTags" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorSourceLocationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#key MediatailorSourceLocation#key}. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#value MediatailorSourceLocation#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#key MediatailorSourceLocation#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediatailor_source_location#value MediatailorSourceLocation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediatailorSourceLocationAccessConfigurationOutputReference <a name="MediatailorSourceLocationAccessConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorSourceLocationAccessConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.putSecretsManagerAccessTokenConfiguration">PutSecretsManagerAccessTokenConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resetAccessType">ResetAccessType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resetSecretsManagerAccessTokenConfiguration">ResetSecretsManagerAccessTokenConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecretsManagerAccessTokenConfiguration` <a name="PutSecretsManagerAccessTokenConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.putSecretsManagerAccessTokenConfiguration"></a>

```csharp
private void PutSecretsManagerAccessTokenConfiguration(MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.putSecretsManagerAccessTokenConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a>

---

##### `ResetAccessType` <a name="ResetAccessType" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resetAccessType"></a>

```csharp
private void ResetAccessType()
```

##### `ResetSecretsManagerAccessTokenConfiguration` <a name="ResetSecretsManagerAccessTokenConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.resetSecretsManagerAccessTokenConfiguration"></a>

```csharp
private void ResetSecretsManagerAccessTokenConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.secretsManagerAccessTokenConfiguration">SecretsManagerAccessTokenConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.accessTypeInput">AccessTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.secretsManagerAccessTokenConfigurationInput">SecretsManagerAccessTokenConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.accessType">AccessType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessTokenConfiguration`<sup>Required</sup> <a name="SecretsManagerAccessTokenConfiguration" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.secretsManagerAccessTokenConfiguration"></a>

```csharp
public MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference SecretsManagerAccessTokenConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference</a>

---

##### `AccessTypeInput`<sup>Optional</sup> <a name="AccessTypeInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.accessTypeInput"></a>

```csharp
public string AccessTypeInput { get; }
```

- *Type:* string

---

##### `SecretsManagerAccessTokenConfigurationInput`<sup>Optional</sup> <a name="SecretsManagerAccessTokenConfigurationInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.secretsManagerAccessTokenConfigurationInput"></a>

```csharp
public IResolvable|MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration SecretsManagerAccessTokenConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a>

---

##### `AccessType`<sup>Required</sup> <a name="AccessType" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.accessType"></a>

```csharp
public string AccessType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediatailorSourceLocationAccessConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfiguration">MediatailorSourceLocationAccessConfiguration</a>

---


### MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference <a name="MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetHeaderName">ResetHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetSecretStringKey">ResetSecretStringKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderName` <a name="ResetHeaderName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetHeaderName"></a>

```csharp
private void ResetHeaderName()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetSecretArn"></a>

```csharp
private void ResetSecretArn()
```

##### `ResetSecretStringKey` <a name="ResetSecretStringKey" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.resetSecretStringKey"></a>

```csharp
private void ResetSecretStringKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretStringKeyInput">SecretStringKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretStringKey">SecretStringKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.headerNameInput"></a>

```csharp
public string HeaderNameInput { get; }
```

- *Type:* string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretArnInput"></a>

```csharp
public string SecretArnInput { get; }
```

- *Type:* string

---

##### `SecretStringKeyInput`<sup>Optional</sup> <a name="SecretStringKeyInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretStringKeyInput"></a>

```csharp
public string SecretStringKeyInput { get; }
```

- *Type:* string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `SecretStringKey`<sup>Required</sup> <a name="SecretStringKey" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.secretStringKey"></a>

```csharp
public string SecretStringKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration">MediatailorSourceLocationAccessConfigurationSecretsManagerAccessTokenConfiguration</a>

---


### MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference <a name="MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediatailorSourceLocationDefaultSegmentDeliveryConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationDefaultSegmentDeliveryConfiguration">MediatailorSourceLocationDefaultSegmentDeliveryConfiguration</a>

---


### MediatailorSourceLocationHttpConfigurationOutputReference <a name="MediatailorSourceLocationHttpConfigurationOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorSourceLocationHttpConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediatailorSourceLocationHttpConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationHttpConfiguration">MediatailorSourceLocationHttpConfiguration</a>

---


### MediatailorSourceLocationSegmentDeliveryConfigurationsList <a name="MediatailorSourceLocationSegmentDeliveryConfigurationsList" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorSourceLocationSegmentDeliveryConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.get"></a>

```csharp
private MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsList.property.internalValue"></a>

```csharp
public IResolvable|MediatailorSourceLocationSegmentDeliveryConfigurations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>[]

---


### MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference <a name="MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resetBaseUrl">ResetBaseUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBaseUrl` <a name="ResetBaseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resetBaseUrl"></a>

```csharp
private void ResetBaseUrl()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.baseUrlInput">BaseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.baseUrl">BaseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseUrlInput`<sup>Optional</sup> <a name="BaseUrlInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.baseUrlInput"></a>

```csharp
public string BaseUrlInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `BaseUrl`<sup>Required</sup> <a name="BaseUrl" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.baseUrl"></a>

```csharp
public string BaseUrl { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediatailorSourceLocationSegmentDeliveryConfigurations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationSegmentDeliveryConfigurations">MediatailorSourceLocationSegmentDeliveryConfigurations</a>

---


### MediatailorSourceLocationTagsList <a name="MediatailorSourceLocationTagsList" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorSourceLocationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.get"></a>

```csharp
private MediatailorSourceLocationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsList.property.internalValue"></a>

```csharp
public IResolvable|MediatailorSourceLocationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>[]

---


### MediatailorSourceLocationTagsOutputReference <a name="MediatailorSourceLocationTagsOutputReference" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new MediatailorSourceLocationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MediatailorSourceLocationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.mediatailorSourceLocation.MediatailorSourceLocationTags">MediatailorSourceLocationTags</a>

---



