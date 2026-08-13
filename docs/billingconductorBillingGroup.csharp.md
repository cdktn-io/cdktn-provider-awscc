# `billingconductorBillingGroup` Submodule <a name="`billingconductorBillingGroup` Submodule" id="@cdktn/provider-awscc.billingconductorBillingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BillingconductorBillingGroup <a name="BillingconductorBillingGroup" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group awscc_billingconductor_billing_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingconductorBillingGroup(Construct Scope, string Id, BillingconductorBillingGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig">BillingconductorBillingGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig">BillingconductorBillingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putAccountGrouping">PutAccountGrouping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putComputationPreference">PutComputationPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetPrimaryAccountId">ResetPrimaryAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccountGrouping` <a name="PutAccountGrouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putAccountGrouping"></a>

```csharp
private void PutAccountGrouping(BillingconductorBillingGroupAccountGrouping Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putAccountGrouping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

---

##### `PutComputationPreference` <a name="PutComputationPreference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putComputationPreference"></a>

```csharp
private void PutComputationPreference(BillingconductorBillingGroupComputationPreference Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putComputationPreference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putTags"></a>

```csharp
private void PutTags(IResolvable|BillingconductorBillingGroupTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetPrimaryAccountId` <a name="ResetPrimaryAccountId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetPrimaryAccountId"></a>

```csharp
private void ResetPrimaryAccountId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BillingconductorBillingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BillingconductorBillingGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BillingconductorBillingGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BillingconductorBillingGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BillingconductorBillingGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BillingconductorBillingGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BillingconductorBillingGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BillingconductorBillingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BillingconductorBillingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGrouping">AccountGrouping</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference">BillingconductorBillingGroupAccountGroupingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreference">ComputationPreference</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference">BillingconductorBillingGroupComputationPreferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.creationTime">CreationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lastModifiedTime">LastModifiedTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.statusReason">StatusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList">BillingconductorBillingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGroupingInput">AccountGroupingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreferenceInput">ComputationPreferenceInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountIdInput">PrimaryAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountId">PrimaryAccountId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountGrouping`<sup>Required</sup> <a name="AccountGrouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGrouping"></a>

```csharp
public BillingconductorBillingGroupAccountGroupingOutputReference AccountGrouping { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference">BillingconductorBillingGroupAccountGroupingOutputReference</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `ComputationPreference`<sup>Required</sup> <a name="ComputationPreference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreference"></a>

```csharp
public BillingconductorBillingGroupComputationPreferenceOutputReference ComputationPreference { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference">BillingconductorBillingGroupComputationPreferenceOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.creationTime"></a>

```csharp
public double CreationTime { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifiedTime`<sup>Required</sup> <a name="LastModifiedTime" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.lastModifiedTime"></a>

```csharp
public double LastModifiedTime { get; }
```

- *Type:* double

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusReason`<sup>Required</sup> <a name="StatusReason" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.statusReason"></a>

```csharp
public string StatusReason { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tags"></a>

```csharp
public BillingconductorBillingGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList">BillingconductorBillingGroupTagsList</a>

---

##### `AccountGroupingInput`<sup>Optional</sup> <a name="AccountGroupingInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.accountGroupingInput"></a>

```csharp
public IResolvable|BillingconductorBillingGroupAccountGrouping AccountGroupingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

---

##### `ComputationPreferenceInput`<sup>Optional</sup> <a name="ComputationPreferenceInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.computationPreferenceInput"></a>

```csharp
public IResolvable|BillingconductorBillingGroupComputationPreference ComputationPreferenceInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrimaryAccountIdInput`<sup>Optional</sup> <a name="PrimaryAccountIdInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountIdInput"></a>

```csharp
public string PrimaryAccountIdInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tagsInput"></a>

```csharp
public IResolvable|BillingconductorBillingGroupTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrimaryAccountId`<sup>Required</sup> <a name="PrimaryAccountId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.primaryAccountId"></a>

```csharp
public string PrimaryAccountId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BillingconductorBillingGroupAccountGrouping <a name="BillingconductorBillingGroupAccountGrouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingconductorBillingGroupAccountGrouping {
    bool|IResolvable AutoAssociate = null,
    string[] LinkedAccountIds = null,
    string ResponsibilityTransferArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.autoAssociate">AutoAssociate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#auto_associate BillingconductorBillingGroup#auto_associate}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.linkedAccountIds">LinkedAccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#linked_account_ids BillingconductorBillingGroup#linked_account_ids}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.responsibilityTransferArn">ResponsibilityTransferArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#responsibility_transfer_arn BillingconductorBillingGroup#responsibility_transfer_arn}. |

---

##### `AutoAssociate`<sup>Optional</sup> <a name="AutoAssociate" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.autoAssociate"></a>

```csharp
public bool|IResolvable AutoAssociate { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#auto_associate BillingconductorBillingGroup#auto_associate}.

---

##### `LinkedAccountIds`<sup>Optional</sup> <a name="LinkedAccountIds" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.linkedAccountIds"></a>

```csharp
public string[] LinkedAccountIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#linked_account_ids BillingconductorBillingGroup#linked_account_ids}.

---

##### `ResponsibilityTransferArn`<sup>Optional</sup> <a name="ResponsibilityTransferArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping.property.responsibilityTransferArn"></a>

```csharp
public string ResponsibilityTransferArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#responsibility_transfer_arn BillingconductorBillingGroup#responsibility_transfer_arn}.

---

### BillingconductorBillingGroupComputationPreference <a name="BillingconductorBillingGroupComputationPreference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingconductorBillingGroupComputationPreference {
    string PricingPlanArn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference.property.pricingPlanArn">PricingPlanArn</a></code> | <code>string</code> | ARN of the attached pricing plan. |

---

##### `PricingPlanArn`<sup>Required</sup> <a name="PricingPlanArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference.property.pricingPlanArn"></a>

```csharp
public string PricingPlanArn { get; set; }
```

- *Type:* string

ARN of the attached pricing plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#pricing_plan_arn BillingconductorBillingGroup#pricing_plan_arn}

---

### BillingconductorBillingGroupConfig <a name="BillingconductorBillingGroupConfig" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingconductorBillingGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    BillingconductorBillingGroupAccountGrouping AccountGrouping,
    BillingconductorBillingGroupComputationPreference ComputationPreference,
    string Name,
    string Description = null,
    string PrimaryAccountId = null,
    IResolvable|BillingconductorBillingGroupTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.accountGrouping">AccountGrouping</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#account_grouping BillingconductorBillingGroup#account_grouping}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.computationPreference">ComputationPreference</a></code> | <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#computation_preference BillingconductorBillingGroup#computation_preference}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#name BillingconductorBillingGroup#name}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#description BillingconductorBillingGroup#description}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.primaryAccountId">PrimaryAccountId</a></code> | <code>string</code> | This account will act as a virtual payer account of the billing group. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#tags BillingconductorBillingGroup#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountGrouping`<sup>Required</sup> <a name="AccountGrouping" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.accountGrouping"></a>

```csharp
public BillingconductorBillingGroupAccountGrouping AccountGrouping { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#account_grouping BillingconductorBillingGroup#account_grouping}.

---

##### `ComputationPreference`<sup>Required</sup> <a name="ComputationPreference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.computationPreference"></a>

```csharp
public BillingconductorBillingGroupComputationPreference ComputationPreference { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#computation_preference BillingconductorBillingGroup#computation_preference}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#name BillingconductorBillingGroup#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#description BillingconductorBillingGroup#description}.

---

##### `PrimaryAccountId`<sup>Optional</sup> <a name="PrimaryAccountId" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.primaryAccountId"></a>

```csharp
public string PrimaryAccountId { get; set; }
```

- *Type:* string

This account will act as a virtual payer account of the billing group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#primary_account_id BillingconductorBillingGroup#primary_account_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupConfig.property.tags"></a>

```csharp
public IResolvable|BillingconductorBillingGroupTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#tags BillingconductorBillingGroup#tags}.

---

### BillingconductorBillingGroupTags <a name="BillingconductorBillingGroupTags" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingconductorBillingGroupTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#key BillingconductorBillingGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#value BillingconductorBillingGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#key BillingconductorBillingGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/billingconductor_billing_group#value BillingconductorBillingGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BillingconductorBillingGroupAccountGroupingOutputReference <a name="BillingconductorBillingGroupAccountGroupingOutputReference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingconductorBillingGroupAccountGroupingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetAutoAssociate">ResetAutoAssociate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetLinkedAccountIds">ResetLinkedAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetResponsibilityTransferArn">ResetResponsibilityTransferArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoAssociate` <a name="ResetAutoAssociate" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetAutoAssociate"></a>

```csharp
private void ResetAutoAssociate()
```

##### `ResetLinkedAccountIds` <a name="ResetLinkedAccountIds" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetLinkedAccountIds"></a>

```csharp
private void ResetLinkedAccountIds()
```

##### `ResetResponsibilityTransferArn` <a name="ResetResponsibilityTransferArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.resetResponsibilityTransferArn"></a>

```csharp
private void ResetResponsibilityTransferArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociateInput">AutoAssociateInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIdsInput">LinkedAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArnInput">ResponsibilityTransferArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociate">AutoAssociate</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIds">LinkedAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArn">ResponsibilityTransferArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoAssociateInput`<sup>Optional</sup> <a name="AutoAssociateInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociateInput"></a>

```csharp
public bool|IResolvable AutoAssociateInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LinkedAccountIdsInput`<sup>Optional</sup> <a name="LinkedAccountIdsInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIdsInput"></a>

```csharp
public string[] LinkedAccountIdsInput { get; }
```

- *Type:* string[]

---

##### `ResponsibilityTransferArnInput`<sup>Optional</sup> <a name="ResponsibilityTransferArnInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArnInput"></a>

```csharp
public string ResponsibilityTransferArnInput { get; }
```

- *Type:* string

---

##### `AutoAssociate`<sup>Required</sup> <a name="AutoAssociate" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.autoAssociate"></a>

```csharp
public bool|IResolvable AutoAssociate { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `LinkedAccountIds`<sup>Required</sup> <a name="LinkedAccountIds" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.linkedAccountIds"></a>

```csharp
public string[] LinkedAccountIds { get; }
```

- *Type:* string[]

---

##### `ResponsibilityTransferArn`<sup>Required</sup> <a name="ResponsibilityTransferArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.responsibilityTransferArn"></a>

```csharp
public string ResponsibilityTransferArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGroupingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BillingconductorBillingGroupAccountGrouping InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupAccountGrouping">BillingconductorBillingGroupAccountGrouping</a>

---


### BillingconductorBillingGroupComputationPreferenceOutputReference <a name="BillingconductorBillingGroupComputationPreferenceOutputReference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingconductorBillingGroupComputationPreferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArnInput">PricingPlanArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArn">PricingPlanArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PricingPlanArnInput`<sup>Optional</sup> <a name="PricingPlanArnInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArnInput"></a>

```csharp
public string PricingPlanArnInput { get; }
```

- *Type:* string

---

##### `PricingPlanArn`<sup>Required</sup> <a name="PricingPlanArn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.pricingPlanArn"></a>

```csharp
public string PricingPlanArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreferenceOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BillingconductorBillingGroupComputationPreference InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupComputationPreference">BillingconductorBillingGroupComputationPreference</a>

---


### BillingconductorBillingGroupTagsList <a name="BillingconductorBillingGroupTagsList" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingconductorBillingGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.get"></a>

```csharp
private BillingconductorBillingGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsList.property.internalValue"></a>

```csharp
public IResolvable|BillingconductorBillingGroupTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>[]

---


### BillingconductorBillingGroupTagsOutputReference <a name="BillingconductorBillingGroupTagsOutputReference" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BillingconductorBillingGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BillingconductorBillingGroupTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.billingconductorBillingGroup.BillingconductorBillingGroupTags">BillingconductorBillingGroupTags</a>

---



