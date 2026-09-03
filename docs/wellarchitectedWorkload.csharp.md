# `wellarchitectedWorkload` Submodule <a name="`wellarchitectedWorkload` Submodule" id="@cdktn/provider-awscc.wellarchitectedWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WellarchitectedWorkload <a name="WellarchitectedWorkload" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload awscc_wellarchitected_workload}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WellarchitectedWorkload(Construct Scope, string Id, WellarchitectedWorkloadConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig">WellarchitectedWorkloadConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig">WellarchitectedWorkloadConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putDiscoveryConfig">PutDiscoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAccountIds">ResetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetArchitecturalDesign">ResetArchitecturalDesign</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAwsRegions">ResetAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetDiscoveryConfig">ResetDiscoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustry">ResetIndustry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustryType">ResetIndustryType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNonAwsRegions">ResetNonAwsRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNotes">ResetNotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetReviewOwner">ResetReviewOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDiscoveryConfig` <a name="PutDiscoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putDiscoveryConfig"></a>

```csharp
private void PutDiscoveryConfig(WellarchitectedWorkloadDiscoveryConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putDiscoveryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putTags"></a>

```csharp
private void PutTags(IResolvable|WellarchitectedWorkloadTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>[]

---

##### `ResetAccountIds` <a name="ResetAccountIds" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAccountIds"></a>

```csharp
private void ResetAccountIds()
```

##### `ResetArchitecturalDesign` <a name="ResetArchitecturalDesign" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetArchitecturalDesign"></a>

```csharp
private void ResetArchitecturalDesign()
```

##### `ResetAwsRegions` <a name="ResetAwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetAwsRegions"></a>

```csharp
private void ResetAwsRegions()
```

##### `ResetDiscoveryConfig` <a name="ResetDiscoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetDiscoveryConfig"></a>

```csharp
private void ResetDiscoveryConfig()
```

##### `ResetIndustry` <a name="ResetIndustry" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustry"></a>

```csharp
private void ResetIndustry()
```

##### `ResetIndustryType` <a name="ResetIndustryType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetIndustryType"></a>

```csharp
private void ResetIndustryType()
```

##### `ResetNonAwsRegions` <a name="ResetNonAwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNonAwsRegions"></a>

```csharp
private void ResetNonAwsRegions()
```

##### `ResetNotes` <a name="ResetNotes" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetNotes"></a>

```csharp
private void ResetNotes()
```

##### `ResetReviewOwner` <a name="ResetReviewOwner" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetReviewOwner"></a>

```csharp
private void ResetReviewOwner()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WellarchitectedWorkload resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WellarchitectedWorkload.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WellarchitectedWorkload.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WellarchitectedWorkload.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

WellarchitectedWorkload.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WellarchitectedWorkload resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WellarchitectedWorkload to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WellarchitectedWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WellarchitectedWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfig">DiscoveryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference">WellarchitectedWorkloadDiscoveryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.improvementStatus">ImprovementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList">WellarchitectedWorkloadTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadArn">WorkloadArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadId">WorkloadId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIdsInput">AccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesignInput">ArchitecturalDesignInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegionsInput">AwsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfigInput">DiscoveryConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryInput">IndustryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryTypeInput">IndustryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lensesInput">LensesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegionsInput">NonAwsRegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notesInput">NotesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwnerInput">ReviewOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadNameInput">WorkloadNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIds">AccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesign">ArchitecturalDesign</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegions">AwsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industry">Industry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryType">IndustryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lenses">Lenses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegions">NonAwsRegions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notes">Notes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwner">ReviewOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadName">WorkloadName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DiscoveryConfig`<sup>Required</sup> <a name="DiscoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfig"></a>

```csharp
public WellarchitectedWorkloadDiscoveryConfigOutputReference DiscoveryConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference">WellarchitectedWorkloadDiscoveryConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImprovementStatus`<sup>Required</sup> <a name="ImprovementStatus" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.improvementStatus"></a>

```csharp
public string ImprovementStatus { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tags"></a>

```csharp
public WellarchitectedWorkloadTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList">WellarchitectedWorkloadTagsList</a>

---

##### `WorkloadArn`<sup>Required</sup> <a name="WorkloadArn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadArn"></a>

```csharp
public string WorkloadArn { get; }
```

- *Type:* string

---

##### `WorkloadId`<sup>Required</sup> <a name="WorkloadId" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadId"></a>

```csharp
public string WorkloadId { get; }
```

- *Type:* string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIdsInput"></a>

```csharp
public string[] AccountIdsInput { get; }
```

- *Type:* string[]

---

##### `ArchitecturalDesignInput`<sup>Optional</sup> <a name="ArchitecturalDesignInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesignInput"></a>

```csharp
public string ArchitecturalDesignInput { get; }
```

- *Type:* string

---

##### `AwsRegionsInput`<sup>Optional</sup> <a name="AwsRegionsInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegionsInput"></a>

```csharp
public string[] AwsRegionsInput { get; }
```

- *Type:* string[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DiscoveryConfigInput`<sup>Optional</sup> <a name="DiscoveryConfigInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.discoveryConfigInput"></a>

```csharp
public IResolvable|WellarchitectedWorkloadDiscoveryConfig DiscoveryConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IndustryInput`<sup>Optional</sup> <a name="IndustryInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryInput"></a>

```csharp
public string IndustryInput { get; }
```

- *Type:* string

---

##### `IndustryTypeInput`<sup>Optional</sup> <a name="IndustryTypeInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryTypeInput"></a>

```csharp
public string IndustryTypeInput { get; }
```

- *Type:* string

---

##### `LensesInput`<sup>Optional</sup> <a name="LensesInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lensesInput"></a>

```csharp
public string[] LensesInput { get; }
```

- *Type:* string[]

---

##### `NonAwsRegionsInput`<sup>Optional</sup> <a name="NonAwsRegionsInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegionsInput"></a>

```csharp
public string[] NonAwsRegionsInput { get; }
```

- *Type:* string[]

---

##### `NotesInput`<sup>Optional</sup> <a name="NotesInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notesInput"></a>

```csharp
public string NotesInput { get; }
```

- *Type:* string

---

##### `ReviewOwnerInput`<sup>Optional</sup> <a name="ReviewOwnerInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwnerInput"></a>

```csharp
public string ReviewOwnerInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tagsInput"></a>

```csharp
public IResolvable|WellarchitectedWorkloadTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>[]

---

##### `WorkloadNameInput`<sup>Optional</sup> <a name="WorkloadNameInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadNameInput"></a>

```csharp
public string WorkloadNameInput { get; }
```

- *Type:* string

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.accountIds"></a>

```csharp
public string[] AccountIds { get; }
```

- *Type:* string[]

---

##### `ArchitecturalDesign`<sup>Required</sup> <a name="ArchitecturalDesign" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.architecturalDesign"></a>

```csharp
public string ArchitecturalDesign { get; }
```

- *Type:* string

---

##### `AwsRegions`<sup>Required</sup> <a name="AwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.awsRegions"></a>

```csharp
public string[] AwsRegions { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Industry`<sup>Required</sup> <a name="Industry" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industry"></a>

```csharp
public string Industry { get; }
```

- *Type:* string

---

##### `IndustryType`<sup>Required</sup> <a name="IndustryType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.industryType"></a>

```csharp
public string IndustryType { get; }
```

- *Type:* string

---

##### `Lenses`<sup>Required</sup> <a name="Lenses" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.lenses"></a>

```csharp
public string[] Lenses { get; }
```

- *Type:* string[]

---

##### `NonAwsRegions`<sup>Required</sup> <a name="NonAwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.nonAwsRegions"></a>

```csharp
public string[] NonAwsRegions { get; }
```

- *Type:* string[]

---

##### `Notes`<sup>Required</sup> <a name="Notes" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.notes"></a>

```csharp
public string Notes { get; }
```

- *Type:* string

---

##### `ReviewOwner`<sup>Required</sup> <a name="ReviewOwner" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.reviewOwner"></a>

```csharp
public string ReviewOwner { get; }
```

- *Type:* string

---

##### `WorkloadName`<sup>Required</sup> <a name="WorkloadName" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.workloadName"></a>

```csharp
public string WorkloadName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkload.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WellarchitectedWorkloadConfig <a name="WellarchitectedWorkloadConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WellarchitectedWorkloadConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Description,
    string Environment,
    string[] Lenses,
    string WorkloadName,
    string[] AccountIds = null,
    string ArchitecturalDesign = null,
    string[] AwsRegions = null,
    WellarchitectedWorkloadDiscoveryConfig DiscoveryConfig = null,
    string Industry = null,
    string IndustryType = null,
    string[] NonAwsRegions = null,
    string Notes = null,
    string ReviewOwner = null,
    IResolvable|WellarchitectedWorkloadTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.description">Description</a></code> | <code>string</code> | The description for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.environment">Environment</a></code> | <code>string</code> | The environment for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lenses">Lenses</a></code> | <code>string[]</code> | The list of lenses associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.workloadName">WorkloadName</a></code> | <code>string</code> | The name of the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.accountIds">AccountIds</a></code> | <code>string[]</code> | The list of Amazon Web Services account IDs associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.architecturalDesign">ArchitecturalDesign</a></code> | <code>string</code> | The URL of the architectural design for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.awsRegions">AwsRegions</a></code> | <code>string[]</code> | The list of Amazon Web Services Regions associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.discoveryConfig">DiscoveryConfig</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a></code> | Discovery configuration associated to the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industry">Industry</a></code> | <code>string</code> | The industry for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industryType">IndustryType</a></code> | <code>string</code> | The industry type for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.nonAwsRegions">NonAwsRegions</a></code> | <code>string[]</code> | The list of non-Amazon Web Services Regions associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.notes">Notes</a></code> | <code>string</code> | The notes associated with the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.reviewOwner">ReviewOwner</a></code> | <code>string</code> | The review owner of the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>[]</code> | The tags associated with the workload. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#description WellarchitectedWorkload#description}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The environment for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#environment WellarchitectedWorkload#environment}

---

##### `Lenses`<sup>Required</sup> <a name="Lenses" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.lenses"></a>

```csharp
public string[] Lenses { get; set; }
```

- *Type:* string[]

The list of lenses associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#lenses WellarchitectedWorkload#lenses}

---

##### `WorkloadName`<sup>Required</sup> <a name="WorkloadName" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.workloadName"></a>

```csharp
public string WorkloadName { get; set; }
```

- *Type:* string

The name of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#workload_name WellarchitectedWorkload#workload_name}

---

##### `AccountIds`<sup>Optional</sup> <a name="AccountIds" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.accountIds"></a>

```csharp
public string[] AccountIds { get; set; }
```

- *Type:* string[]

The list of Amazon Web Services account IDs associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#account_ids WellarchitectedWorkload#account_ids}

---

##### `ArchitecturalDesign`<sup>Optional</sup> <a name="ArchitecturalDesign" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.architecturalDesign"></a>

```csharp
public string ArchitecturalDesign { get; set; }
```

- *Type:* string

The URL of the architectural design for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#architectural_design WellarchitectedWorkload#architectural_design}

---

##### `AwsRegions`<sup>Optional</sup> <a name="AwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.awsRegions"></a>

```csharp
public string[] AwsRegions { get; set; }
```

- *Type:* string[]

The list of Amazon Web Services Regions associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#aws_regions WellarchitectedWorkload#aws_regions}

---

##### `DiscoveryConfig`<sup>Optional</sup> <a name="DiscoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.discoveryConfig"></a>

```csharp
public WellarchitectedWorkloadDiscoveryConfig DiscoveryConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

Discovery configuration associated to the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#discovery_config WellarchitectedWorkload#discovery_config}

---

##### `Industry`<sup>Optional</sup> <a name="Industry" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industry"></a>

```csharp
public string Industry { get; set; }
```

- *Type:* string

The industry for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#industry WellarchitectedWorkload#industry}

---

##### `IndustryType`<sup>Optional</sup> <a name="IndustryType" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.industryType"></a>

```csharp
public string IndustryType { get; set; }
```

- *Type:* string

The industry type for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#industry_type WellarchitectedWorkload#industry_type}

---

##### `NonAwsRegions`<sup>Optional</sup> <a name="NonAwsRegions" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.nonAwsRegions"></a>

```csharp
public string[] NonAwsRegions { get; set; }
```

- *Type:* string[]

The list of non-Amazon Web Services Regions associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#non_aws_regions WellarchitectedWorkload#non_aws_regions}

---

##### `Notes`<sup>Optional</sup> <a name="Notes" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.notes"></a>

```csharp
public string Notes { get; set; }
```

- *Type:* string

The notes associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#notes WellarchitectedWorkload#notes}

---

##### `ReviewOwner`<sup>Optional</sup> <a name="ReviewOwner" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.reviewOwner"></a>

```csharp
public string ReviewOwner { get; set; }
```

- *Type:* string

The review owner of the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#review_owner WellarchitectedWorkload#review_owner}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadConfig.property.tags"></a>

```csharp
public IResolvable|WellarchitectedWorkloadTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>[]

The tags associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#tags WellarchitectedWorkload#tags}

---

### WellarchitectedWorkloadDiscoveryConfig <a name="WellarchitectedWorkloadDiscoveryConfig" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WellarchitectedWorkloadDiscoveryConfig {
    string TrustedAdvisorIntegrationStatus = null,
    string[] WorkloadResourceDefinition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.trustedAdvisorIntegrationStatus">TrustedAdvisorIntegrationStatus</a></code> | <code>string</code> | Discovery integration status in respect to Trusted Advisor for the workload. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.workloadResourceDefinition">WorkloadResourceDefinition</a></code> | <code>string[]</code> | The mode to use for identifying resources associated with the workload. |

---

##### `TrustedAdvisorIntegrationStatus`<sup>Optional</sup> <a name="TrustedAdvisorIntegrationStatus" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.trustedAdvisorIntegrationStatus"></a>

```csharp
public string TrustedAdvisorIntegrationStatus { get; set; }
```

- *Type:* string

Discovery integration status in respect to Trusted Advisor for the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#trusted_advisor_integration_status WellarchitectedWorkload#trusted_advisor_integration_status}

---

##### `WorkloadResourceDefinition`<sup>Optional</sup> <a name="WorkloadResourceDefinition" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig.property.workloadResourceDefinition"></a>

```csharp
public string[] WorkloadResourceDefinition { get; set; }
```

- *Type:* string[]

The mode to use for identifying resources associated with the workload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#workload_resource_definition WellarchitectedWorkload#workload_resource_definition}

---

### WellarchitectedWorkloadTags <a name="WellarchitectedWorkloadTags" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WellarchitectedWorkloadTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#key WellarchitectedWorkload#key}. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#value WellarchitectedWorkload#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#key WellarchitectedWorkload#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/wellarchitected_workload#value WellarchitectedWorkload#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### WellarchitectedWorkloadDiscoveryConfigOutputReference <a name="WellarchitectedWorkloadDiscoveryConfigOutputReference" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WellarchitectedWorkloadDiscoveryConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetTrustedAdvisorIntegrationStatus">ResetTrustedAdvisorIntegrationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetWorkloadResourceDefinition">ResetWorkloadResourceDefinition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTrustedAdvisorIntegrationStatus` <a name="ResetTrustedAdvisorIntegrationStatus" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetTrustedAdvisorIntegrationStatus"></a>

```csharp
private void ResetTrustedAdvisorIntegrationStatus()
```

##### `ResetWorkloadResourceDefinition` <a name="ResetWorkloadResourceDefinition" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.resetWorkloadResourceDefinition"></a>

```csharp
private void ResetWorkloadResourceDefinition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatusInput">TrustedAdvisorIntegrationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinitionInput">WorkloadResourceDefinitionInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatus">TrustedAdvisorIntegrationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinition">WorkloadResourceDefinition</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TrustedAdvisorIntegrationStatusInput`<sup>Optional</sup> <a name="TrustedAdvisorIntegrationStatusInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatusInput"></a>

```csharp
public string TrustedAdvisorIntegrationStatusInput { get; }
```

- *Type:* string

---

##### `WorkloadResourceDefinitionInput`<sup>Optional</sup> <a name="WorkloadResourceDefinitionInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinitionInput"></a>

```csharp
public string[] WorkloadResourceDefinitionInput { get; }
```

- *Type:* string[]

---

##### `TrustedAdvisorIntegrationStatus`<sup>Required</sup> <a name="TrustedAdvisorIntegrationStatus" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.trustedAdvisorIntegrationStatus"></a>

```csharp
public string TrustedAdvisorIntegrationStatus { get; }
```

- *Type:* string

---

##### `WorkloadResourceDefinition`<sup>Required</sup> <a name="WorkloadResourceDefinition" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.workloadResourceDefinition"></a>

```csharp
public string[] WorkloadResourceDefinition { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WellarchitectedWorkloadDiscoveryConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadDiscoveryConfig">WellarchitectedWorkloadDiscoveryConfig</a>

---


### WellarchitectedWorkloadTagsList <a name="WellarchitectedWorkloadTagsList" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WellarchitectedWorkloadTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.get"></a>

```csharp
private WellarchitectedWorkloadTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsList.property.internalValue"></a>

```csharp
public IResolvable|WellarchitectedWorkloadTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>[]

---


### WellarchitectedWorkloadTagsOutputReference <a name="WellarchitectedWorkloadTagsOutputReference" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new WellarchitectedWorkloadTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WellarchitectedWorkloadTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.wellarchitectedWorkload.WellarchitectedWorkloadTags">WellarchitectedWorkloadTags</a>

---



