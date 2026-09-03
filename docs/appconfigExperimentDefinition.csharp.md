# `appconfigExperimentDefinition` Submodule <a name="`appconfigExperimentDefinition` Submodule" id="@cdktn/provider-awscc.appconfigExperimentDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigExperimentDefinition <a name="AppconfigExperimentDefinition" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition awscc_appconfig_experiment_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentDefinition(Construct Scope, string Id, AppconfigExperimentDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig">AppconfigExperimentDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig">AppconfigExperimentDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putControl">PutControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTreatments">PutTreatments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetAudienceDescription">ResetAudienceDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetHypothesis">ResetHypothesis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetLaunchCriteria">ResetLaunchCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutControl` <a name="PutControl" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putControl"></a>

```csharp
private void PutControl(AppconfigExperimentDefinitionControl Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putControl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTags"></a>

```csharp
private void PutTags(IResolvable|AppconfigExperimentDefinitionTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>[]

---

##### `PutTreatments` <a name="PutTreatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTreatments"></a>

```csharp
private void PutTreatments(IResolvable|AppconfigExperimentDefinitionTreatments[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.putTreatments.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>[]

---

##### `ResetAudienceDescription` <a name="ResetAudienceDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetAudienceDescription"></a>

```csharp
private void ResetAudienceDescription()
```

##### `ResetHypothesis` <a name="ResetHypothesis" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetHypothesis"></a>

```csharp
private void ResetHypothesis()
```

##### `ResetLaunchCriteria` <a name="ResetLaunchCriteria" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetLaunchCriteria"></a>

```csharp
private void ResetLaunchCriteria()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AppconfigExperimentDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigExperimentDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigExperimentDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigExperimentDefinition.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AppconfigExperimentDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AppconfigExperimentDefinition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppconfigExperimentDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppconfigExperimentDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AppconfigExperimentDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.control">Control</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference">AppconfigExperimentDefinitionControlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.experimentDefinitionId">ExperimentDefinitionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList">AppconfigExperimentDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatments">Treatments</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList">AppconfigExperimentDefinitionTreatmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifierInput">ApplicationIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescriptionInput">AudienceDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRuleInput">AudienceRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifierInput">ConfigurationProfileIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.controlInput">ControlInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifierInput">EnvironmentIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKeyInput">FlagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesisInput">HypothesisInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteriaInput">LaunchCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatmentsInput">TreatmentsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifier">ApplicationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescription">AudienceDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRule">AudienceRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifier">ConfigurationProfileIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKey">FlagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesis">Hypothesis</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteria">LaunchCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `Control`<sup>Required</sup> <a name="Control" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.control"></a>

```csharp
public AppconfigExperimentDefinitionControlOutputReference Control { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference">AppconfigExperimentDefinitionControlOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `ExperimentDefinitionId`<sup>Required</sup> <a name="ExperimentDefinitionId" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.experimentDefinitionId"></a>

```csharp
public string ExperimentDefinitionId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tags"></a>

```csharp
public AppconfigExperimentDefinitionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList">AppconfigExperimentDefinitionTagsList</a>

---

##### `Treatments`<sup>Required</sup> <a name="Treatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatments"></a>

```csharp
public AppconfigExperimentDefinitionTreatmentsList Treatments { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList">AppconfigExperimentDefinitionTreatmentsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ApplicationIdentifierInput`<sup>Optional</sup> <a name="ApplicationIdentifierInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifierInput"></a>

```csharp
public string ApplicationIdentifierInput { get; }
```

- *Type:* string

---

##### `AudienceDescriptionInput`<sup>Optional</sup> <a name="AudienceDescriptionInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescriptionInput"></a>

```csharp
public string AudienceDescriptionInput { get; }
```

- *Type:* string

---

##### `AudienceRuleInput`<sup>Optional</sup> <a name="AudienceRuleInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRuleInput"></a>

```csharp
public string AudienceRuleInput { get; }
```

- *Type:* string

---

##### `ConfigurationProfileIdentifierInput`<sup>Optional</sup> <a name="ConfigurationProfileIdentifierInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifierInput"></a>

```csharp
public string ConfigurationProfileIdentifierInput { get; }
```

- *Type:* string

---

##### `ControlInput`<sup>Optional</sup> <a name="ControlInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.controlInput"></a>

```csharp
public IResolvable|AppconfigExperimentDefinitionControl ControlInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

---

##### `EnvironmentIdentifierInput`<sup>Optional</sup> <a name="EnvironmentIdentifierInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifierInput"></a>

```csharp
public string EnvironmentIdentifierInput { get; }
```

- *Type:* string

---

##### `FlagKeyInput`<sup>Optional</sup> <a name="FlagKeyInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKeyInput"></a>

```csharp
public string FlagKeyInput { get; }
```

- *Type:* string

---

##### `HypothesisInput`<sup>Optional</sup> <a name="HypothesisInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesisInput"></a>

```csharp
public string HypothesisInput { get; }
```

- *Type:* string

---

##### `LaunchCriteriaInput`<sup>Optional</sup> <a name="LaunchCriteriaInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteriaInput"></a>

```csharp
public string LaunchCriteriaInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tagsInput"></a>

```csharp
public IResolvable|AppconfigExperimentDefinitionTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>[]

---

##### `TreatmentsInput`<sup>Optional</sup> <a name="TreatmentsInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.treatmentsInput"></a>

```csharp
public IResolvable|AppconfigExperimentDefinitionTreatments[] TreatmentsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>[]

---

##### `ApplicationIdentifier`<sup>Required</sup> <a name="ApplicationIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.applicationIdentifier"></a>

```csharp
public string ApplicationIdentifier { get; }
```

- *Type:* string

---

##### `AudienceDescription`<sup>Required</sup> <a name="AudienceDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceDescription"></a>

```csharp
public string AudienceDescription { get; }
```

- *Type:* string

---

##### `AudienceRule`<sup>Required</sup> <a name="AudienceRule" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.audienceRule"></a>

```csharp
public string AudienceRule { get; }
```

- *Type:* string

---

##### `ConfigurationProfileIdentifier`<sup>Required</sup> <a name="ConfigurationProfileIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.configurationProfileIdentifier"></a>

```csharp
public string ConfigurationProfileIdentifier { get; }
```

- *Type:* string

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.environmentIdentifier"></a>

```csharp
public string EnvironmentIdentifier { get; }
```

- *Type:* string

---

##### `FlagKey`<sup>Required</sup> <a name="FlagKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.flagKey"></a>

```csharp
public string FlagKey { get; }
```

- *Type:* string

---

##### `Hypothesis`<sup>Required</sup> <a name="Hypothesis" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.hypothesis"></a>

```csharp
public string Hypothesis { get; }
```

- *Type:* string

---

##### `LaunchCriteria`<sup>Required</sup> <a name="LaunchCriteria" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.launchCriteria"></a>

```csharp
public string LaunchCriteria { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigExperimentDefinitionConfig <a name="AppconfigExperimentDefinitionConfig" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentDefinitionConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ApplicationIdentifier,
    string AudienceRule,
    string ConfigurationProfileIdentifier,
    AppconfigExperimentDefinitionControl Control,
    string EnvironmentIdentifier,
    string FlagKey,
    string Name,
    IResolvable|AppconfigExperimentDefinitionTreatments[] Treatments,
    string AudienceDescription = null,
    string Hypothesis = null,
    string LaunchCriteria = null,
    IResolvable|AppconfigExperimentDefinitionTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.applicationIdentifier">ApplicationIdentifier</a></code> | <code>string</code> | The application ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceRule">AudienceRule</a></code> | <code>string</code> | Rule expression defining the experiment audience. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.configurationProfileIdentifier">ConfigurationProfileIdentifier</a></code> | <code>string</code> | The configuration profile ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.control">Control</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a></code> | The control (baseline) variant. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.environmentIdentifier">EnvironmentIdentifier</a></code> | <code>string</code> | The environment ID, name, or ARN. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.flagKey">FlagKey</a></code> | <code>string</code> | The key of the existing flag in the configuration profile to experiment on. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.name">Name</a></code> | <code>string</code> | A name for the experiment definition. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.treatments">Treatments</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>[]</code> | Treatment variants (1-5). |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceDescription">AudienceDescription</a></code> | <code>string</code> | Human-readable description of the audience. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.hypothesis">Hypothesis</a></code> | <code>string</code> | The hypothesis of the experiment. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.launchCriteria">LaunchCriteria</a></code> | <code>string</code> | Criteria for launching the experiment. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>[]</code> | Tags to associate with the experiment definition. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApplicationIdentifier`<sup>Required</sup> <a name="ApplicationIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.applicationIdentifier"></a>

```csharp
public string ApplicationIdentifier { get; set; }
```

- *Type:* string

The application ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#application_identifier AppconfigExperimentDefinition#application_identifier}

---

##### `AudienceRule`<sup>Required</sup> <a name="AudienceRule" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceRule"></a>

```csharp
public string AudienceRule { get; set; }
```

- *Type:* string

Rule expression defining the experiment audience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#audience_rule AppconfigExperimentDefinition#audience_rule}

---

##### `ConfigurationProfileIdentifier`<sup>Required</sup> <a name="ConfigurationProfileIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.configurationProfileIdentifier"></a>

```csharp
public string ConfigurationProfileIdentifier { get; set; }
```

- *Type:* string

The configuration profile ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#configuration_profile_identifier AppconfigExperimentDefinition#configuration_profile_identifier}

---

##### `Control`<sup>Required</sup> <a name="Control" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.control"></a>

```csharp
public AppconfigExperimentDefinitionControl Control { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

The control (baseline) variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#control AppconfigExperimentDefinition#control}

---

##### `EnvironmentIdentifier`<sup>Required</sup> <a name="EnvironmentIdentifier" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.environmentIdentifier"></a>

```csharp
public string EnvironmentIdentifier { get; set; }
```

- *Type:* string

The environment ID, name, or ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#environment_identifier AppconfigExperimentDefinition#environment_identifier}

---

##### `FlagKey`<sup>Required</sup> <a name="FlagKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.flagKey"></a>

```csharp
public string FlagKey { get; set; }
```

- *Type:* string

The key of the existing flag in the configuration profile to experiment on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#flag_key AppconfigExperimentDefinition#flag_key}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A name for the experiment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#name AppconfigExperimentDefinition#name}

---

##### `Treatments`<sup>Required</sup> <a name="Treatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.treatments"></a>

```csharp
public IResolvable|AppconfigExperimentDefinitionTreatments[] Treatments { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>[]

Treatment variants (1-5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#treatments AppconfigExperimentDefinition#treatments}

---

##### `AudienceDescription`<sup>Optional</sup> <a name="AudienceDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.audienceDescription"></a>

```csharp
public string AudienceDescription { get; set; }
```

- *Type:* string

Human-readable description of the audience.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#audience_description AppconfigExperimentDefinition#audience_description}

---

##### `Hypothesis`<sup>Optional</sup> <a name="Hypothesis" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.hypothesis"></a>

```csharp
public string Hypothesis { get; set; }
```

- *Type:* string

The hypothesis of the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#hypothesis AppconfigExperimentDefinition#hypothesis}

---

##### `LaunchCriteria`<sup>Optional</sup> <a name="LaunchCriteria" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.launchCriteria"></a>

```csharp
public string LaunchCriteria { get; set; }
```

- *Type:* string

Criteria for launching the experiment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#launch_criteria AppconfigExperimentDefinition#launch_criteria}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionConfig.property.tags"></a>

```csharp
public IResolvable|AppconfigExperimentDefinitionTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>[]

Tags to associate with the experiment definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#tags AppconfigExperimentDefinition#tags}

---

### AppconfigExperimentDefinitionControl <a name="AppconfigExperimentDefinitionControl" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentDefinitionControl {
    bool|IResolvable Enabled,
    double Weight,
    IResolvable|System.Collections.Generic.IDictionary<string, AppconfigExperimentDefinitionControlAttributeValues> AttributeValues = null,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the flag is enabled for this variant. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.weight">Weight</a></code> | <code>double</code> | Traffic weight percentage. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.attributeValues">AttributeValues</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>></code> | Map of attribute name to attribute value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the flag is enabled for this variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#enabled AppconfigExperimentDefinition#enabled}

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Traffic weight percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#weight AppconfigExperimentDefinition#weight}

---

##### `AttributeValues`<sup>Optional</sup> <a name="AttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.attributeValues"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, AppconfigExperimentDefinitionControlAttributeValues> AttributeValues { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>>

Map of attribute name to attribute value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#attribute_values AppconfigExperimentDefinition#attribute_values}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}.

---

### AppconfigExperimentDefinitionControlAttributeValues <a name="AppconfigExperimentDefinitionControlAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentDefinitionControlAttributeValues {
    bool|IResolvable BooleanValue = null,
    double[] NumberArray = null,
    double NumberValue = null,
    string[] StringArray = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.booleanValue">BooleanValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A boolean value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberArray">NumberArray</a></code> | <code>double[]</code> | An array of numeric values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberValue">NumberValue</a></code> | <code>double</code> | A numeric value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringArray">StringArray</a></code> | <code>string[]</code> | An array of string values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringValue">StringValue</a></code> | <code>string</code> | A string value. |

---

##### `BooleanValue`<sup>Optional</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.booleanValue"></a>

```csharp
public bool|IResolvable BooleanValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#boolean_value AppconfigExperimentDefinition#boolean_value}

---

##### `NumberArray`<sup>Optional</sup> <a name="NumberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberArray"></a>

```csharp
public double[] NumberArray { get; set; }
```

- *Type:* double[]

An array of numeric values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#number_array AppconfigExperimentDefinition#number_array}

---

##### `NumberValue`<sup>Optional</sup> <a name="NumberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.numberValue"></a>

```csharp
public double NumberValue { get; set; }
```

- *Type:* double

A numeric value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#number_value AppconfigExperimentDefinition#number_value}

---

##### `StringArray`<sup>Optional</sup> <a name="StringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringArray"></a>

```csharp
public string[] StringArray { get; set; }
```

- *Type:* string[]

An array of string values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#string_array AppconfigExperimentDefinition#string_array}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

A string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#string_value AppconfigExperimentDefinition#string_value}

---

### AppconfigExperimentDefinitionTags <a name="AppconfigExperimentDefinitionTags" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentDefinitionTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.key">Key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.value">Value</a></code> | <code>string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#key AppconfigExperimentDefinition#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#value AppconfigExperimentDefinition#value}

---

### AppconfigExperimentDefinitionTreatments <a name="AppconfigExperimentDefinitionTreatments" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentDefinitionTreatments {
    bool|IResolvable Enabled,
    double Weight,
    IResolvable|System.Collections.Generic.IDictionary<string, AppconfigExperimentDefinitionTreatmentsAttributeValues> AttributeValues = null,
    string Description = null,
    string Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether the flag is enabled for this variant. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.weight">Weight</a></code> | <code>double</code> | Traffic weight percentage. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.attributeValues">AttributeValues</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>></code> | Map of attribute name to attribute value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.key">Key</a></code> | <code>string</code> | The treatment key (read-only, auto-generated by service). |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether the flag is enabled for this variant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#enabled AppconfigExperimentDefinition#enabled}

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.weight"></a>

```csharp
public double Weight { get; set; }
```

- *Type:* double

Traffic weight percentage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#weight AppconfigExperimentDefinition#weight}

---

##### `AttributeValues`<sup>Optional</sup> <a name="AttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.attributeValues"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, AppconfigExperimentDefinitionTreatmentsAttributeValues> AttributeValues { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>>

Map of attribute name to attribute value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#attribute_values AppconfigExperimentDefinition#attribute_values}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#description AppconfigExperimentDefinition#description}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The treatment key (read-only, auto-generated by service).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#key AppconfigExperimentDefinition#key}

---

### AppconfigExperimentDefinitionTreatmentsAttributeValues <a name="AppconfigExperimentDefinitionTreatmentsAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentDefinitionTreatmentsAttributeValues {
    bool|IResolvable BooleanValue = null,
    double[] NumberArray = null,
    double NumberValue = null,
    string[] StringArray = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.booleanValue">BooleanValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | A boolean value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberArray">NumberArray</a></code> | <code>double[]</code> | An array of numeric values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberValue">NumberValue</a></code> | <code>double</code> | A numeric value. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringArray">StringArray</a></code> | <code>string[]</code> | An array of string values. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringValue">StringValue</a></code> | <code>string</code> | A string value. |

---

##### `BooleanValue`<sup>Optional</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.booleanValue"></a>

```csharp
public bool|IResolvable BooleanValue { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

A boolean value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#boolean_value AppconfigExperimentDefinition#boolean_value}

---

##### `NumberArray`<sup>Optional</sup> <a name="NumberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberArray"></a>

```csharp
public double[] NumberArray { get; set; }
```

- *Type:* double[]

An array of numeric values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#number_array AppconfigExperimentDefinition#number_array}

---

##### `NumberValue`<sup>Optional</sup> <a name="NumberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.numberValue"></a>

```csharp
public double NumberValue { get; set; }
```

- *Type:* double

A numeric value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#number_value AppconfigExperimentDefinition#number_value}

---

##### `StringArray`<sup>Optional</sup> <a name="StringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringArray"></a>

```csharp
public string[] StringArray { get; set; }
```

- *Type:* string[]

An array of string values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#string_array AppconfigExperimentDefinition#string_array}

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

A string value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appconfig_experiment_definition#string_value AppconfigExperimentDefinition#string_value}

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigExperimentDefinitionControlAttributeValuesMap <a name="AppconfigExperimentDefinitionControlAttributeValuesMap" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentDefinitionControlAttributeValuesMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.get"></a>

```csharp
private AppconfigExperimentDefinitionControlAttributeValuesOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, AppconfigExperimentDefinitionControlAttributeValues> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>>

---


### AppconfigExperimentDefinitionControlAttributeValuesOutputReference <a name="AppconfigExperimentDefinitionControlAttributeValuesOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentDefinitionControlAttributeValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetBooleanValue">ResetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberArray">ResetNumberArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberValue">ResetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringArray">ResetStringArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBooleanValue` <a name="ResetBooleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetBooleanValue"></a>

```csharp
private void ResetBooleanValue()
```

##### `ResetNumberArray` <a name="ResetNumberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberArray"></a>

```csharp
private void ResetNumberArray()
```

##### `ResetNumberValue` <a name="ResetNumberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetNumberValue"></a>

```csharp
private void ResetNumberValue()
```

##### `ResetStringArray` <a name="ResetStringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringArray"></a>

```csharp
private void ResetStringArray()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValueInput">BooleanValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArrayInput">NumberArrayInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValueInput">NumberValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArrayInput">StringArrayInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValue">BooleanValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArray">NumberArray</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValue">NumberValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArray">StringArray</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanValueInput`<sup>Optional</sup> <a name="BooleanValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValueInput"></a>

```csharp
public bool|IResolvable BooleanValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumberArrayInput`<sup>Optional</sup> <a name="NumberArrayInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArrayInput"></a>

```csharp
public double[] NumberArrayInput { get; }
```

- *Type:* double[]

---

##### `NumberValueInput`<sup>Optional</sup> <a name="NumberValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValueInput"></a>

```csharp
public double NumberValueInput { get; }
```

- *Type:* double

---

##### `StringArrayInput`<sup>Optional</sup> <a name="StringArrayInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArrayInput"></a>

```csharp
public string[] StringArrayInput { get; }
```

- *Type:* string[]

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.booleanValue"></a>

```csharp
public bool|IResolvable BooleanValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumberArray`<sup>Required</sup> <a name="NumberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberArray"></a>

```csharp
public double[] NumberArray { get; }
```

- *Type:* double[]

---

##### `NumberValue`<sup>Required</sup> <a name="NumberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.numberValue"></a>

```csharp
public double NumberValue { get; }
```

- *Type:* double

---

##### `StringArray`<sup>Required</sup> <a name="StringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringArray"></a>

```csharp
public string[] StringArray { get; }
```

- *Type:* string[]

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppconfigExperimentDefinitionControlAttributeValues InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>

---


### AppconfigExperimentDefinitionControlOutputReference <a name="AppconfigExperimentDefinitionControlOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentDefinitionControlOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.putAttributeValues">PutAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetAttributeValues">ResetAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributeValues` <a name="PutAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.putAttributeValues"></a>

```csharp
private void PutAttributeValues(IResolvable|System.Collections.Generic.IDictionary<string, AppconfigExperimentDefinitionControlAttributeValues> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.putAttributeValues.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>>

---

##### `ResetAttributeValues` <a name="ResetAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetAttributeValues"></a>

```csharp
private void ResetAttributeValues()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValues">AttributeValues</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap">AppconfigExperimentDefinitionControlAttributeValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValuesInput">AttributeValuesInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeValues`<sup>Required</sup> <a name="AttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValues"></a>

```csharp
public AppconfigExperimentDefinitionControlAttributeValuesMap AttributeValues { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValuesMap">AppconfigExperimentDefinitionControlAttributeValuesMap</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `AttributeValuesInput`<sup>Optional</sup> <a name="AttributeValuesInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.attributeValuesInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, AppconfigExperimentDefinitionControlAttributeValues> AttributeValuesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlAttributeValues">AppconfigExperimentDefinitionControlAttributeValues</a>>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControlOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppconfigExperimentDefinitionControl InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionControl">AppconfigExperimentDefinitionControl</a>

---


### AppconfigExperimentDefinitionTagsList <a name="AppconfigExperimentDefinitionTagsList" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentDefinitionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.get"></a>

```csharp
private AppconfigExperimentDefinitionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsList.property.internalValue"></a>

```csharp
public IResolvable|AppconfigExperimentDefinitionTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>[]

---


### AppconfigExperimentDefinitionTagsOutputReference <a name="AppconfigExperimentDefinitionTagsOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentDefinitionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppconfigExperimentDefinitionTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTags">AppconfigExperimentDefinitionTags</a>

---


### AppconfigExperimentDefinitionTreatmentsAttributeValuesMap <a name="AppconfigExperimentDefinitionTreatmentsAttributeValuesMap" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentDefinitionTreatmentsAttributeValuesMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get"></a>

```csharp
private AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap.property.internalValue"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, AppconfigExperimentDefinitionTreatmentsAttributeValues> InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>>

---


### AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference <a name="AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetBooleanValue">ResetBooleanValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberArray">ResetNumberArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberValue">ResetNumberValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringArray">ResetStringArray</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBooleanValue` <a name="ResetBooleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetBooleanValue"></a>

```csharp
private void ResetBooleanValue()
```

##### `ResetNumberArray` <a name="ResetNumberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberArray"></a>

```csharp
private void ResetNumberArray()
```

##### `ResetNumberValue` <a name="ResetNumberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetNumberValue"></a>

```csharp
private void ResetNumberValue()
```

##### `ResetStringArray` <a name="ResetStringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringArray"></a>

```csharp
private void ResetStringArray()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValueInput">BooleanValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArrayInput">NumberArrayInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValueInput">NumberValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArrayInput">StringArrayInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValue">BooleanValue</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArray">NumberArray</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValue">NumberValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArray">StringArray</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanValueInput`<sup>Optional</sup> <a name="BooleanValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValueInput"></a>

```csharp
public bool|IResolvable BooleanValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumberArrayInput`<sup>Optional</sup> <a name="NumberArrayInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArrayInput"></a>

```csharp
public double[] NumberArrayInput { get; }
```

- *Type:* double[]

---

##### `NumberValueInput`<sup>Optional</sup> <a name="NumberValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValueInput"></a>

```csharp
public double NumberValueInput { get; }
```

- *Type:* double

---

##### `StringArrayInput`<sup>Optional</sup> <a name="StringArrayInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArrayInput"></a>

```csharp
public string[] StringArrayInput { get; }
```

- *Type:* string[]

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `BooleanValue`<sup>Required</sup> <a name="BooleanValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.booleanValue"></a>

```csharp
public bool|IResolvable BooleanValue { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `NumberArray`<sup>Required</sup> <a name="NumberArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberArray"></a>

```csharp
public double[] NumberArray { get; }
```

- *Type:* double[]

---

##### `NumberValue`<sup>Required</sup> <a name="NumberValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.numberValue"></a>

```csharp
public double NumberValue { get; }
```

- *Type:* double

---

##### `StringArray`<sup>Required</sup> <a name="StringArray" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringArray"></a>

```csharp
public string[] StringArray { get; }
```

- *Type:* string[]

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppconfigExperimentDefinitionTreatmentsAttributeValues InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>

---


### AppconfigExperimentDefinitionTreatmentsList <a name="AppconfigExperimentDefinitionTreatmentsList" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentDefinitionTreatmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.get"></a>

```csharp
private AppconfigExperimentDefinitionTreatmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsList.property.internalValue"></a>

```csharp
public IResolvable|AppconfigExperimentDefinitionTreatments[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>[]

---


### AppconfigExperimentDefinitionTreatmentsOutputReference <a name="AppconfigExperimentDefinitionTreatmentsOutputReference" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AppconfigExperimentDefinitionTreatmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.putAttributeValues">PutAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetAttributeValues">ResetAttributeValues</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributeValues` <a name="PutAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.putAttributeValues"></a>

```csharp
private void PutAttributeValues(IResolvable|System.Collections.Generic.IDictionary<string, AppconfigExperimentDefinitionTreatmentsAttributeValues> Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.putAttributeValues.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>>

---

##### `ResetAttributeValues` <a name="ResetAttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetAttributeValues"></a>

```csharp
private void ResetAttributeValues()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValues">AttributeValues</a></code> | <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap">AppconfigExperimentDefinitionTreatmentsAttributeValuesMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValuesInput">AttributeValuesInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weightInput">WeightInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weight">Weight</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeValues`<sup>Required</sup> <a name="AttributeValues" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValues"></a>

```csharp
public AppconfigExperimentDefinitionTreatmentsAttributeValuesMap AttributeValues { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValuesMap">AppconfigExperimentDefinitionTreatmentsAttributeValuesMap</a>

---

##### `AttributeValuesInput`<sup>Optional</sup> <a name="AttributeValuesInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.attributeValuesInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, AppconfigExperimentDefinitionTreatmentsAttributeValues> AttributeValuesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, <a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsAttributeValues">AppconfigExperimentDefinitionTreatmentsAttributeValues</a>>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weightInput"></a>

```csharp
public double WeightInput { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.weight"></a>

```csharp
public double Weight { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatmentsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AppconfigExperimentDefinitionTreatments InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appconfigExperimentDefinition.AppconfigExperimentDefinitionTreatments">AppconfigExperimentDefinitionTreatments</a>

---



