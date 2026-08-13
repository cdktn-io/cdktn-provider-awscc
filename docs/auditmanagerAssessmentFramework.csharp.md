# `auditmanagerAssessmentFramework` Submodule <a name="`auditmanagerAssessmentFramework` Submodule" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessmentFramework <a name="AuditmanagerAssessmentFramework" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/auditmanager_assessment_framework awscc_auditmanager_assessment_framework}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentFramework(Construct Scope, string Id, AuditmanagerAssessmentFrameworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig">AuditmanagerAssessmentFrameworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig">AuditmanagerAssessmentFrameworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putControlSets">PutControlSets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetComplianceType">ResetComplianceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutControlSets` <a name="PutControlSets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putControlSets"></a>

```csharp
private void PutControlSets(IResolvable|AuditmanagerAssessmentFrameworkControlSets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putControlSets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putTags"></a>

```csharp
private void PutTags(IResolvable|AuditmanagerAssessmentFrameworkTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>[]

---

##### `ResetComplianceType` <a name="ResetComplianceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetComplianceType"></a>

```csharp
private void ResetComplianceType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AuditmanagerAssessmentFramework resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AuditmanagerAssessmentFramework.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AuditmanagerAssessmentFramework.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AuditmanagerAssessmentFramework.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AuditmanagerAssessmentFramework.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AuditmanagerAssessmentFramework resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuditmanagerAssessmentFramework to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuditmanagerAssessmentFramework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/auditmanager_assessment_framework#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AuditmanagerAssessmentFramework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSets">ControlSets</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList">AuditmanagerAssessmentFrameworkControlSetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.frameworkId">FrameworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedAt">LastUpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList">AuditmanagerAssessmentFrameworkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceTypeInput">ComplianceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSetsInput">ControlSetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceType">ComplianceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ControlSets`<sup>Required</sup> <a name="ControlSets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSets"></a>

```csharp
public AuditmanagerAssessmentFrameworkControlSetsList ControlSets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList">AuditmanagerAssessmentFrameworkControlSetsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `FrameworkId`<sup>Required</sup> <a name="FrameworkId" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.frameworkId"></a>

```csharp
public string FrameworkId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedAt`<sup>Required</sup> <a name="LastUpdatedAt" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedAt"></a>

```csharp
public string LastUpdatedAt { get; }
```

- *Type:* string

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.lastUpdatedBy"></a>

```csharp
public string LastUpdatedBy { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tags"></a>

```csharp
public AuditmanagerAssessmentFrameworkTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList">AuditmanagerAssessmentFrameworkTagsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ComplianceTypeInput`<sup>Optional</sup> <a name="ComplianceTypeInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceTypeInput"></a>

```csharp
public string ComplianceTypeInput { get; }
```

- *Type:* string

---

##### `ControlSetsInput`<sup>Optional</sup> <a name="ControlSetsInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.controlSetsInput"></a>

```csharp
public IResolvable|AuditmanagerAssessmentFrameworkControlSets[] ControlSetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tagsInput"></a>

```csharp
public IResolvable|AuditmanagerAssessmentFrameworkTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>[]

---

##### `ComplianceType`<sup>Required</sup> <a name="ComplianceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.complianceType"></a>

```csharp
public string ComplianceType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFramework.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentFrameworkConfig <a name="AuditmanagerAssessmentFrameworkConfig" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentFrameworkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|AuditmanagerAssessmentFrameworkControlSets[] ControlSets,
    string Name,
    string ComplianceType = null,
    string Description = null,
    IResolvable|AuditmanagerAssessmentFrameworkTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.controlSets">ControlSets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>[]</code> | The control sets that are associated with the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.name">Name</a></code> | <code>string</code> | The name of the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.complianceType">ComplianceType</a></code> | <code>string</code> | The compliance type that the framework supports, such as CIS or HIPAA. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.description">Description</a></code> | <code>string</code> | The description of the framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>[]</code> | The tags associated with the framework. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ControlSets`<sup>Required</sup> <a name="ControlSets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.controlSets"></a>

```csharp
public IResolvable|AuditmanagerAssessmentFrameworkControlSets[] ControlSets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>[]

The control sets that are associated with the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/auditmanager_assessment_framework#control_sets AuditmanagerAssessmentFramework#control_sets}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/auditmanager_assessment_framework#name AuditmanagerAssessmentFramework#name}

---

##### `ComplianceType`<sup>Optional</sup> <a name="ComplianceType" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.complianceType"></a>

```csharp
public string ComplianceType { get; set; }
```

- *Type:* string

The compliance type that the framework supports, such as CIS or HIPAA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/auditmanager_assessment_framework#compliance_type AuditmanagerAssessmentFramework#compliance_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/auditmanager_assessment_framework#description AuditmanagerAssessmentFramework#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkConfig.property.tags"></a>

```csharp
public IResolvable|AuditmanagerAssessmentFrameworkTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>[]

The tags associated with the framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/auditmanager_assessment_framework#tags AuditmanagerAssessmentFramework#tags}

---

### AuditmanagerAssessmentFrameworkControlSets <a name="AuditmanagerAssessmentFrameworkControlSets" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentFrameworkControlSets {
    IResolvable|AuditmanagerAssessmentFrameworkControlSetsControls[] Controls,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.controls">Controls</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>[]</code> | The list of controls within the control set. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.name">Name</a></code> | <code>string</code> | The name of the control set. |

---

##### `Controls`<sup>Required</sup> <a name="Controls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.controls"></a>

```csharp
public IResolvable|AuditmanagerAssessmentFrameworkControlSetsControls[] Controls { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>[]

The list of controls within the control set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/auditmanager_assessment_framework#controls AuditmanagerAssessmentFramework#controls}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the control set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/auditmanager_assessment_framework#name AuditmanagerAssessmentFramework#name}

---

### AuditmanagerAssessmentFrameworkControlSetsControls <a name="AuditmanagerAssessmentFrameworkControlSetsControls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentFrameworkControlSetsControls {
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls.property.id">Id</a></code> | <code>string</code> | The unique identifier of the control. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The unique identifier of the control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/auditmanager_assessment_framework#id AuditmanagerAssessmentFramework#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AuditmanagerAssessmentFrameworkTags <a name="AuditmanagerAssessmentFrameworkTags" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentFrameworkTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/auditmanager_assessment_framework#key AuditmanagerAssessmentFramework#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/auditmanager_assessment_framework#value AuditmanagerAssessmentFramework#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AuditmanagerAssessmentFrameworkControlSetsControlsList <a name="AuditmanagerAssessmentFrameworkControlSetsControlsList" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentFrameworkControlSetsControlsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.get"></a>

```csharp
private AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentFrameworkControlSetsControls[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>[]

---


### AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference <a name="AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentFrameworkControlSetsControls InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>

---


### AuditmanagerAssessmentFrameworkControlSetsList <a name="AuditmanagerAssessmentFrameworkControlSetsList" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentFrameworkControlSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.get"></a>

```csharp
private AuditmanagerAssessmentFrameworkControlSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsList.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentFrameworkControlSets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>[]

---


### AuditmanagerAssessmentFrameworkControlSetsOutputReference <a name="AuditmanagerAssessmentFrameworkControlSetsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentFrameworkControlSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.putControls">PutControls</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutControls` <a name="PutControls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.putControls"></a>

```csharp
private void PutControls(IResolvable|AuditmanagerAssessmentFrameworkControlSetsControls[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.putControls.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controls">Controls</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList">AuditmanagerAssessmentFrameworkControlSetsControlsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controlsInput">ControlsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Controls`<sup>Required</sup> <a name="Controls" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controls"></a>

```csharp
public AuditmanagerAssessmentFrameworkControlSetsControlsList Controls { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControlsList">AuditmanagerAssessmentFrameworkControlSetsControlsList</a>

---

##### `ControlsInput`<sup>Optional</sup> <a name="ControlsInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.controlsInput"></a>

```csharp
public IResolvable|AuditmanagerAssessmentFrameworkControlSetsControls[] ControlsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsControls">AuditmanagerAssessmentFrameworkControlSetsControls</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentFrameworkControlSets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkControlSets">AuditmanagerAssessmentFrameworkControlSets</a>

---


### AuditmanagerAssessmentFrameworkTagsList <a name="AuditmanagerAssessmentFrameworkTagsList" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentFrameworkTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.get"></a>

```csharp
private AuditmanagerAssessmentFrameworkTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsList.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentFrameworkTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>[]

---


### AuditmanagerAssessmentFrameworkTagsOutputReference <a name="AuditmanagerAssessmentFrameworkTagsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentFrameworkTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentFrameworkTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessmentFramework.AuditmanagerAssessmentFrameworkTags">AuditmanagerAssessmentFrameworkTags</a>

---



