# `customerprofilesEventTrigger` Submodule <a name="`customerprofilesEventTrigger` Submodule" id="@cdktn/provider-awscc.customerprofilesEventTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesEventTrigger <a name="CustomerprofilesEventTrigger" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger awscc_customerprofiles_event_trigger}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTrigger(Construct Scope, string Id, CustomerprofilesEventTriggerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig">CustomerprofilesEventTriggerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig">CustomerprofilesEventTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerConditions">PutEventTriggerConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerLimits">PutEventTriggerLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetEventTriggerLimits">ResetEventTriggerLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetSegmentFilter">ResetSegmentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventTriggerConditions` <a name="PutEventTriggerConditions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerConditions"></a>

```csharp
private void PutEventTriggerConditions(IResolvable|CustomerprofilesEventTriggerEventTriggerConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>[]

---

##### `PutEventTriggerLimits` <a name="PutEventTriggerLimits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerLimits"></a>

```csharp
private void PutEventTriggerLimits(CustomerprofilesEventTriggerEventTriggerLimits Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putEventTriggerLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putTags"></a>

```csharp
private void PutTags(IResolvable|CustomerprofilesEventTriggerTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEventTriggerLimits` <a name="ResetEventTriggerLimits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetEventTriggerLimits"></a>

```csharp
private void ResetEventTriggerLimits()
```

##### `ResetSegmentFilter` <a name="ResetSegmentFilter" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetSegmentFilter"></a>

```csharp
private void ResetSegmentFilter()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CustomerprofilesEventTrigger resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesEventTrigger.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesEventTrigger.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesEventTrigger.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CustomerprofilesEventTrigger.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CustomerprofilesEventTrigger resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CustomerprofilesEventTrigger to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CustomerprofilesEventTrigger that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CustomerprofilesEventTrigger to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerConditions">EventTriggerConditions</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList">CustomerprofilesEventTriggerEventTriggerConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerLimits">EventTriggerLimits</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference">CustomerprofilesEventTriggerEventTriggerLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList">CustomerprofilesEventTriggerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerConditionsInput">EventTriggerConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerLimitsInput">EventTriggerLimitsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerNameInput">EventTriggerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.objectTypeNameInput">ObjectTypeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.segmentFilterInput">SegmentFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerName">EventTriggerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.objectTypeName">ObjectTypeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.segmentFilter">SegmentFilter</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `EventTriggerConditions`<sup>Required</sup> <a name="EventTriggerConditions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerConditions"></a>

```csharp
public CustomerprofilesEventTriggerEventTriggerConditionsList EventTriggerConditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList">CustomerprofilesEventTriggerEventTriggerConditionsList</a>

---

##### `EventTriggerLimits`<sup>Required</sup> <a name="EventTriggerLimits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerLimits"></a>

```csharp
public CustomerprofilesEventTriggerEventTriggerLimitsOutputReference EventTriggerLimits { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference">CustomerprofilesEventTriggerEventTriggerLimitsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tags"></a>

```csharp
public CustomerprofilesEventTriggerTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList">CustomerprofilesEventTriggerTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `EventTriggerConditionsInput`<sup>Optional</sup> <a name="EventTriggerConditionsInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerConditionsInput"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerEventTriggerConditions[] EventTriggerConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>[]

---

##### `EventTriggerLimitsInput`<sup>Optional</sup> <a name="EventTriggerLimitsInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerLimitsInput"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerEventTriggerLimits EventTriggerLimitsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a>

---

##### `EventTriggerNameInput`<sup>Optional</sup> <a name="EventTriggerNameInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerNameInput"></a>

```csharp
public string EventTriggerNameInput { get; }
```

- *Type:* string

---

##### `ObjectTypeNameInput`<sup>Optional</sup> <a name="ObjectTypeNameInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.objectTypeNameInput"></a>

```csharp
public string ObjectTypeNameInput { get; }
```

- *Type:* string

---

##### `SegmentFilterInput`<sup>Optional</sup> <a name="SegmentFilterInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.segmentFilterInput"></a>

```csharp
public string SegmentFilterInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tagsInput"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `EventTriggerName`<sup>Required</sup> <a name="EventTriggerName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.eventTriggerName"></a>

```csharp
public string EventTriggerName { get; }
```

- *Type:* string

---

##### `ObjectTypeName`<sup>Required</sup> <a name="ObjectTypeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.objectTypeName"></a>

```csharp
public string ObjectTypeName { get; }
```

- *Type:* string

---

##### `SegmentFilter`<sup>Required</sup> <a name="SegmentFilter" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.segmentFilter"></a>

```csharp
public string SegmentFilter { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTrigger.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesEventTriggerConfig <a name="CustomerprofilesEventTriggerConfig" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTriggerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DomainName,
    IResolvable|CustomerprofilesEventTriggerEventTriggerConditions[] EventTriggerConditions,
    string EventTriggerName,
    string ObjectTypeName,
    string Description = null,
    CustomerprofilesEventTriggerEventTriggerLimits EventTriggerLimits = null,
    string SegmentFilter = null,
    IResolvable|CustomerprofilesEventTriggerTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.domainName">DomainName</a></code> | <code>string</code> | The unique name of the domain. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerConditions">EventTriggerConditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>[]</code> | A list of conditions that determine when an event should trigger the destination. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerName">EventTriggerName</a></code> | <code>string</code> | The unique name of the event trigger. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.objectTypeName">ObjectTypeName</a></code> | <code>string</code> | The unique name of the object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.description">Description</a></code> | <code>string</code> | The description of the event trigger. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerLimits">EventTriggerLimits</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a></code> | Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.segmentFilter">SegmentFilter</a></code> | <code>string</code> | The destination is triggered only for profiles that meet the criteria of a segment definition. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

The unique name of the domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#domain_name CustomerprofilesEventTrigger#domain_name}

---

##### `EventTriggerConditions`<sup>Required</sup> <a name="EventTriggerConditions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerConditions"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerEventTriggerConditions[] EventTriggerConditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>[]

A list of conditions that determine when an event should trigger the destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#event_trigger_conditions CustomerprofilesEventTrigger#event_trigger_conditions}

---

##### `EventTriggerName`<sup>Required</sup> <a name="EventTriggerName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerName"></a>

```csharp
public string EventTriggerName { get; set; }
```

- *Type:* string

The unique name of the event trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#event_trigger_name CustomerprofilesEventTrigger#event_trigger_name}

---

##### `ObjectTypeName`<sup>Required</sup> <a name="ObjectTypeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.objectTypeName"></a>

```csharp
public string ObjectTypeName { get; set; }
```

- *Type:* string

The unique name of the object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#object_type_name CustomerprofilesEventTrigger#object_type_name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the event trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#description CustomerprofilesEventTrigger#description}

---

##### `EventTriggerLimits`<sup>Optional</sup> <a name="EventTriggerLimits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.eventTriggerLimits"></a>

```csharp
public CustomerprofilesEventTriggerEventTriggerLimits EventTriggerLimits { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a>

Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#event_trigger_limits CustomerprofilesEventTrigger#event_trigger_limits}

---

##### `SegmentFilter`<sup>Optional</sup> <a name="SegmentFilter" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.segmentFilter"></a>

```csharp
public string SegmentFilter { get; set; }
```

- *Type:* string

The destination is triggered only for profiles that meet the criteria of a segment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#segment_filter CustomerprofilesEventTrigger#segment_filter}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerConfig.property.tags"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#tags CustomerprofilesEventTrigger#tags}

---

### CustomerprofilesEventTriggerEventTriggerConditions <a name="CustomerprofilesEventTriggerEventTriggerConditions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTriggerEventTriggerConditions {
    IResolvable|CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions[] EventTriggerDimensions,
    string LogicalOperator
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.property.eventTriggerDimensions">EventTriggerDimensions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>[]</code> | A list of dimensions to be evaluated for the event. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.property.logicalOperator">LogicalOperator</a></code> | <code>string</code> | The operator used to combine multiple dimensions. |

---

##### `EventTriggerDimensions`<sup>Required</sup> <a name="EventTriggerDimensions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.property.eventTriggerDimensions"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions[] EventTriggerDimensions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>[]

A list of dimensions to be evaluated for the event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#event_trigger_dimensions CustomerprofilesEventTrigger#event_trigger_dimensions}

---

##### `LogicalOperator`<sup>Required</sup> <a name="LogicalOperator" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions.property.logicalOperator"></a>

```csharp
public string LogicalOperator { get; set; }
```

- *Type:* string

The operator used to combine multiple dimensions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#logical_operator CustomerprofilesEventTrigger#logical_operator}

---

### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions {
    IResolvable|CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes[] ObjectAttributes
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions.property.objectAttributes">ObjectAttributes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>[]</code> | A list of object attributes to be evaluated. |

---

##### `ObjectAttributes`<sup>Required</sup> <a name="ObjectAttributes" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions.property.objectAttributes"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes[] ObjectAttributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>[]

A list of object attributes to be evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#object_attributes CustomerprofilesEventTrigger#object_attributes}

---

### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes {
    string ComparisonOperator,
    string[] Values,
    string FieldName = null,
    string Source = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | The operator used to compare an attribute against a list of values. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.values">Values</a></code> | <code>string[]</code> | A list of attribute values used for comparison. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.fieldName">FieldName</a></code> | <code>string</code> | A field defined within an object type. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.source">Source</a></code> | <code>string</code> | An attribute contained within a source object. |

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

The operator used to compare an attribute against a list of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#comparison_operator CustomerprofilesEventTrigger#comparison_operator}

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

A list of attribute values used for comparison.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#values CustomerprofilesEventTrigger#values}

---

##### `FieldName`<sup>Optional</sup> <a name="FieldName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

A field defined within an object type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#field_name CustomerprofilesEventTrigger#field_name}

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

An attribute contained within a source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#source CustomerprofilesEventTrigger#source}

---

### CustomerprofilesEventTriggerEventTriggerLimits <a name="CustomerprofilesEventTriggerEventTriggerLimits" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTriggerEventTriggerLimits {
    double EventExpiration = null,
    IResolvable|CustomerprofilesEventTriggerEventTriggerLimitsPeriods[] Periods = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.property.eventExpiration">EventExpiration</a></code> | <code>double</code> | Specifies that an event will only trigger the destination if it is processed within a certain latency period. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.property.periods">Periods</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>[]</code> | A list of time periods during which the limits apply. |

---

##### `EventExpiration`<sup>Optional</sup> <a name="EventExpiration" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.property.eventExpiration"></a>

```csharp
public double EventExpiration { get; set; }
```

- *Type:* double

Specifies that an event will only trigger the destination if it is processed within a certain latency period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#event_expiration CustomerprofilesEventTrigger#event_expiration}

---

##### `Periods`<sup>Optional</sup> <a name="Periods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits.property.periods"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerEventTriggerLimitsPeriods[] Periods { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>[]

A list of time periods during which the limits apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#periods CustomerprofilesEventTrigger#periods}

---

### CustomerprofilesEventTriggerEventTriggerLimitsPeriods <a name="CustomerprofilesEventTriggerEventTriggerLimitsPeriods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTriggerEventTriggerLimitsPeriods {
    double MaxInvocationsPerProfile = null,
    string Unit = null,
    bool|IResolvable Unlimited = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.maxInvocationsPerProfile">MaxInvocationsPerProfile</a></code> | <code>double</code> | The maximum allowed number of destination invocations per profile. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.unit">Unit</a></code> | <code>string</code> | The unit of time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.unlimited">Unlimited</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | If set to true, there is no limit on the number of destination invocations per profile. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.value">Value</a></code> | <code>double</code> | The amount of time of the specified unit. |

---

##### `MaxInvocationsPerProfile`<sup>Optional</sup> <a name="MaxInvocationsPerProfile" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.maxInvocationsPerProfile"></a>

```csharp
public double MaxInvocationsPerProfile { get; set; }
```

- *Type:* double

The maximum allowed number of destination invocations per profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#max_invocations_per_profile CustomerprofilesEventTrigger#max_invocations_per_profile}

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

The unit of time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#unit CustomerprofilesEventTrigger#unit}

---

##### `Unlimited`<sup>Optional</sup> <a name="Unlimited" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.unlimited"></a>

```csharp
public bool|IResolvable Unlimited { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

If set to true, there is no limit on the number of destination invocations per profile.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#unlimited CustomerprofilesEventTrigger#unlimited}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

The amount of time of the specified unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#value CustomerprofilesEventTrigger#value}

---

### CustomerprofilesEventTriggerTags <a name="CustomerprofilesEventTriggerTags" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTriggerTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#key CustomerprofilesEventTrigger#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/customerprofiles_event_trigger#value CustomerprofilesEventTrigger#value}

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.get"></a>

```csharp
private CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>[]

---


### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.get"></a>

```csharp
private CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>[]

---


### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resetFieldName">ResetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldName` <a name="ResetFieldName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resetFieldName"></a>

```csharp
private void ResetFieldName()
```

##### `ResetSource` <a name="ResetSource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>

---


### CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference <a name="CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.putObjectAttributes">PutObjectAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutObjectAttributes` <a name="PutObjectAttributes" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.putObjectAttributes"></a>

```csharp
private void PutObjectAttributes(IResolvable|CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.putObjectAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.objectAttributes">ObjectAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.objectAttributesInput">ObjectAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ObjectAttributes`<sup>Required</sup> <a name="ObjectAttributes" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.objectAttributes"></a>

```csharp
public CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList ObjectAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributesList</a>

---

##### `ObjectAttributesInput`<sup>Optional</sup> <a name="ObjectAttributesInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.objectAttributesInput"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes[] ObjectAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsObjectAttributes</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>

---


### CustomerprofilesEventTriggerEventTriggerConditionsList <a name="CustomerprofilesEventTriggerEventTriggerConditionsList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTriggerEventTriggerConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.get"></a>

```csharp
private CustomerprofilesEventTriggerEventTriggerConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsList.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerEventTriggerConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>[]

---


### CustomerprofilesEventTriggerEventTriggerConditionsOutputReference <a name="CustomerprofilesEventTriggerEventTriggerConditionsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTriggerEventTriggerConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.putEventTriggerDimensions">PutEventTriggerDimensions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEventTriggerDimensions` <a name="PutEventTriggerDimensions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.putEventTriggerDimensions"></a>

```csharp
private void PutEventTriggerDimensions(IResolvable|CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.putEventTriggerDimensions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.eventTriggerDimensions">EventTriggerDimensions</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.eventTriggerDimensionsInput">EventTriggerDimensionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.logicalOperatorInput">LogicalOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.logicalOperator">LogicalOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EventTriggerDimensions`<sup>Required</sup> <a name="EventTriggerDimensions" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.eventTriggerDimensions"></a>

```csharp
public CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList EventTriggerDimensions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensionsList</a>

---

##### `EventTriggerDimensionsInput`<sup>Optional</sup> <a name="EventTriggerDimensionsInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.eventTriggerDimensionsInput"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions[] EventTriggerDimensionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions">CustomerprofilesEventTriggerEventTriggerConditionsEventTriggerDimensions</a>[]

---

##### `LogicalOperatorInput`<sup>Optional</sup> <a name="LogicalOperatorInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.logicalOperatorInput"></a>

```csharp
public string LogicalOperatorInput { get; }
```

- *Type:* string

---

##### `LogicalOperator`<sup>Required</sup> <a name="LogicalOperator" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.logicalOperator"></a>

```csharp
public string LogicalOperator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerEventTriggerConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerConditions">CustomerprofilesEventTriggerEventTriggerConditions</a>

---


### CustomerprofilesEventTriggerEventTriggerLimitsOutputReference <a name="CustomerprofilesEventTriggerEventTriggerLimitsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTriggerEventTriggerLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.putPeriods">PutPeriods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resetEventExpiration">ResetEventExpiration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resetPeriods">ResetPeriods</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPeriods` <a name="PutPeriods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.putPeriods"></a>

```csharp
private void PutPeriods(IResolvable|CustomerprofilesEventTriggerEventTriggerLimitsPeriods[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.putPeriods.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>[]

---

##### `ResetEventExpiration` <a name="ResetEventExpiration" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resetEventExpiration"></a>

```csharp
private void ResetEventExpiration()
```

##### `ResetPeriods` <a name="ResetPeriods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.resetPeriods"></a>

```csharp
private void ResetPeriods()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.periods">Periods</a></code> | <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList">CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.eventExpirationInput">EventExpirationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.periodsInput">PeriodsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.eventExpiration">EventExpiration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Periods`<sup>Required</sup> <a name="Periods" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.periods"></a>

```csharp
public CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList Periods { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList">CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList</a>

---

##### `EventExpirationInput`<sup>Optional</sup> <a name="EventExpirationInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.eventExpirationInput"></a>

```csharp
public double EventExpirationInput { get; }
```

- *Type:* double

---

##### `PeriodsInput`<sup>Optional</sup> <a name="PeriodsInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.periodsInput"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerEventTriggerLimitsPeriods[] PeriodsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>[]

---

##### `EventExpiration`<sup>Required</sup> <a name="EventExpiration" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.eventExpiration"></a>

```csharp
public double EventExpiration { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerEventTriggerLimits InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimits">CustomerprofilesEventTriggerEventTriggerLimits</a>

---


### CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList <a name="CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.get"></a>

```csharp
private CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsList.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerEventTriggerLimitsPeriods[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>[]

---


### CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference <a name="CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetMaxInvocationsPerProfile">ResetMaxInvocationsPerProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetUnlimited">ResetUnlimited</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxInvocationsPerProfile` <a name="ResetMaxInvocationsPerProfile" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetMaxInvocationsPerProfile"></a>

```csharp
private void ResetMaxInvocationsPerProfile()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```

##### `ResetUnlimited` <a name="ResetUnlimited" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetUnlimited"></a>

```csharp
private void ResetUnlimited()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.maxInvocationsPerProfileInput">MaxInvocationsPerProfileInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unlimitedInput">UnlimitedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.maxInvocationsPerProfile">MaxInvocationsPerProfile</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unlimited">Unlimited</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxInvocationsPerProfileInput`<sup>Optional</sup> <a name="MaxInvocationsPerProfileInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.maxInvocationsPerProfileInput"></a>

```csharp
public double MaxInvocationsPerProfileInput { get; }
```

- *Type:* double

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `UnlimitedInput`<sup>Optional</sup> <a name="UnlimitedInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unlimitedInput"></a>

```csharp
public bool|IResolvable UnlimitedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `MaxInvocationsPerProfile`<sup>Required</sup> <a name="MaxInvocationsPerProfile" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.maxInvocationsPerProfile"></a>

```csharp
public double MaxInvocationsPerProfile { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Unlimited`<sup>Required</sup> <a name="Unlimited" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.unlimited"></a>

```csharp
public bool|IResolvable Unlimited { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriodsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerEventTriggerLimitsPeriods InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerEventTriggerLimitsPeriods">CustomerprofilesEventTriggerEventTriggerLimitsPeriods</a>

---


### CustomerprofilesEventTriggerTagsList <a name="CustomerprofilesEventTriggerTagsList" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTriggerTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.get"></a>

```csharp
private CustomerprofilesEventTriggerTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsList.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>[]

---


### CustomerprofilesEventTriggerTagsOutputReference <a name="CustomerprofilesEventTriggerTagsOutputReference" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CustomerprofilesEventTriggerTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CustomerprofilesEventTriggerTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.customerprofilesEventTrigger.CustomerprofilesEventTriggerTags">CustomerprofilesEventTriggerTags</a>

---



