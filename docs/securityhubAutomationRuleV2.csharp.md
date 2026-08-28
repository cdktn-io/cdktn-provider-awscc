# `securityhubAutomationRuleV2` Submodule <a name="`securityhubAutomationRuleV2` Submodule" id="@cdktn/provider-awscc.securityhubAutomationRuleV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubAutomationRuleV2 <a name="SecurityhubAutomationRuleV2" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2 awscc_securityhub_automation_rule_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2(Construct Scope, string Id, SecurityhubAutomationRuleV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config">SecurityhubAutomationRuleV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config">SecurityhubAutomationRuleV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putActions">PutActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria">PutCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRuleStatus">ResetRuleStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutActions` <a name="PutActions" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putActions"></a>

```csharp
private void PutActions(IResolvable|SecurityhubAutomationRuleV2Actions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putActions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>[]

---

##### `PutCriteria` <a name="PutCriteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria"></a>

```csharp
private void PutCriteria(SecurityhubAutomationRuleV2Criteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.putCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>

---

##### `ResetRuleStatus` <a name="ResetRuleStatus" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetRuleStatus"></a>

```csharp
private void ResetRuleStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityhubAutomationRuleV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityhubAutomationRuleV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityhubAutomationRuleV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SecurityhubAutomationRuleV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SecurityhubAutomationRuleV2 resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SecurityhubAutomationRuleV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SecurityhubAutomationRuleV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubAutomationRuleV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actions">Actions</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList">SecurityhubAutomationRuleV2ActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference">SecurityhubAutomationRuleV2CriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleArn">RuleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actionsInput">ActionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteriaInput">CriteriaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrderInput">RuleOrderInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatusInput">RuleStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrder">RuleOrder</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatus">RuleStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actions"></a>

```csharp
public SecurityhubAutomationRuleV2ActionsList Actions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList">SecurityhubAutomationRuleV2ActionsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteria"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOutputReference Criteria { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference">SecurityhubAutomationRuleV2CriteriaOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleArn"></a>

```csharp
public string RuleArn { get; }
```

- *Type:* string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `ActionsInput`<sup>Optional</sup> <a name="ActionsInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.actionsInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2Actions[] ActionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>[]

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.criteriaInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2Criteria CriteriaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `RuleOrderInput`<sup>Optional</sup> <a name="RuleOrderInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrderInput"></a>

```csharp
public double RuleOrderInput { get; }
```

- *Type:* double

---

##### `RuleStatusInput`<sup>Optional</sup> <a name="RuleStatusInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatusInput"></a>

```csharp
public string RuleStatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `RuleOrder`<sup>Required</sup> <a name="RuleOrder" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleOrder"></a>

```csharp
public double RuleOrder { get; }
```

- *Type:* double

---

##### `RuleStatus`<sup>Required</sup> <a name="RuleStatus" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.ruleStatus"></a>

```csharp
public string RuleStatus { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubAutomationRuleV2Actions <a name="SecurityhubAutomationRuleV2Actions" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2Actions {
    string Type,
    SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration ExternalIntegrationConfiguration = null,
    SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate FindingFieldsUpdate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.property.type">Type</a></code> | <code>string</code> | The category of action to be executed by the automation rule. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.property.externalIntegrationConfiguration">ExternalIntegrationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a></code> | The settings for integrating automation rule actions with external systems or service. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.property.findingFieldsUpdate">FindingFieldsUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a></code> | The changes to be applied to fields in a security finding when an automation rule is triggered. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The category of action to be executed by the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#type SecurityhubAutomationRuleV2#type}

---

##### `ExternalIntegrationConfiguration`<sup>Optional</sup> <a name="ExternalIntegrationConfiguration" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.property.externalIntegrationConfiguration"></a>

```csharp
public SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration ExternalIntegrationConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a>

The settings for integrating automation rule actions with external systems or service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#external_integration_configuration SecurityhubAutomationRuleV2#external_integration_configuration}

---

##### `FindingFieldsUpdate`<sup>Optional</sup> <a name="FindingFieldsUpdate" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions.property.findingFieldsUpdate"></a>

```csharp
public SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate FindingFieldsUpdate { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a>

The changes to be applied to fields in a security finding when an automation rule is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#finding_fields_update SecurityhubAutomationRuleV2#finding_fields_update}

---

### SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration <a name="SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration {
    string ConnectorArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration.property.connectorArn">ConnectorArn</a></code> | <code>string</code> | The ARN of the connector that establishes the integration. |

---

##### `ConnectorArn`<sup>Optional</sup> <a name="ConnectorArn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration.property.connectorArn"></a>

```csharp
public string ConnectorArn { get; set; }
```

- *Type:* string

The ARN of the connector that establishes the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#connector_arn SecurityhubAutomationRuleV2#connector_arn}

---

### SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate <a name="SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate {
    string Comment = null,
    double SeverityId = null,
    double StatusId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.property.comment">Comment</a></code> | <code>string</code> | Notes or contextual information for findings that are modified by the automation rule. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.property.severityId">SeverityId</a></code> | <code>double</code> | The severity level to be assigned to findings that match the automation rule criteria. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.property.statusId">StatusId</a></code> | <code>double</code> | The status to be applied to findings that match automation rule criteria. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Notes or contextual information for findings that are modified by the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#comment SecurityhubAutomationRuleV2#comment}

---

##### `SeverityId`<sup>Optional</sup> <a name="SeverityId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.property.severityId"></a>

```csharp
public double SeverityId { get; set; }
```

- *Type:* double

The severity level to be assigned to findings that match the automation rule criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#severity_id SecurityhubAutomationRuleV2#severity_id}

---

##### `StatusId`<sup>Optional</sup> <a name="StatusId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate.property.statusId"></a>

```csharp
public double StatusId { get; set; }
```

- *Type:* double

The status to be applied to findings that match automation rule criteria.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#status_id SecurityhubAutomationRuleV2#status_id}

---

### SecurityhubAutomationRuleV2Config <a name="SecurityhubAutomationRuleV2Config" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2Config {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|SecurityhubAutomationRuleV2Actions[] Actions,
    SecurityhubAutomationRuleV2Criteria Criteria,
    string Description,
    string RuleName,
    double RuleOrder,
    string RuleStatus = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.actions">Actions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>[]</code> | A list of actions to be performed when the rule criteria is met. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.criteria">Criteria</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a></code> | Defines the parameters and conditions used to evaluate and filter security findings. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.description">Description</a></code> | <code>string</code> | A description of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleName">RuleName</a></code> | <code>string</code> | The name of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleOrder">RuleOrder</a></code> | <code>double</code> | The value for the rule priority. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleStatus">RuleStatus</a></code> | <code>string</code> | The status of the automation rule. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | A key-value pair to associate with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Actions`<sup>Required</sup> <a name="Actions" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.actions"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2Actions[] Actions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>[]

A list of actions to be performed when the rule criteria is met.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#actions SecurityhubAutomationRuleV2#actions}

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.criteria"></a>

```csharp
public SecurityhubAutomationRuleV2Criteria Criteria { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>

Defines the parameters and conditions used to evaluate and filter security findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#criteria SecurityhubAutomationRuleV2#criteria}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#description SecurityhubAutomationRuleV2#description}

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

The name of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#rule_name SecurityhubAutomationRuleV2#rule_name}

---

##### `RuleOrder`<sup>Required</sup> <a name="RuleOrder" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleOrder"></a>

```csharp
public double RuleOrder { get; set; }
```

- *Type:* double

The value for the rule priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#rule_order SecurityhubAutomationRuleV2#rule_order}

---

##### `RuleStatus`<sup>Optional</sup> <a name="RuleStatus" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.ruleStatus"></a>

```csharp
public string RuleStatus { get; set; }
```

- *Type:* string

The status of the automation rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#rule_status SecurityhubAutomationRuleV2#rule_status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Config.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#tags SecurityhubAutomationRuleV2#tags}

---

### SecurityhubAutomationRuleV2Criteria <a name="SecurityhubAutomationRuleV2Criteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2Criteria {
    SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria OcsfFindingCriteria = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.property.ocsfFindingCriteria">OcsfFindingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a></code> | The filtering conditions that align with OCSF standards. |

---

##### `OcsfFindingCriteria`<sup>Optional</sup> <a name="OcsfFindingCriteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria.property.ocsfFindingCriteria"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria OcsfFindingCriteria { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a>

The filtering conditions that align with OCSF standards.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#ocsf_finding_criteria SecurityhubAutomationRuleV2#ocsf_finding_criteria}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria {
    IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters[] CompositeFilters = null,
    string CompositeOperator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria.property.compositeFilters">CompositeFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>[]</code> | Enables the creation of complex filtering conditions by combining filter. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria.property.compositeOperator">CompositeOperator</a></code> | <code>string</code> | The logical operator used to combine multiple conditions. |

---

##### `CompositeFilters`<sup>Optional</sup> <a name="CompositeFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria.property.compositeFilters"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters[] CompositeFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>[]

Enables the creation of complex filtering conditions by combining filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#composite_filters SecurityhubAutomationRuleV2#composite_filters}

---

##### `CompositeOperator`<sup>Optional</sup> <a name="CompositeOperator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria.property.compositeOperator"></a>

```csharp
public string CompositeOperator { get; set; }
```

- *Type:* string

The logical operator used to combine multiple conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#composite_operator SecurityhubAutomationRuleV2#composite_operator}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters {
    IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters[] BooleanFilters = null,
    IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters[] DateFilters = null,
    IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters[] MapFilters = null,
    IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters[] NumberFilters = null,
    string Operator = null,
    IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters[] StringFilters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.booleanFilters">BooleanFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>[]</code> | Enables filtering based on boolean field values. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.dateFilters">DateFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>[]</code> | Enables filtering based on date and timestamp fields. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.mapFilters">MapFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>[]</code> | Enables filtering based on map field value. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.numberFilters">NumberFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>[]</code> | Enables filtering based on numerical field values. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.operator">Operator</a></code> | <code>string</code> | The logical operator used to combine multiple conditions. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.stringFilters">StringFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>[]</code> | Enables filtering based on string field values. |

---

##### `BooleanFilters`<sup>Optional</sup> <a name="BooleanFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.booleanFilters"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters[] BooleanFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>[]

Enables filtering based on boolean field values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#boolean_filters SecurityhubAutomationRuleV2#boolean_filters}

---

##### `DateFilters`<sup>Optional</sup> <a name="DateFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.dateFilters"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters[] DateFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>[]

Enables filtering based on date and timestamp fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#date_filters SecurityhubAutomationRuleV2#date_filters}

---

##### `MapFilters`<sup>Optional</sup> <a name="MapFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.mapFilters"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters[] MapFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>[]

Enables filtering based on map field value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#map_filters SecurityhubAutomationRuleV2#map_filters}

---

##### `NumberFilters`<sup>Optional</sup> <a name="NumberFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.numberFilters"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters[] NumberFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>[]

Enables filtering based on numerical field values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#number_filters SecurityhubAutomationRuleV2#number_filters}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The logical operator used to combine multiple conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#operator SecurityhubAutomationRuleV2#operator}

---

##### `StringFilters`<sup>Optional</sup> <a name="StringFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters.property.stringFilters"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters[] StringFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>[]

Enables filtering based on string field values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#string_filters SecurityhubAutomationRuleV2#string_filters}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters {
    string FieldName = null,
    SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter Filter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters.property.fieldName">FieldName</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a></code> | Boolean filter for querying findings. |

---

##### `FieldName`<sup>Optional</sup> <a name="FieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters.property.filter"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a>

Boolean filter for querying findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter {
    bool|IResolvable Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter.property.value">Value</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | The value of the boolean. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter.property.value"></a>

```csharp
public bool|IResolvable Value { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

The value of the boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters {
    string FieldName = null,
    SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter Filter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters.property.fieldName">FieldName</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a></code> | A date filter for querying findings. |

---

##### `FieldName`<sup>Optional</sup> <a name="FieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters.property.filter"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a>

A date filter for querying findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter {
    SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange DateRange = null,
    string End = null,
    string Start = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.property.dateRange">DateRange</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a></code> | A date range for the date filter. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.property.end">End</a></code> | <code>string</code> | The timestamp formatted in ISO8601. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.property.start">Start</a></code> | <code>string</code> | The timestamp formatted in ISO8601. |

---

##### `DateRange`<sup>Optional</sup> <a name="DateRange" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.property.dateRange"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange DateRange { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a>

A date range for the date filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#date_range SecurityhubAutomationRuleV2#date_range}

---

##### `End`<sup>Optional</sup> <a name="End" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.property.end"></a>

```csharp
public string End { get; set; }
```

- *Type:* string

The timestamp formatted in ISO8601.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#end SecurityhubAutomationRuleV2#end}

---

##### `Start`<sup>Optional</sup> <a name="Start" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter.property.start"></a>

```csharp
public string Start { get; set; }
```

- *Type:* string

The timestamp formatted in ISO8601.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#start SecurityhubAutomationRuleV2#start}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange {
    string Unit = null,
    double Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange.property.unit">Unit</a></code> | <code>string</code> | A date range unit for the date filter. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange.property.value">Value</a></code> | <code>double</code> | A date range value for the date filter. |

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

A date range unit for the date filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#unit SecurityhubAutomationRuleV2#unit}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

A date range value for the date filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters {
    string FieldName = null,
    SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter Filter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters.property.fieldName">FieldName</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a></code> | A map filter for filtering findings. |

---

##### `FieldName`<sup>Optional</sup> <a name="FieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters.property.filter"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a>

A map filter for filtering findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter {
    string Comparison = null,
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.property.comparison">Comparison</a></code> | <code>string</code> | The condition to apply to the key value when filtering findings with a map filter. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.property.key">Key</a></code> | <code>string</code> | The key of the map filter. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.property.value">Value</a></code> | <code>string</code> | The value for the key in the map filter. |

---

##### `Comparison`<sup>Optional</sup> <a name="Comparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

The condition to apply to the key value when filtering findings with a map filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#comparison SecurityhubAutomationRuleV2#comparison}

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key of the map filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#key SecurityhubAutomationRuleV2#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the key in the map filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters {
    string FieldName = null,
    SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter Filter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters.property.fieldName">FieldName</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a></code> | A number filter for querying findings. |

---

##### `FieldName`<sup>Optional</sup> <a name="FieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters.property.filter"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a>

A number filter for querying findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter {
    double Eq = null,
    double Gte = null,
    double Lte = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.property.eq">Eq</a></code> | <code>double</code> | The equal-to condition to be applied to a single field when querying for findings. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.property.gte">Gte</a></code> | <code>double</code> | The greater-than-equal condition to be applied to a single field when querying for findings. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.property.lte">Lte</a></code> | <code>double</code> | The less-than-equal condition to be applied to a single field when querying for findings. |

---

##### `Eq`<sup>Optional</sup> <a name="Eq" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.property.eq"></a>

```csharp
public double Eq { get; set; }
```

- *Type:* double

The equal-to condition to be applied to a single field when querying for findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#eq SecurityhubAutomationRuleV2#eq}

---

##### `Gte`<sup>Optional</sup> <a name="Gte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.property.gte"></a>

```csharp
public double Gte { get; set; }
```

- *Type:* double

The greater-than-equal condition to be applied to a single field when querying for findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#gte SecurityhubAutomationRuleV2#gte}

---

##### `Lte`<sup>Optional</sup> <a name="Lte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter.property.lte"></a>

```csharp
public double Lte { get; set; }
```

- *Type:* double

The less-than-equal condition to be applied to a single field when querying for findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#lte SecurityhubAutomationRuleV2#lte}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters {
    string FieldName = null,
    SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter Filter = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters.property.fieldName">FieldName</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a></code> | A string filter for filtering findings. |

---

##### `FieldName`<sup>Optional</sup> <a name="FieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters.property.fieldName"></a>

```csharp
public string FieldName { get; set; }
```

- *Type:* string

The name of the field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#field_name SecurityhubAutomationRuleV2#field_name}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters.property.filter"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter Filter { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a>

A string filter for filtering findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#filter SecurityhubAutomationRuleV2#filter}

---

### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter {
    string Comparison = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter.property.comparison">Comparison</a></code> | <code>string</code> | The condition to apply to a string value when filtering findings. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter.property.value">Value</a></code> | <code>string</code> | The string filter value. |

---

##### `Comparison`<sup>Optional</sup> <a name="Comparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter.property.comparison"></a>

```csharp
public string Comparison { get; set; }
```

- *Type:* string

The condition to apply to a string value when filtering findings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#comparison SecurityhubAutomationRuleV2#comparison}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The string filter value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/securityhub_automation_rule_v2#value SecurityhubAutomationRuleV2#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference <a name="SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.resetConnectorArn">ResetConnectorArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectorArn` <a name="ResetConnectorArn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.resetConnectorArn"></a>

```csharp
private void ResetConnectorArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.connectorArnInput">ConnectorArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.connectorArn">ConnectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectorArnInput`<sup>Optional</sup> <a name="ConnectorArnInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.connectorArnInput"></a>

```csharp
public string ConnectorArnInput { get; }
```

- *Type:* string

---

##### `ConnectorArn`<sup>Required</sup> <a name="ConnectorArn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.connectorArn"></a>

```csharp
public string ConnectorArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a>

---


### SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference <a name="SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resetSeverityId">ResetSeverityId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resetStatusId">ResetStatusId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetSeverityId` <a name="ResetSeverityId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resetSeverityId"></a>

```csharp
private void ResetSeverityId()
```

##### `ResetStatusId` <a name="ResetStatusId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.resetStatusId"></a>

```csharp
private void ResetStatusId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.severityIdInput">SeverityIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.statusIdInput">StatusIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.severityId">SeverityId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.statusId">StatusId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `SeverityIdInput`<sup>Optional</sup> <a name="SeverityIdInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.severityIdInput"></a>

```csharp
public double SeverityIdInput { get; }
```

- *Type:* double

---

##### `StatusIdInput`<sup>Optional</sup> <a name="StatusIdInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.statusIdInput"></a>

```csharp
public double StatusIdInput { get; }
```

- *Type:* double

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `SeverityId`<sup>Required</sup> <a name="SeverityId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.severityId"></a>

```csharp
public double SeverityId { get; }
```

- *Type:* double

---

##### `StatusId`<sup>Required</sup> <a name="StatusId" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.statusId"></a>

```csharp
public double StatusId { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a>

---


### SecurityhubAutomationRuleV2ActionsList <a name="SecurityhubAutomationRuleV2ActionsList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2ActionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.get"></a>

```csharp
private SecurityhubAutomationRuleV2ActionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsList.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2Actions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>[]

---


### SecurityhubAutomationRuleV2ActionsOutputReference <a name="SecurityhubAutomationRuleV2ActionsOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2ActionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putExternalIntegrationConfiguration">PutExternalIntegrationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putFindingFieldsUpdate">PutFindingFieldsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resetExternalIntegrationConfiguration">ResetExternalIntegrationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resetFindingFieldsUpdate">ResetFindingFieldsUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExternalIntegrationConfiguration` <a name="PutExternalIntegrationConfiguration" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putExternalIntegrationConfiguration"></a>

```csharp
private void PutExternalIntegrationConfiguration(SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putExternalIntegrationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a>

---

##### `PutFindingFieldsUpdate` <a name="PutFindingFieldsUpdate" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putFindingFieldsUpdate"></a>

```csharp
private void PutFindingFieldsUpdate(SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.putFindingFieldsUpdate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a>

---

##### `ResetExternalIntegrationConfiguration` <a name="ResetExternalIntegrationConfiguration" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resetExternalIntegrationConfiguration"></a>

```csharp
private void ResetExternalIntegrationConfiguration()
```

##### `ResetFindingFieldsUpdate` <a name="ResetFindingFieldsUpdate" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.resetFindingFieldsUpdate"></a>

```csharp
private void ResetFindingFieldsUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.externalIntegrationConfiguration">ExternalIntegrationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.findingFieldsUpdate">FindingFieldsUpdate</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.externalIntegrationConfigurationInput">ExternalIntegrationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.findingFieldsUpdateInput">FindingFieldsUpdateInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalIntegrationConfiguration`<sup>Required</sup> <a name="ExternalIntegrationConfiguration" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.externalIntegrationConfiguration"></a>

```csharp
public SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference ExternalIntegrationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfigurationOutputReference</a>

---

##### `FindingFieldsUpdate`<sup>Required</sup> <a name="FindingFieldsUpdate" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.findingFieldsUpdate"></a>

```csharp
public SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference FindingFieldsUpdate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdateOutputReference</a>

---

##### `ExternalIntegrationConfigurationInput`<sup>Optional</sup> <a name="ExternalIntegrationConfigurationInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.externalIntegrationConfigurationInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration ExternalIntegrationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration">SecurityhubAutomationRuleV2ActionsExternalIntegrationConfiguration</a>

---

##### `FindingFieldsUpdateInput`<sup>Optional</sup> <a name="FindingFieldsUpdateInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.findingFieldsUpdateInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate FindingFieldsUpdateInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate">SecurityhubAutomationRuleV2ActionsFindingFieldsUpdate</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2ActionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2Actions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Actions">SecurityhubAutomationRuleV2Actions</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.valueInput">ValueInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.value">Value</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.valueInput"></a>

```csharp
public bool|IResolvable ValueInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.value"></a>

```csharp
public bool|IResolvable Value { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.get"></a>

```csharp
private SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>[]

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resetFieldName">ResetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.putFilter"></a>

```csharp
private void PutFilter(SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a>

---

##### `ResetFieldName` <a name="ResetFieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resetFieldName"></a>

```csharp
private void ResetFieldName()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.filter"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilterOutputReference</a>

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.filterInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersFilter</a>

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.putDateRange">PutDateRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resetDateRange">ResetDateRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resetEnd">ResetEnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resetStart">ResetStart</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDateRange` <a name="PutDateRange" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.putDateRange"></a>

```csharp
private void PutDateRange(SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.putDateRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a>

---

##### `ResetDateRange` <a name="ResetDateRange" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resetDateRange"></a>

```csharp
private void ResetDateRange()
```

##### `ResetEnd` <a name="ResetEnd" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resetEnd"></a>

```csharp
private void ResetEnd()
```

##### `ResetStart` <a name="ResetStart" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.resetStart"></a>

```csharp
private void ResetStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.dateRange">DateRange</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.dateRangeInput">DateRangeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.endInput">EndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.startInput">StartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateRange`<sup>Required</sup> <a name="DateRange" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.dateRange"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference DateRange { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRangeOutputReference</a>

---

##### `DateRangeInput`<sup>Optional</sup> <a name="DateRangeInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.dateRangeInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange DateRangeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterDateRange</a>

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.endInput"></a>

```csharp
public string EndInput { get; }
```

- *Type:* string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.startInput"></a>

```csharp
public string StartInput { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.get"></a>

```csharp
private SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>[]

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resetFieldName">ResetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.putFilter"></a>

```csharp
private void PutFilter(SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a>

---

##### `ResetFieldName` <a name="ResetFieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resetFieldName"></a>

```csharp
private void ResetFieldName()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.filter"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilterOutputReference</a>

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.filterInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersFilter</a>

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.get"></a>

```csharp
private SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>[]

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resetComparison">ResetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparison` <a name="ResetComparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resetComparison"></a>

```csharp
private void ResetComparison()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.get"></a>

```csharp
private SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>[]

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resetFieldName">ResetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.putFilter"></a>

```csharp
private void PutFilter(SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a>

---

##### `ResetFieldName` <a name="ResetFieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resetFieldName"></a>

```csharp
private void ResetFieldName()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.filter"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilterOutputReference</a>

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.filterInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersFilter</a>

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resetEq">ResetEq</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resetGte">ResetGte</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resetLte">ResetLte</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEq` <a name="ResetEq" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resetEq"></a>

```csharp
private void ResetEq()
```

##### `ResetGte` <a name="ResetGte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resetGte"></a>

```csharp
private void ResetGte()
```

##### `ResetLte` <a name="ResetLte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.resetLte"></a>

```csharp
private void ResetLte()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.eqInput">EqInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.gteInput">GteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.lteInput">LteInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.eq">Eq</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.gte">Gte</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.lte">Lte</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EqInput`<sup>Optional</sup> <a name="EqInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.eqInput"></a>

```csharp
public double EqInput { get; }
```

- *Type:* double

---

##### `GteInput`<sup>Optional</sup> <a name="GteInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.gteInput"></a>

```csharp
public double GteInput { get; }
```

- *Type:* double

---

##### `LteInput`<sup>Optional</sup> <a name="LteInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.lteInput"></a>

```csharp
public double LteInput { get; }
```

- *Type:* double

---

##### `Eq`<sup>Required</sup> <a name="Eq" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.eq"></a>

```csharp
public double Eq { get; }
```

- *Type:* double

---

##### `Gte`<sup>Required</sup> <a name="Gte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.gte"></a>

```csharp
public double Gte { get; }
```

- *Type:* double

---

##### `Lte`<sup>Required</sup> <a name="Lte" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.lte"></a>

```csharp
public double Lte { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.get"></a>

```csharp
private SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>[]

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resetFieldName">ResetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.putFilter"></a>

```csharp
private void PutFilter(SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a>

---

##### `ResetFieldName` <a name="ResetFieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resetFieldName"></a>

```csharp
private void ResetFieldName()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.filter"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilterOutputReference</a>

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.filterInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersFilter</a>

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putBooleanFilters">PutBooleanFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putDateFilters">PutDateFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putMapFilters">PutMapFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putNumberFilters">PutNumberFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putStringFilters">PutStringFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetBooleanFilters">ResetBooleanFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetDateFilters">ResetDateFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetMapFilters">ResetMapFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetNumberFilters">ResetNumberFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetStringFilters">ResetStringFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBooleanFilters` <a name="PutBooleanFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putBooleanFilters"></a>

```csharp
private void PutBooleanFilters(IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putBooleanFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>[]

---

##### `PutDateFilters` <a name="PutDateFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putDateFilters"></a>

```csharp
private void PutDateFilters(IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putDateFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>[]

---

##### `PutMapFilters` <a name="PutMapFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putMapFilters"></a>

```csharp
private void PutMapFilters(IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putMapFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>[]

---

##### `PutNumberFilters` <a name="PutNumberFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putNumberFilters"></a>

```csharp
private void PutNumberFilters(IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putNumberFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>[]

---

##### `PutStringFilters` <a name="PutStringFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putStringFilters"></a>

```csharp
private void PutStringFilters(IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.putStringFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>[]

---

##### `ResetBooleanFilters` <a name="ResetBooleanFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetBooleanFilters"></a>

```csharp
private void ResetBooleanFilters()
```

##### `ResetDateFilters` <a name="ResetDateFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetDateFilters"></a>

```csharp
private void ResetDateFilters()
```

##### `ResetMapFilters` <a name="ResetMapFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetMapFilters"></a>

```csharp
private void ResetMapFilters()
```

##### `ResetNumberFilters` <a name="ResetNumberFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetNumberFilters"></a>

```csharp
private void ResetNumberFilters()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetStringFilters` <a name="ResetStringFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.resetStringFilters"></a>

```csharp
private void ResetStringFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.booleanFilters">BooleanFilters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.dateFilters">DateFilters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.mapFilters">MapFilters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.numberFilters">NumberFilters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.stringFilters">StringFilters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.booleanFiltersInput">BooleanFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.dateFiltersInput">DateFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.mapFiltersInput">MapFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.numberFiltersInput">NumberFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.stringFiltersInput">StringFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BooleanFilters`<sup>Required</sup> <a name="BooleanFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.booleanFilters"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList BooleanFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFiltersList</a>

---

##### `DateFilters`<sup>Required</sup> <a name="DateFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.dateFilters"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList DateFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFiltersList</a>

---

##### `MapFilters`<sup>Required</sup> <a name="MapFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.mapFilters"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList MapFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFiltersList</a>

---

##### `NumberFilters`<sup>Required</sup> <a name="NumberFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.numberFilters"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList NumberFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFiltersList</a>

---

##### `StringFilters`<sup>Required</sup> <a name="StringFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.stringFilters"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList StringFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList</a>

---

##### `BooleanFiltersInput`<sup>Optional</sup> <a name="BooleanFiltersInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.booleanFiltersInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters[] BooleanFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersBooleanFilters</a>[]

---

##### `DateFiltersInput`<sup>Optional</sup> <a name="DateFiltersInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.dateFiltersInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters[] DateFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersDateFilters</a>[]

---

##### `MapFiltersInput`<sup>Optional</sup> <a name="MapFiltersInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.mapFiltersInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters[] MapFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersMapFilters</a>[]

---

##### `NumberFiltersInput`<sup>Optional</sup> <a name="NumberFiltersInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.numberFiltersInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters[] NumberFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersNumberFilters</a>[]

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `StringFiltersInput`<sup>Optional</sup> <a name="StringFiltersInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.stringFiltersInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters[] StringFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>[]

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resetComparison">ResetComparison</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComparison` <a name="ResetComparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resetComparison"></a>

```csharp
private void ResetComparison()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.comparisonInput">ComparisonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.comparison">Comparison</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComparisonInput`<sup>Optional</sup> <a name="ComparisonInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.comparisonInput"></a>

```csharp
public string ComparisonInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Comparison`<sup>Required</sup> <a name="Comparison" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.comparison"></a>

```csharp
public string Comparison { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.get"></a>

```csharp
private SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersList.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>[]

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resetFieldName">ResetFieldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.putFilter"></a>

```csharp
private void PutFilter(SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a>

---

##### `ResetFieldName` <a name="ResetFieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resetFieldName"></a>

```csharp
private void ResetFieldName()
```

##### `ResetFilter` <a name="ResetFilter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.resetFilter"></a>

```csharp
private void ResetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fieldNameInput">FieldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.filterInput">FilterInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fieldName">FieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.filter"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilterOutputReference</a>

---

##### `FieldNameInput`<sup>Optional</sup> <a name="FieldNameInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fieldNameInput"></a>

```csharp
public string FieldNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.filterInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter FilterInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersFilter</a>

---

##### `FieldName`<sup>Required</sup> <a name="FieldName" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.fieldName"></a>

```csharp
public string FieldName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersStringFilters</a>

---


### SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.putCompositeFilters">PutCompositeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resetCompositeFilters">ResetCompositeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resetCompositeOperator">ResetCompositeOperator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCompositeFilters` <a name="PutCompositeFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.putCompositeFilters"></a>

```csharp
private void PutCompositeFilters(IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.putCompositeFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>[]

---

##### `ResetCompositeFilters` <a name="ResetCompositeFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resetCompositeFilters"></a>

```csharp
private void ResetCompositeFilters()
```

##### `ResetCompositeOperator` <a name="ResetCompositeOperator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.resetCompositeOperator"></a>

```csharp
private void ResetCompositeOperator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeFilters">CompositeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeFiltersInput">CompositeFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeOperatorInput">CompositeOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeOperator">CompositeOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompositeFilters`<sup>Required</sup> <a name="CompositeFilters" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeFilters"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList CompositeFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFiltersList</a>

---

##### `CompositeFiltersInput`<sup>Optional</sup> <a name="CompositeFiltersInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeFiltersInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters[] CompositeFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaCompositeFilters</a>[]

---

##### `CompositeOperatorInput`<sup>Optional</sup> <a name="CompositeOperatorInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeOperatorInput"></a>

```csharp
public string CompositeOperatorInput { get; }
```

- *Type:* string

---

##### `CompositeOperator`<sup>Required</sup> <a name="CompositeOperator" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.compositeOperator"></a>

```csharp
public string CompositeOperator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a>

---


### SecurityhubAutomationRuleV2CriteriaOutputReference <a name="SecurityhubAutomationRuleV2CriteriaOutputReference" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SecurityhubAutomationRuleV2CriteriaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.putOcsfFindingCriteria">PutOcsfFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resetOcsfFindingCriteria">ResetOcsfFindingCriteria</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOcsfFindingCriteria` <a name="PutOcsfFindingCriteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.putOcsfFindingCriteria"></a>

```csharp
private void PutOcsfFindingCriteria(SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.putOcsfFindingCriteria.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a>

---

##### `ResetOcsfFindingCriteria` <a name="ResetOcsfFindingCriteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.resetOcsfFindingCriteria"></a>

```csharp
private void ResetOcsfFindingCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteria">OcsfFindingCriteria</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaInput">OcsfFindingCriteriaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OcsfFindingCriteria`<sup>Required</sup> <a name="OcsfFindingCriteria" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteria"></a>

```csharp
public SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference OcsfFindingCriteria { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteriaOutputReference</a>

---

##### `OcsfFindingCriteriaInput`<sup>Optional</sup> <a name="OcsfFindingCriteriaInput" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.ocsfFindingCriteriaInput"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria OcsfFindingCriteriaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria">SecurityhubAutomationRuleV2CriteriaOcsfFindingCriteria</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2CriteriaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SecurityhubAutomationRuleV2Criteria InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.securityhubAutomationRuleV2.SecurityhubAutomationRuleV2Criteria">SecurityhubAutomationRuleV2Criteria</a>

---



