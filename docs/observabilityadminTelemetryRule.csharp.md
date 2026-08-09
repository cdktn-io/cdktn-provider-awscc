# `observabilityadminTelemetryRule` Submodule <a name="`observabilityadminTelemetryRule` Submodule" id="@cdktn/provider-awscc.observabilityadminTelemetryRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityadminTelemetryRule <a name="ObservabilityadminTelemetryRule" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule awscc_observabilityadmin_telemetry_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRule(Construct Scope, string Id, ObservabilityadminTelemetryRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig">ObservabilityadminTelemetryRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig">ObservabilityadminTelemetryRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.putRule"></a>

```csharp
private void PutRule(ObservabilityadminTelemetryRuleRule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.putTags"></a>

```csharp
private void PutTags(IResolvable|ObservabilityadminTelemetryRuleTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTags">ObservabilityadminTelemetryRuleTags</a>[]

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityadminTelemetryRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ObservabilityadminTelemetryRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ObservabilityadminTelemetryRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ObservabilityadminTelemetryRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ObservabilityadminTelemetryRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ObservabilityadminTelemetryRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ObservabilityadminTelemetryRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ObservabilityadminTelemetryRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityadminTelemetryRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.regionStatuses">RegionStatuses</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList">ObservabilityadminTelemetryRuleRegionStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference">ObservabilityadminTelemetryRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleArn">RuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList">ObservabilityadminTelemetryRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleInput">RuleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTags">ObservabilityadminTelemetryRuleTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RegionStatuses`<sup>Required</sup> <a name="RegionStatuses" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.regionStatuses"></a>

```csharp
public ObservabilityadminTelemetryRuleRegionStatusesList RegionStatuses { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList">ObservabilityadminTelemetryRuleRegionStatusesList</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.rule"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleOutputReference Rule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference">ObservabilityadminTelemetryRuleRuleOutputReference</a>

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleArn"></a>

```csharp
public string RuleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tags"></a>

```csharp
public ObservabilityadminTelemetryRuleTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList">ObservabilityadminTelemetryRuleTagsList</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRule RuleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tagsInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTags">ObservabilityadminTelemetryRuleTags</a>[]

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityadminTelemetryRuleConfig <a name="ObservabilityadminTelemetryRuleConfig" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ObservabilityadminTelemetryRuleRule Rule,
    string RuleName,
    IResolvable|ObservabilityadminTelemetryRuleTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a></code> | The telemetry rule. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.ruleName">RuleName</a></code> | <code>string</code> | The name of the telemetry rule. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTags">ObservabilityadminTelemetryRuleTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.rule"></a>

```csharp
public ObservabilityadminTelemetryRuleRule Rule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>

The telemetry rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#rule ObservabilityadminTelemetryRule#rule}

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

The name of the telemetry rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#rule_name ObservabilityadminTelemetryRule#rule_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleConfig.property.tags"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTags">ObservabilityadminTelemetryRuleTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#tags ObservabilityadminTelemetryRule#tags}

---

### ObservabilityadminTelemetryRuleRegionStatuses <a name="ObservabilityadminTelemetryRuleRegionStatuses" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatuses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRegionStatuses {

};
```


### ObservabilityadminTelemetryRuleRule <a name="ObservabilityadminTelemetryRuleRule" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRule {
    string ResourceType,
    string TelemetryType,
    bool|IResolvable AllowFieldUpdates = null,
    bool|IResolvable AllRegions = null,
    ObservabilityadminTelemetryRuleRuleDestinationConfiguration DestinationConfiguration = null,
    string[] Regions = null,
    string SelectionCriteria = null,
    string[] TelemetrySourceTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.resourceType">ResourceType</a></code> | <code>string</code> | Resource Type associated with the Telemetry Rule. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.telemetryType">TelemetryType</a></code> | <code>string</code> | Telemetry Type associated with the Telemetry Rule. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.allowFieldUpdates">AllowFieldUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, configuration drift in managed telemetry resources will be detected and remediated for resource-level fields. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.allRegions">AllRegions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true, the rule is replicated to all supported regions. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.destinationConfiguration">DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration">ObservabilityadminTelemetryRuleRuleDestinationConfiguration</a></code> | The destination configuration for telemetry data. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.regions">Regions</a></code> | <code>string[]</code> | List of AWS region codes where the rule should be replicated. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.selectionCriteria">SelectionCriteria</a></code> | <code>string</code> | Selection Criteria on resource level for rule application. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.telemetrySourceTypes">TelemetrySourceTypes</a></code> | <code>string[]</code> | The telemetry source types for a telemetry rule. |

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.resourceType"></a>

```csharp
public string ResourceType { get; set; }
```

- *Type:* string

Resource Type associated with the Telemetry Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#resource_type ObservabilityadminTelemetryRule#resource_type}

---

##### `TelemetryType`<sup>Required</sup> <a name="TelemetryType" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.telemetryType"></a>

```csharp
public string TelemetryType { get; set; }
```

- *Type:* string

Telemetry Type associated with the Telemetry Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#telemetry_type ObservabilityadminTelemetryRule#telemetry_type}

---

##### `AllowFieldUpdates`<sup>Optional</sup> <a name="AllowFieldUpdates" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.allowFieldUpdates"></a>

```csharp
public bool|IResolvable AllowFieldUpdates { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, configuration drift in managed telemetry resources will be detected and remediated for resource-level fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#allow_field_updates ObservabilityadminTelemetryRule#allow_field_updates}

---

##### `AllRegions`<sup>Optional</sup> <a name="AllRegions" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.allRegions"></a>

```csharp
public bool|IResolvable AllRegions { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true, the rule is replicated to all supported regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#all_regions ObservabilityadminTelemetryRule#all_regions}

---

##### `DestinationConfiguration`<sup>Optional</sup> <a name="DestinationConfiguration" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.destinationConfiguration"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfiguration DestinationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration">ObservabilityadminTelemetryRuleRuleDestinationConfiguration</a>

The destination configuration for telemetry data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#destination_configuration ObservabilityadminTelemetryRule#destination_configuration}

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

List of AWS region codes where the rule should be replicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#regions ObservabilityadminTelemetryRule#regions}

---

##### `SelectionCriteria`<sup>Optional</sup> <a name="SelectionCriteria" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.selectionCriteria"></a>

```csharp
public string SelectionCriteria { get; set; }
```

- *Type:* string

Selection Criteria on resource level for rule application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#selection_criteria ObservabilityadminTelemetryRule#selection_criteria}

---

##### `TelemetrySourceTypes`<sup>Optional</sup> <a name="TelemetrySourceTypes" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule.property.telemetrySourceTypes"></a>

```csharp
public string[] TelemetrySourceTypes { get; set; }
```

- *Type:* string[]

The telemetry source types for a telemetry rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#telemetry_source_types ObservabilityadminTelemetryRule#telemetry_source_types}

---

### ObservabilityadminTelemetryRuleRuleDestinationConfiguration <a name="ObservabilityadminTelemetryRuleRuleDestinationConfiguration" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfiguration {
    ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters CloudtrailParameters = null,
    string DestinationPattern = null,
    string DestinationType = null,
    ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters ElbLoadBalancerLoggingParameters = null,
    ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters LogDeliveryParameters = null,
    double RetentionInDays = null,
    ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters VpcFlowLogParameters = null,
    ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters WafLoggingParameters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration.property.cloudtrailParameters">CloudtrailParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters</a></code> | Telemetry parameters for Cloudtrail. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration.property.destinationPattern">DestinationPattern</a></code> | <code>string</code> | Pattern for telemetry data destination. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration.property.destinationType">DestinationType</a></code> | <code>string</code> | Type of telemetry destination. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration.property.elbLoadBalancerLoggingParameters">ElbLoadBalancerLoggingParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters</a></code> | Telemetry parameters for ELB/NLB Load Balancer Logs. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration.property.logDeliveryParameters">LogDeliveryParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters</a></code> | Parameters for log delivery configuration. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | Number of days to retain the telemetry data in the specified destination. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration.property.vpcFlowLogParameters">VpcFlowLogParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters</a></code> | Telemetry parameters for VPC Flow logs. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration.property.wafLoggingParameters">WafLoggingParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters</a></code> | Telemetry parameters for WAF v2 Web ACL. |

---

##### `CloudtrailParameters`<sup>Optional</sup> <a name="CloudtrailParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration.property.cloudtrailParameters"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters CloudtrailParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters</a>

Telemetry parameters for Cloudtrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#cloudtrail_parameters ObservabilityadminTelemetryRule#cloudtrail_parameters}

---

##### `DestinationPattern`<sup>Optional</sup> <a name="DestinationPattern" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration.property.destinationPattern"></a>

```csharp
public string DestinationPattern { get; set; }
```

- *Type:* string

Pattern for telemetry data destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#destination_pattern ObservabilityadminTelemetryRule#destination_pattern}

---

##### `DestinationType`<sup>Optional</sup> <a name="DestinationType" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration.property.destinationType"></a>

```csharp
public string DestinationType { get; set; }
```

- *Type:* string

Type of telemetry destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#destination_type ObservabilityadminTelemetryRule#destination_type}

---

##### `ElbLoadBalancerLoggingParameters`<sup>Optional</sup> <a name="ElbLoadBalancerLoggingParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration.property.elbLoadBalancerLoggingParameters"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters ElbLoadBalancerLoggingParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters</a>

Telemetry parameters for ELB/NLB Load Balancer Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#elb_load_balancer_logging_parameters ObservabilityadminTelemetryRule#elb_load_balancer_logging_parameters}

---

##### `LogDeliveryParameters`<sup>Optional</sup> <a name="LogDeliveryParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration.property.logDeliveryParameters"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters LogDeliveryParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters</a>

Parameters for log delivery configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#log_delivery_parameters ObservabilityadminTelemetryRule#log_delivery_parameters}

---

##### `RetentionInDays`<sup>Optional</sup> <a name="RetentionInDays" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; set; }
```

- *Type:* double

Number of days to retain the telemetry data in the specified destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#retention_in_days ObservabilityadminTelemetryRule#retention_in_days}

---

##### `VpcFlowLogParameters`<sup>Optional</sup> <a name="VpcFlowLogParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration.property.vpcFlowLogParameters"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters VpcFlowLogParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters</a>

Telemetry parameters for VPC Flow logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#vpc_flow_log_parameters ObservabilityadminTelemetryRule#vpc_flow_log_parameters}

---

##### `WafLoggingParameters`<sup>Optional</sup> <a name="WafLoggingParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration.property.wafLoggingParameters"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters WafLoggingParameters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters</a>

Telemetry parameters for WAF v2 Web ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#waf_logging_parameters ObservabilityadminTelemetryRule#waf_logging_parameters}

---

### ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters {
    IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors[] AdvancedEventSelectors = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters.property.advancedEventSelectors">AdvancedEventSelectors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors</a>[]</code> | Create fine-grained selectors for AWS CloudTrail management and data. |

---

##### `AdvancedEventSelectors`<sup>Optional</sup> <a name="AdvancedEventSelectors" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters.property.advancedEventSelectors"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors[] AdvancedEventSelectors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors</a>[]

Create fine-grained selectors for AWS CloudTrail management and data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#advanced_event_selectors ObservabilityadminTelemetryRule#advanced_event_selectors}

---

### ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors {
    IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors[] FieldSelectors = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors.property.fieldSelectors">FieldSelectors</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors</a>[]</code> | Contains all selector statements in an advanced event selector. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors.property.name">Name</a></code> | <code>string</code> | An optional descriptive name for the advanced event selector. |

---

##### `FieldSelectors`<sup>Optional</sup> <a name="FieldSelectors" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors.property.fieldSelectors"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors[] FieldSelectors { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors</a>[]

Contains all selector statements in an advanced event selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#field_selectors ObservabilityadminTelemetryRule#field_selectors}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

An optional descriptive name for the advanced event selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#name ObservabilityadminTelemetryRule#name}

---

### ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors {
    string[] EndsWith = null,
    string[] EqualTo = null,
    string Field = null,
    string[] NotEndsWith = null,
    string[] NotEquals = null,
    string[] NotStartsWith = null,
    string[] StartsWith = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.endsWith">EndsWith</a></code> | <code>string[]</code> | An operator that includes events that match the last few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.equalTo">EqualTo</a></code> | <code>string[]</code> | An operator that includes events that match the exact value of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.field">Field</a></code> | <code>string</code> | A field in a CloudTrail event record on which to filter events to be logged. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.notEndsWith">NotEndsWith</a></code> | <code>string[]</code> | An operator that excludes events that match the last few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.notEquals">NotEquals</a></code> | <code>string[]</code> | An operator that excludes events that match the exact value of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.notStartsWith">NotStartsWith</a></code> | <code>string[]</code> | An operator that excludes events that match the first few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.startsWith">StartsWith</a></code> | <code>string[]</code> | An operator that includes events that match the first few characters of the event record field specified as the value of Field. |

---

##### `EndsWith`<sup>Optional</sup> <a name="EndsWith" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.endsWith"></a>

```csharp
public string[] EndsWith { get; set; }
```

- *Type:* string[]

An operator that includes events that match the last few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#ends_with ObservabilityadminTelemetryRule#ends_with}

---

##### `EqualTo`<sup>Optional</sup> <a name="EqualTo" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.equalTo"></a>

```csharp
public string[] EqualTo { get; set; }
```

- *Type:* string[]

An operator that includes events that match the exact value of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#equals ObservabilityadminTelemetryRule#equals}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

A field in a CloudTrail event record on which to filter events to be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#field ObservabilityadminTelemetryRule#field}

---

##### `NotEndsWith`<sup>Optional</sup> <a name="NotEndsWith" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.notEndsWith"></a>

```csharp
public string[] NotEndsWith { get; set; }
```

- *Type:* string[]

An operator that excludes events that match the last few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#not_ends_with ObservabilityadminTelemetryRule#not_ends_with}

---

##### `NotEquals`<sup>Optional</sup> <a name="NotEquals" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.notEquals"></a>

```csharp
public string[] NotEquals { get; set; }
```

- *Type:* string[]

An operator that excludes events that match the exact value of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#not_equals ObservabilityadminTelemetryRule#not_equals}

---

##### `NotStartsWith`<sup>Optional</sup> <a name="NotStartsWith" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.notStartsWith"></a>

```csharp
public string[] NotStartsWith { get; set; }
```

- *Type:* string[]

An operator that excludes events that match the first few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#not_starts_with ObservabilityadminTelemetryRule#not_starts_with}

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.startsWith"></a>

```csharp
public string[] StartsWith { get; set; }
```

- *Type:* string[]

An operator that includes events that match the first few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#starts_with ObservabilityadminTelemetryRule#starts_with}

---

### ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters {
    string FieldDelimiter = null,
    string OutputFormat = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | A delimiter to delineate log fields. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters.property.outputFormat">OutputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#output_format ObservabilityadminTelemetryRule#output_format}. |

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; set; }
```

- *Type:* string

A delimiter to delineate log fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#field_delimiter ObservabilityadminTelemetryRule#field_delimiter}

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters.property.outputFormat"></a>

```csharp
public string OutputFormat { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#output_format ObservabilityadminTelemetryRule#output_format}.

---

### ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters {
    string[] LogTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters.property.logTypes">LogTypes</a></code> | <code>string[]</code> | Types of logs to deliver. |

---

##### `LogTypes`<sup>Optional</sup> <a name="LogTypes" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters.property.logTypes"></a>

```csharp
public string[] LogTypes { get; set; }
```

- *Type:* string[]

Types of logs to deliver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#log_types ObservabilityadminTelemetryRule#log_types}

---

### ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters {
    string LogFormat = null,
    double MaxAggregationInterval = null,
    string TrafficType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.property.logFormat">LogFormat</a></code> | <code>string</code> | The fields to include in the flow log record. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.property.maxAggregationInterval">MaxAggregationInterval</a></code> | <code>double</code> | The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.property.trafficType">TrafficType</a></code> | <code>string</code> | The type of traffic captured for the flow log. Default is ALL. |

---

##### `LogFormat`<sup>Optional</sup> <a name="LogFormat" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.property.logFormat"></a>

```csharp
public string LogFormat { get; set; }
```

- *Type:* string

The fields to include in the flow log record.

If you omit this parameter, the flow log is created using the default format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#log_format ObservabilityadminTelemetryRule#log_format}

---

##### `MaxAggregationInterval`<sup>Optional</sup> <a name="MaxAggregationInterval" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.property.maxAggregationInterval"></a>

```csharp
public double MaxAggregationInterval { get; set; }
```

- *Type:* double

The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record.

Default is 600s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#max_aggregation_interval ObservabilityadminTelemetryRule#max_aggregation_interval}

---

##### `TrafficType`<sup>Optional</sup> <a name="TrafficType" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.property.trafficType"></a>

```csharp
public string TrafficType { get; set; }
```

- *Type:* string

The type of traffic captured for the flow log. Default is ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#traffic_type ObservabilityadminTelemetryRule#traffic_type}

---

### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters {
    ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter LoggingFilter = null,
    string LogType = null,
    IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields[] RedactedFields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.property.loggingFilter">LoggingFilter</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter</a></code> | Default handling for logs that don't match any of the specified filtering conditions. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.property.logType">LogType</a></code> | <code>string</code> | The type of logs to generate for WAF. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.property.redactedFields">RedactedFields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields</a>[]</code> | Fields not to be included in the logs. |

---

##### `LoggingFilter`<sup>Optional</sup> <a name="LoggingFilter" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.property.loggingFilter"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter LoggingFilter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter</a>

Default handling for logs that don't match any of the specified filtering conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#logging_filter ObservabilityadminTelemetryRule#logging_filter}

---

##### `LogType`<sup>Optional</sup> <a name="LogType" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.property.logType"></a>

```csharp
public string LogType { get; set; }
```

- *Type:* string

The type of logs to generate for WAF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#log_type ObservabilityadminTelemetryRule#log_type}

---

##### `RedactedFields`<sup>Optional</sup> <a name="RedactedFields" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.property.redactedFields"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields[] RedactedFields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields</a>[]

Fields not to be included in the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#redacted_fields ObservabilityadminTelemetryRule#redacted_fields}

---

### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter {
    string DefaultBehavior = null,
    IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters[] Filters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter.property.defaultBehavior">DefaultBehavior</a></code> | <code>string</code> | The behavior required of the filter. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter.property.filters">Filters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters</a>[]</code> | A list of filters to be applied. |

---

##### `DefaultBehavior`<sup>Optional</sup> <a name="DefaultBehavior" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter.property.defaultBehavior"></a>

```csharp
public string DefaultBehavior { get; set; }
```

- *Type:* string

The behavior required of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#default_behavior ObservabilityadminTelemetryRule#default_behavior}

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter.property.filters"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters[] Filters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters</a>[]

A list of filters to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#filters ObservabilityadminTelemetryRule#filters}

---

### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters {
    string Behavior = null,
    IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions[] Conditions = null,
    string Requirement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.property.behavior">Behavior</a></code> | <code>string</code> | The behavior required of the filter. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions</a>[]</code> | A list of conditions for a filter. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.property.requirement">Requirement</a></code> | <code>string</code> | The requirement portion of the filter. |

---

##### `Behavior`<sup>Optional</sup> <a name="Behavior" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.property.behavior"></a>

```csharp
public string Behavior { get; set; }
```

- *Type:* string

The behavior required of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#behavior ObservabilityadminTelemetryRule#behavior}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.property.conditions"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions</a>[]

A list of conditions for a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#conditions ObservabilityadminTelemetryRule#conditions}

---

##### `Requirement`<sup>Optional</sup> <a name="Requirement" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.property.requirement"></a>

```csharp
public string Requirement { get; set; }
```

- *Type:* string

The requirement portion of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#requirement ObservabilityadminTelemetryRule#requirement}

---

### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions {
    ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition ActionCondition = null,
    ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition LabelNameCondition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions.property.actionCondition">ActionCondition</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition</a></code> | The condition of the action desired in the filter. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions.property.labelNameCondition">LabelNameCondition</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition</a></code> | The label name of the condition. |

---

##### `ActionCondition`<sup>Optional</sup> <a name="ActionCondition" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions.property.actionCondition"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition ActionCondition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition</a>

The condition of the action desired in the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#action_condition ObservabilityadminTelemetryRule#action_condition}

---

##### `LabelNameCondition`<sup>Optional</sup> <a name="LabelNameCondition" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions.property.labelNameCondition"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition LabelNameCondition { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition</a>

The label name of the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#label_name_condition ObservabilityadminTelemetryRule#label_name_condition}

---

### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition {
    string Action = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition.property.action">Action</a></code> | <code>string</code> | The enumerated action to take. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The enumerated action to take.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#action ObservabilityadminTelemetryRule#action}

---

### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition {
    string LabelName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition.property.labelName">LabelName</a></code> | <code>string</code> | The label name of the condition. |

---

##### `LabelName`<sup>Optional</sup> <a name="LabelName" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition.property.labelName"></a>

```csharp
public string LabelName { get; set; }
```

- *Type:* string

The label name of the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#label_name ObservabilityadminTelemetryRule#label_name}

---

### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields {
    string Method = null,
    string QueryString = null,
    ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader SingleHeader = null,
    string UriPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.method">Method</a></code> | <code>string</code> | The method with which to match this rule. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.queryString">QueryString</a></code> | <code>string</code> | The query string to find the resource to match this field to. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.singleHeader">SingleHeader</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader</a></code> | Header for the field to match. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.uriPath">UriPath</a></code> | <code>string</code> | This is the URI path to match this rule to. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

The method with which to match this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#method ObservabilityadminTelemetryRule#method}

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.queryString"></a>

```csharp
public string QueryString { get; set; }
```

- *Type:* string

The query string to find the resource to match this field to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#query_string ObservabilityadminTelemetryRule#query_string}

---

##### `SingleHeader`<sup>Optional</sup> <a name="SingleHeader" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.singleHeader"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader SingleHeader { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader</a>

Header for the field to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#single_header ObservabilityadminTelemetryRule#single_header}

---

##### `UriPath`<sup>Optional</sup> <a name="UriPath" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.uriPath"></a>

```csharp
public string UriPath { get; set; }
```

- *Type:* string

This is the URI path to match this rule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#uri_path ObservabilityadminTelemetryRule#uri_path}

---

### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader {
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader.property.name">Name</a></code> | <code>string</code> | The name of the header. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#name ObservabilityadminTelemetryRule#name}

---

### ObservabilityadminTelemetryRuleTags <a name="ObservabilityadminTelemetryRuleTags" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#key ObservabilityadminTelemetryRule#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_telemetry_rule#value ObservabilityadminTelemetryRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityadminTelemetryRuleRegionStatusesList <a name="ObservabilityadminTelemetryRuleRegionStatusesList" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRegionStatusesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.get"></a>

```csharp
private ObservabilityadminTelemetryRuleRegionStatusesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ObservabilityadminTelemetryRuleRegionStatusesOutputReference <a name="ObservabilityadminTelemetryRuleRegionStatusesOutputReference" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRegionStatusesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.property.ruleArn">RuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatuses">ObservabilityadminTelemetryRuleRegionStatuses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.property.ruleArn"></a>

```csharp
public string RuleArn { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatusesOutputReference.property.internalValue"></a>

```csharp
public ObservabilityadminTelemetryRuleRegionStatuses InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRegionStatuses">ObservabilityadminTelemetryRuleRegionStatuses</a>

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.get"></a>

```csharp
private ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors</a>[]

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetEndsWith">ResetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetEqualTo">ResetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetField">ResetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEndsWith">ResetNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEquals">ResetNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotStartsWith">ResetNotStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetStartsWith">ResetStartsWith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndsWith` <a name="ResetEndsWith" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetEndsWith"></a>

```csharp
private void ResetEndsWith()
```

##### `ResetEqualTo` <a name="ResetEqualTo" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetEqualTo"></a>

```csharp
private void ResetEqualTo()
```

##### `ResetField` <a name="ResetField" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetField"></a>

```csharp
private void ResetField()
```

##### `ResetNotEndsWith` <a name="ResetNotEndsWith" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEndsWith"></a>

```csharp
private void ResetNotEndsWith()
```

##### `ResetNotEquals` <a name="ResetNotEquals" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEquals"></a>

```csharp
private void ResetNotEquals()
```

##### `ResetNotStartsWith` <a name="ResetNotStartsWith" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotStartsWith"></a>

```csharp
private void ResetNotStartsWith()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetStartsWith"></a>

```csharp
private void ResetStartsWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWithInput">EndsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalToInput">EqualToInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWithInput">NotEndsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEqualsInput">NotEqualsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWithInput">NotStartsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWithInput">StartsWithInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith">EndsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo">EqualTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith">NotEndsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals">NotEquals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith">NotStartsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith">StartsWith</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndsWithInput`<sup>Optional</sup> <a name="EndsWithInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWithInput"></a>

```csharp
public string[] EndsWithInput { get; }
```

- *Type:* string[]

---

##### `EqualToInput`<sup>Optional</sup> <a name="EqualToInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalToInput"></a>

```csharp
public string[] EqualToInput { get; }
```

- *Type:* string[]

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `NotEndsWithInput`<sup>Optional</sup> <a name="NotEndsWithInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWithInput"></a>

```csharp
public string[] NotEndsWithInput { get; }
```

- *Type:* string[]

---

##### `NotEqualsInput`<sup>Optional</sup> <a name="NotEqualsInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEqualsInput"></a>

```csharp
public string[] NotEqualsInput { get; }
```

- *Type:* string[]

---

##### `NotStartsWithInput`<sup>Optional</sup> <a name="NotStartsWithInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWithInput"></a>

```csharp
public string[] NotStartsWithInput { get; }
```

- *Type:* string[]

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWithInput"></a>

```csharp
public string[] StartsWithInput { get; }
```

- *Type:* string[]

---

##### `EndsWith`<sup>Required</sup> <a name="EndsWith" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith"></a>

```csharp
public string[] EndsWith { get; }
```

- *Type:* string[]

---

##### `EqualTo`<sup>Required</sup> <a name="EqualTo" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo"></a>

```csharp
public string[] EqualTo { get; }
```

- *Type:* string[]

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `NotEndsWith`<sup>Required</sup> <a name="NotEndsWith" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith"></a>

```csharp
public string[] NotEndsWith { get; }
```

- *Type:* string[]

---

##### `NotEquals`<sup>Required</sup> <a name="NotEquals" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals"></a>

```csharp
public string[] NotEquals { get; }
```

- *Type:* string[]

---

##### `NotStartsWith`<sup>Required</sup> <a name="NotStartsWith" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith"></a>

```csharp
public string[] NotStartsWith { get; }
```

- *Type:* string[]

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith"></a>

```csharp
public string[] StartsWith { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors</a>

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.get"></a>

```csharp
private ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors</a>[]

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.putFieldSelectors">PutFieldSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resetFieldSelectors">ResetFieldSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldSelectors` <a name="PutFieldSelectors" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.putFieldSelectors"></a>

```csharp
private void PutFieldSelectors(IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.putFieldSelectors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors</a>[]

---

##### `ResetFieldSelectors` <a name="ResetFieldSelectors" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resetFieldSelectors"></a>

```csharp
private void ResetFieldSelectors()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.fieldSelectors">FieldSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.fieldSelectorsInput">FieldSelectorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldSelectors`<sup>Required</sup> <a name="FieldSelectors" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.fieldSelectors"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList FieldSelectors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList</a>

---

##### `FieldSelectorsInput`<sup>Optional</sup> <a name="FieldSelectorsInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.fieldSelectorsInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors[] FieldSelectorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors</a>

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.putAdvancedEventSelectors">PutAdvancedEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.resetAdvancedEventSelectors">ResetAdvancedEventSelectors</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedEventSelectors` <a name="PutAdvancedEventSelectors" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.putAdvancedEventSelectors"></a>

```csharp
private void PutAdvancedEventSelectors(IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.putAdvancedEventSelectors.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors</a>[]

---

##### `ResetAdvancedEventSelectors` <a name="ResetAdvancedEventSelectors" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.resetAdvancedEventSelectors"></a>

```csharp
private void ResetAdvancedEventSelectors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.advancedEventSelectors">AdvancedEventSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.advancedEventSelectorsInput">AdvancedEventSelectorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdvancedEventSelectors`<sup>Required</sup> <a name="AdvancedEventSelectors" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.advancedEventSelectors"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList AdvancedEventSelectors { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList</a>

---

##### `AdvancedEventSelectorsInput`<sup>Optional</sup> <a name="AdvancedEventSelectorsInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.advancedEventSelectorsInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors[] AdvancedEventSelectorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters</a>

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resetFieldDelimiter"></a>

```csharp
private void ResetFieldDelimiter()
```

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resetOutputFormat"></a>

```csharp
private void ResetOutputFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.outputFormatInput">OutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.outputFormat">OutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.fieldDelimiterInput"></a>

```csharp
public string FieldDelimiterInput { get; }
```

- *Type:* string

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.outputFormatInput"></a>

```csharp
public string OutputFormatInput { get; }
```

- *Type:* string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.fieldDelimiter"></a>

```csharp
public string FieldDelimiter { get; }
```

- *Type:* string

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.outputFormat"></a>

```csharp
public string OutputFormat { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters</a>

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.resetLogTypes">ResetLogTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogTypes` <a name="ResetLogTypes" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.resetLogTypes"></a>

```csharp
private void ResetLogTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.logTypesInput">LogTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.logTypes">LogTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogTypesInput`<sup>Optional</sup> <a name="LogTypesInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.logTypesInput"></a>

```csharp
public string[] LogTypesInput { get; }
```

- *Type:* string[]

---

##### `LogTypes`<sup>Required</sup> <a name="LogTypes" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.logTypes"></a>

```csharp
public string[] LogTypes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters</a>

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.putCloudtrailParameters">PutCloudtrailParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.putElbLoadBalancerLoggingParameters">PutElbLoadBalancerLoggingParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.putLogDeliveryParameters">PutLogDeliveryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.putVpcFlowLogParameters">PutVpcFlowLogParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.putWafLoggingParameters">PutWafLoggingParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resetCloudtrailParameters">ResetCloudtrailParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resetDestinationPattern">ResetDestinationPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resetDestinationType">ResetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resetElbLoadBalancerLoggingParameters">ResetElbLoadBalancerLoggingParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resetLogDeliveryParameters">ResetLogDeliveryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resetRetentionInDays">ResetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resetVpcFlowLogParameters">ResetVpcFlowLogParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resetWafLoggingParameters">ResetWafLoggingParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudtrailParameters` <a name="PutCloudtrailParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.putCloudtrailParameters"></a>

```csharp
private void PutCloudtrailParameters(ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.putCloudtrailParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters</a>

---

##### `PutElbLoadBalancerLoggingParameters` <a name="PutElbLoadBalancerLoggingParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.putElbLoadBalancerLoggingParameters"></a>

```csharp
private void PutElbLoadBalancerLoggingParameters(ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.putElbLoadBalancerLoggingParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters</a>

---

##### `PutLogDeliveryParameters` <a name="PutLogDeliveryParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.putLogDeliveryParameters"></a>

```csharp
private void PutLogDeliveryParameters(ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.putLogDeliveryParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters</a>

---

##### `PutVpcFlowLogParameters` <a name="PutVpcFlowLogParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.putVpcFlowLogParameters"></a>

```csharp
private void PutVpcFlowLogParameters(ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.putVpcFlowLogParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters</a>

---

##### `PutWafLoggingParameters` <a name="PutWafLoggingParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.putWafLoggingParameters"></a>

```csharp
private void PutWafLoggingParameters(ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.putWafLoggingParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters</a>

---

##### `ResetCloudtrailParameters` <a name="ResetCloudtrailParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resetCloudtrailParameters"></a>

```csharp
private void ResetCloudtrailParameters()
```

##### `ResetDestinationPattern` <a name="ResetDestinationPattern" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resetDestinationPattern"></a>

```csharp
private void ResetDestinationPattern()
```

##### `ResetDestinationType` <a name="ResetDestinationType" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resetDestinationType"></a>

```csharp
private void ResetDestinationType()
```

##### `ResetElbLoadBalancerLoggingParameters` <a name="ResetElbLoadBalancerLoggingParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resetElbLoadBalancerLoggingParameters"></a>

```csharp
private void ResetElbLoadBalancerLoggingParameters()
```

##### `ResetLogDeliveryParameters` <a name="ResetLogDeliveryParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resetLogDeliveryParameters"></a>

```csharp
private void ResetLogDeliveryParameters()
```

##### `ResetRetentionInDays` <a name="ResetRetentionInDays" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resetRetentionInDays"></a>

```csharp
private void ResetRetentionInDays()
```

##### `ResetVpcFlowLogParameters` <a name="ResetVpcFlowLogParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resetVpcFlowLogParameters"></a>

```csharp
private void ResetVpcFlowLogParameters()
```

##### `ResetWafLoggingParameters` <a name="ResetWafLoggingParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.resetWafLoggingParameters"></a>

```csharp
private void ResetWafLoggingParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.cloudtrailParameters">CloudtrailParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.elbLoadBalancerLoggingParameters">ElbLoadBalancerLoggingParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.logDeliveryParameters">LogDeliveryParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.vpcFlowLogParameters">VpcFlowLogParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.wafLoggingParameters">WafLoggingParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.cloudtrailParametersInput">CloudtrailParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationPatternInput">DestinationPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.elbLoadBalancerLoggingParametersInput">ElbLoadBalancerLoggingParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.logDeliveryParametersInput">LogDeliveryParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.retentionInDaysInput">RetentionInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.vpcFlowLogParametersInput">VpcFlowLogParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.wafLoggingParametersInput">WafLoggingParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationPattern">DestinationPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationType">DestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.retentionInDays">RetentionInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration">ObservabilityadminTelemetryRuleRuleDestinationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudtrailParameters`<sup>Required</sup> <a name="CloudtrailParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.cloudtrailParameters"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference CloudtrailParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference</a>

---

##### `ElbLoadBalancerLoggingParameters`<sup>Required</sup> <a name="ElbLoadBalancerLoggingParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.elbLoadBalancerLoggingParameters"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference ElbLoadBalancerLoggingParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference</a>

---

##### `LogDeliveryParameters`<sup>Required</sup> <a name="LogDeliveryParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.logDeliveryParameters"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference LogDeliveryParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference</a>

---

##### `VpcFlowLogParameters`<sup>Required</sup> <a name="VpcFlowLogParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.vpcFlowLogParameters"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference VpcFlowLogParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference</a>

---

##### `WafLoggingParameters`<sup>Required</sup> <a name="WafLoggingParameters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.wafLoggingParameters"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference WafLoggingParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference</a>

---

##### `CloudtrailParametersInput`<sup>Optional</sup> <a name="CloudtrailParametersInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.cloudtrailParametersInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters CloudtrailParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationCloudtrailParameters</a>

---

##### `DestinationPatternInput`<sup>Optional</sup> <a name="DestinationPatternInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationPatternInput"></a>

```csharp
public string DestinationPatternInput { get; }
```

- *Type:* string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationTypeInput"></a>

```csharp
public string DestinationTypeInput { get; }
```

- *Type:* string

---

##### `ElbLoadBalancerLoggingParametersInput`<sup>Optional</sup> <a name="ElbLoadBalancerLoggingParametersInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.elbLoadBalancerLoggingParametersInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters ElbLoadBalancerLoggingParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters</a>

---

##### `LogDeliveryParametersInput`<sup>Optional</sup> <a name="LogDeliveryParametersInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.logDeliveryParametersInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters LogDeliveryParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters</a>

---

##### `RetentionInDaysInput`<sup>Optional</sup> <a name="RetentionInDaysInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.retentionInDaysInput"></a>

```csharp
public double RetentionInDaysInput { get; }
```

- *Type:* double

---

##### `VpcFlowLogParametersInput`<sup>Optional</sup> <a name="VpcFlowLogParametersInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.vpcFlowLogParametersInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters VpcFlowLogParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters</a>

---

##### `WafLoggingParametersInput`<sup>Optional</sup> <a name="WafLoggingParametersInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.wafLoggingParametersInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters WafLoggingParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters</a>

---

##### `DestinationPattern`<sup>Required</sup> <a name="DestinationPattern" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationPattern"></a>

```csharp
public string DestinationPattern { get; }
```

- *Type:* string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationType"></a>

```csharp
public string DestinationType { get; }
```

- *Type:* string

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.retentionInDays"></a>

```csharp
public double RetentionInDays { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration">ObservabilityadminTelemetryRuleRuleDestinationConfiguration</a>

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resetLogFormat">ResetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resetMaxAggregationInterval">ResetMaxAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resetTrafficType">ResetTrafficType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogFormat` <a name="ResetLogFormat" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resetLogFormat"></a>

```csharp
private void ResetLogFormat()
```

##### `ResetMaxAggregationInterval` <a name="ResetMaxAggregationInterval" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resetMaxAggregationInterval"></a>

```csharp
private void ResetMaxAggregationInterval()
```

##### `ResetTrafficType` <a name="ResetTrafficType" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resetTrafficType"></a>

```csharp
private void ResetTrafficType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.logFormatInput">LogFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.maxAggregationIntervalInput">MaxAggregationIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.trafficTypeInput">TrafficTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.logFormat">LogFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.maxAggregationInterval">MaxAggregationInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.trafficType">TrafficType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LogFormatInput`<sup>Optional</sup> <a name="LogFormatInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.logFormatInput"></a>

```csharp
public string LogFormatInput { get; }
```

- *Type:* string

---

##### `MaxAggregationIntervalInput`<sup>Optional</sup> <a name="MaxAggregationIntervalInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.maxAggregationIntervalInput"></a>

```csharp
public double MaxAggregationIntervalInput { get; }
```

- *Type:* double

---

##### `TrafficTypeInput`<sup>Optional</sup> <a name="TrafficTypeInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.trafficTypeInput"></a>

```csharp
public string TrafficTypeInput { get; }
```

- *Type:* string

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.logFormat"></a>

```csharp
public string LogFormat { get; }
```

- *Type:* string

---

##### `MaxAggregationInterval`<sup>Required</sup> <a name="MaxAggregationInterval" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.maxAggregationInterval"></a>

```csharp
public double MaxAggregationInterval { get; }
```

- *Type:* double

---

##### `TrafficType`<sup>Required</sup> <a name="TrafficType" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.trafficType"></a>

```csharp
public string TrafficType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters</a>

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.resetAction">ResetAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.resetAction"></a>

```csharp
private void ResetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition</a>

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resetLabelName">ResetLabelName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabelName` <a name="ResetLabelName" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resetLabelName"></a>

```csharp
private void ResetLabelName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelNameInput">LabelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelName">LabelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LabelNameInput`<sup>Optional</sup> <a name="LabelNameInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelNameInput"></a>

```csharp
public string LabelNameInput { get; }
```

- *Type:* string

---

##### `LabelName`<sup>Required</sup> <a name="LabelName" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelName"></a>

```csharp
public string LabelName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition</a>

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.get"></a>

```csharp
private ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions</a>[]

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.putActionCondition">PutActionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.putLabelNameCondition">PutLabelNameCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resetActionCondition">ResetActionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resetLabelNameCondition">ResetLabelNameCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActionCondition` <a name="PutActionCondition" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.putActionCondition"></a>

```csharp
private void PutActionCondition(ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.putActionCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition</a>

---

##### `PutLabelNameCondition` <a name="PutLabelNameCondition" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.putLabelNameCondition"></a>

```csharp
private void PutLabelNameCondition(ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.putLabelNameCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition</a>

---

##### `ResetActionCondition` <a name="ResetActionCondition" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resetActionCondition"></a>

```csharp
private void ResetActionCondition()
```

##### `ResetLabelNameCondition` <a name="ResetLabelNameCondition" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resetLabelNameCondition"></a>

```csharp
private void ResetLabelNameCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.actionCondition">ActionCondition</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.labelNameCondition">LabelNameCondition</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.actionConditionInput">ActionConditionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.labelNameConditionInput">LabelNameConditionInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionCondition`<sup>Required</sup> <a name="ActionCondition" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.actionCondition"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference ActionCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference</a>

---

##### `LabelNameCondition`<sup>Required</sup> <a name="LabelNameCondition" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.labelNameCondition"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference LabelNameCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference</a>

---

##### `ActionConditionInput`<sup>Optional</sup> <a name="ActionConditionInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.actionConditionInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition ActionConditionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition</a>

---

##### `LabelNameConditionInput`<sup>Optional</sup> <a name="LabelNameConditionInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.labelNameConditionInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition LabelNameConditionInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions</a>

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.get"></a>

```csharp
private ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters</a>[]

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resetBehavior">ResetBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resetRequirement">ResetRequirement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.putConditions"></a>

```csharp
private void PutConditions(IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions</a>[]

---

##### `ResetBehavior` <a name="ResetBehavior" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resetBehavior"></a>

```csharp
private void ResetBehavior()
```

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resetConditions"></a>

```csharp
private void ResetConditions()
```

##### `ResetRequirement` <a name="ResetRequirement" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resetRequirement"></a>

```csharp
private void ResetRequirement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.behaviorInput">BehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.requirementInput">RequirementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.behavior">Behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.requirement">Requirement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.conditions"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList</a>

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.behaviorInput"></a>

```csharp
public string BehaviorInput { get; }
```

- *Type:* string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.conditionsInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions</a>[]

---

##### `RequirementInput`<sup>Optional</sup> <a name="RequirementInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.requirementInput"></a>

```csharp
public string RequirementInput { get; }
```

- *Type:* string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.behavior"></a>

```csharp
public string Behavior { get; }
```

- *Type:* string

---

##### `Requirement`<sup>Required</sup> <a name="Requirement" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.requirement"></a>

```csharp
public string Requirement { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters</a>

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resetDefaultBehavior">ResetDefaultBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.putFilters"></a>

```csharp
private void PutFilters(IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.putFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters</a>[]

---

##### `ResetDefaultBehavior` <a name="ResetDefaultBehavior" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resetDefaultBehavior"></a>

```csharp
private void ResetDefaultBehavior()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resetFilters"></a>

```csharp
private void ResetFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.defaultBehaviorInput">DefaultBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.filtersInput">FiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.defaultBehavior">DefaultBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.filters"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList Filters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList</a>

---

##### `DefaultBehaviorInput`<sup>Optional</sup> <a name="DefaultBehaviorInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.defaultBehaviorInput"></a>

```csharp
public string DefaultBehaviorInput { get; }
```

- *Type:* string

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.filtersInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters[] FiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters</a>[]

---

##### `DefaultBehavior`<sup>Required</sup> <a name="DefaultBehavior" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.defaultBehavior"></a>

```csharp
public string DefaultBehavior { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter</a>

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.putLoggingFilter">PutLoggingFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.putRedactedFields">PutRedactedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resetLoggingFilter">ResetLoggingFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resetLogType">ResetLogType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resetRedactedFields">ResetRedactedFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingFilter` <a name="PutLoggingFilter" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.putLoggingFilter"></a>

```csharp
private void PutLoggingFilter(ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.putLoggingFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter</a>

---

##### `PutRedactedFields` <a name="PutRedactedFields" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.putRedactedFields"></a>

```csharp
private void PutRedactedFields(IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.putRedactedFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields</a>[]

---

##### `ResetLoggingFilter` <a name="ResetLoggingFilter" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resetLoggingFilter"></a>

```csharp
private void ResetLoggingFilter()
```

##### `ResetLogType` <a name="ResetLogType" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resetLogType"></a>

```csharp
private void ResetLogType()
```

##### `ResetRedactedFields` <a name="ResetRedactedFields" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resetRedactedFields"></a>

```csharp
private void ResetRedactedFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.loggingFilter">LoggingFilter</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.redactedFields">RedactedFields</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.loggingFilterInput">LoggingFilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.redactedFieldsInput">RedactedFieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.logType">LogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoggingFilter`<sup>Required</sup> <a name="LoggingFilter" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.loggingFilter"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference LoggingFilter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference</a>

---

##### `RedactedFields`<sup>Required</sup> <a name="RedactedFields" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.redactedFields"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList RedactedFields { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList</a>

---

##### `LoggingFilterInput`<sup>Optional</sup> <a name="LoggingFilterInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.loggingFilterInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter LoggingFilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter</a>

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.logTypeInput"></a>

```csharp
public string LogTypeInput { get; }
```

- *Type:* string

---

##### `RedactedFieldsInput`<sup>Optional</sup> <a name="RedactedFieldsInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.redactedFieldsInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields[] RedactedFieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields</a>[]

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.logType"></a>

```csharp
public string LogType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParameters</a>

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.get"></a>

```csharp
private ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields</a>[]

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.putSingleHeader">PutSingleHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetSingleHeader">ResetSingleHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetUriPath">ResetUriPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSingleHeader` <a name="PutSingleHeader" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.putSingleHeader"></a>

```csharp
private void PutSingleHeader(ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.putSingleHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader</a>

---

##### `ResetMethod` <a name="ResetMethod" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetQueryString"></a>

```csharp
private void ResetQueryString()
```

##### `ResetSingleHeader` <a name="ResetSingleHeader" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetSingleHeader"></a>

```csharp
private void ResetSingleHeader()
```

##### `ResetUriPath` <a name="ResetUriPath" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetUriPath"></a>

```csharp
private void ResetUriPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.singleHeader">SingleHeader</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.singleHeaderInput">SingleHeaderInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.uriPathInput">UriPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.queryString">QueryString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.uriPath">UriPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SingleHeader`<sup>Required</sup> <a name="SingleHeader" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.singleHeader"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference SingleHeader { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference</a>

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.queryStringInput"></a>

```csharp
public string QueryStringInput { get; }
```

- *Type:* string

---

##### `SingleHeaderInput`<sup>Optional</sup> <a name="SingleHeaderInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.singleHeaderInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader SingleHeaderInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader</a>

---

##### `UriPathInput`<sup>Optional</sup> <a name="UriPathInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.uriPathInput"></a>

```csharp
public string UriPathInput { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.queryString"></a>

```csharp
public string QueryString { get; }
```

- *Type:* string

---

##### `UriPath`<sup>Required</sup> <a name="UriPath" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.uriPath"></a>

```csharp
public string UriPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields</a>

---


### ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference <a name="ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader">ObservabilityadminTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader</a>

---


### ObservabilityadminTelemetryRuleRuleOutputReference <a name="ObservabilityadminTelemetryRuleRuleOutputReference" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleRuleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.putDestinationConfiguration">PutDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resetAllowFieldUpdates">ResetAllowFieldUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resetAllRegions">ResetAllRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resetDestinationConfiguration">ResetDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resetSelectionCriteria">ResetSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resetTelemetrySourceTypes">ResetTelemetrySourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationConfiguration` <a name="PutDestinationConfiguration" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.putDestinationConfiguration"></a>

```csharp
private void PutDestinationConfiguration(ObservabilityadminTelemetryRuleRuleDestinationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.putDestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration">ObservabilityadminTelemetryRuleRuleDestinationConfiguration</a>

---

##### `ResetAllowFieldUpdates` <a name="ResetAllowFieldUpdates" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resetAllowFieldUpdates"></a>

```csharp
private void ResetAllowFieldUpdates()
```

##### `ResetAllRegions` <a name="ResetAllRegions" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resetAllRegions"></a>

```csharp
private void ResetAllRegions()
```

##### `ResetDestinationConfiguration` <a name="ResetDestinationConfiguration" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resetDestinationConfiguration"></a>

```csharp
private void ResetDestinationConfiguration()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resetRegions"></a>

```csharp
private void ResetRegions()
```

##### `ResetSelectionCriteria` <a name="ResetSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resetSelectionCriteria"></a>

```csharp
private void ResetSelectionCriteria()
```

##### `ResetTelemetrySourceTypes` <a name="ResetTelemetrySourceTypes" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.resetTelemetrySourceTypes"></a>

```csharp
private void ResetTelemetrySourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.destinationConfiguration">DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.allowFieldUpdatesInput">AllowFieldUpdatesInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.allRegionsInput">AllRegionsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.destinationConfigurationInput">DestinationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration">ObservabilityadminTelemetryRuleRuleDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.selectionCriteriaInput">SelectionCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.telemetrySourceTypesInput">TelemetrySourceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.telemetryTypeInput">TelemetryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.allowFieldUpdates">AllowFieldUpdates</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.allRegions">AllRegions</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.resourceType">ResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.selectionCriteria">SelectionCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.telemetrySourceTypes">TelemetrySourceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.telemetryType">TelemetryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationConfiguration`<sup>Required</sup> <a name="DestinationConfiguration" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.destinationConfiguration"></a>

```csharp
public ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference DestinationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference">ObservabilityadminTelemetryRuleRuleDestinationConfigurationOutputReference</a>

---

##### `AllowFieldUpdatesInput`<sup>Optional</sup> <a name="AllowFieldUpdatesInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.allowFieldUpdatesInput"></a>

```csharp
public bool|IResolvable AllowFieldUpdatesInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllRegionsInput`<sup>Optional</sup> <a name="AllRegionsInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.allRegionsInput"></a>

```csharp
public bool|IResolvable AllRegionsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DestinationConfigurationInput`<sup>Optional</sup> <a name="DestinationConfigurationInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.destinationConfigurationInput"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRuleDestinationConfiguration DestinationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleDestinationConfiguration">ObservabilityadminTelemetryRuleRuleDestinationConfiguration</a>

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.resourceTypeInput"></a>

```csharp
public string ResourceTypeInput { get; }
```

- *Type:* string

---

##### `SelectionCriteriaInput`<sup>Optional</sup> <a name="SelectionCriteriaInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.selectionCriteriaInput"></a>

```csharp
public string SelectionCriteriaInput { get; }
```

- *Type:* string

---

##### `TelemetrySourceTypesInput`<sup>Optional</sup> <a name="TelemetrySourceTypesInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.telemetrySourceTypesInput"></a>

```csharp
public string[] TelemetrySourceTypesInput { get; }
```

- *Type:* string[]

---

##### `TelemetryTypeInput`<sup>Optional</sup> <a name="TelemetryTypeInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.telemetryTypeInput"></a>

```csharp
public string TelemetryTypeInput { get; }
```

- *Type:* string

---

##### `AllowFieldUpdates`<sup>Required</sup> <a name="AllowFieldUpdates" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.allowFieldUpdates"></a>

```csharp
public bool|IResolvable AllowFieldUpdates { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AllRegions`<sup>Required</sup> <a name="AllRegions" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.allRegions"></a>

```csharp
public bool|IResolvable AllRegions { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.resourceType"></a>

```csharp
public string ResourceType { get; }
```

- *Type:* string

---

##### `SelectionCriteria`<sup>Required</sup> <a name="SelectionCriteria" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.selectionCriteria"></a>

```csharp
public string SelectionCriteria { get; }
```

- *Type:* string

---

##### `TelemetrySourceTypes`<sup>Required</sup> <a name="TelemetrySourceTypes" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.telemetrySourceTypes"></a>

```csharp
public string[] TelemetrySourceTypes { get; }
```

- *Type:* string[]

---

##### `TelemetryType`<sup>Required</sup> <a name="TelemetryType" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.telemetryType"></a>

```csharp
public string TelemetryType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRuleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleRule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleRule">ObservabilityadminTelemetryRuleRule</a>

---


### ObservabilityadminTelemetryRuleTagsList <a name="ObservabilityadminTelemetryRuleTagsList" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.get"></a>

```csharp
private ObservabilityadminTelemetryRuleTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTags">ObservabilityadminTelemetryRuleTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsList.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTags">ObservabilityadminTelemetryRuleTags</a>[]

---


### ObservabilityadminTelemetryRuleTagsOutputReference <a name="ObservabilityadminTelemetryRuleTagsOutputReference" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ObservabilityadminTelemetryRuleTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTags">ObservabilityadminTelemetryRuleTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ObservabilityadminTelemetryRuleTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.observabilityadminTelemetryRule.ObservabilityadminTelemetryRuleTags">ObservabilityadminTelemetryRuleTags</a>

---



