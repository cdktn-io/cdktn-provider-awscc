# `ssmPatchBaseline` Submodule <a name="`ssmPatchBaseline` Submodule" id="@cdktn/provider-awscc.ssmPatchBaseline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmPatchBaseline <a name="SsmPatchBaseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline awscc_ssm_patch_baseline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaseline(Construct Scope, string Id, SsmPatchBaselineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig">SsmPatchBaselineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig">SsmPatchBaselineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putApprovalRules">PutApprovalRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilters">PutGlobalFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putSources">PutSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovalRules">ResetApprovalRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatches">ResetApprovedPatches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesComplianceLevel">ResetApprovedPatchesComplianceLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesEnableNonSecurity">ResetApprovedPatchesEnableNonSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetAvailableSecurityUpdatesComplianceStatus">ResetAvailableSecurityUpdatesComplianceStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDefaultBaseline">ResetDefaultBaseline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetGlobalFilters">ResetGlobalFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOperatingSystem">ResetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetPatchGroups">ResetPatchGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatches">ResetRejectedPatches</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatchesAction">ResetRejectedPatchesAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetSources">ResetSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutApprovalRules` <a name="PutApprovalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putApprovalRules"></a>

```csharp
private void PutApprovalRules(SsmPatchBaselineApprovalRules Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putApprovalRules.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

---

##### `PutGlobalFilters` <a name="PutGlobalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilters"></a>

```csharp
private void PutGlobalFilters(SsmPatchBaselineGlobalFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putGlobalFilters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

---

##### `PutSources` <a name="PutSources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putSources"></a>

```csharp
private void PutSources(IResolvable|SsmPatchBaselineSources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putSources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putTags"></a>

```csharp
private void PutTags(IResolvable|SsmPatchBaselineTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>[]

---

##### `ResetApprovalRules` <a name="ResetApprovalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovalRules"></a>

```csharp
private void ResetApprovalRules()
```

##### `ResetApprovedPatches` <a name="ResetApprovedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatches"></a>

```csharp
private void ResetApprovedPatches()
```

##### `ResetApprovedPatchesComplianceLevel` <a name="ResetApprovedPatchesComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesComplianceLevel"></a>

```csharp
private void ResetApprovedPatchesComplianceLevel()
```

##### `ResetApprovedPatchesEnableNonSecurity` <a name="ResetApprovedPatchesEnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetApprovedPatchesEnableNonSecurity"></a>

```csharp
private void ResetApprovedPatchesEnableNonSecurity()
```

##### `ResetAvailableSecurityUpdatesComplianceStatus` <a name="ResetAvailableSecurityUpdatesComplianceStatus" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetAvailableSecurityUpdatesComplianceStatus"></a>

```csharp
private void ResetAvailableSecurityUpdatesComplianceStatus()
```

##### `ResetDefaultBaseline` <a name="ResetDefaultBaseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDefaultBaseline"></a>

```csharp
private void ResetDefaultBaseline()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetGlobalFilters` <a name="ResetGlobalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetGlobalFilters"></a>

```csharp
private void ResetGlobalFilters()
```

##### `ResetOperatingSystem` <a name="ResetOperatingSystem" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetOperatingSystem"></a>

```csharp
private void ResetOperatingSystem()
```

##### `ResetPatchGroups` <a name="ResetPatchGroups" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetPatchGroups"></a>

```csharp
private void ResetPatchGroups()
```

##### `ResetRejectedPatches` <a name="ResetRejectedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatches"></a>

```csharp
private void ResetRejectedPatches()
```

##### `ResetRejectedPatchesAction` <a name="ResetRejectedPatchesAction" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetRejectedPatchesAction"></a>

```csharp
private void ResetRejectedPatchesAction()
```

##### `ResetSources` <a name="ResetSources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetSources"></a>

```csharp
private void ResetSources()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmPatchBaseline resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmPatchBaseline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmPatchBaseline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmPatchBaseline.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmPatchBaseline.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsmPatchBaseline resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmPatchBaseline to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmPatchBaseline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsmPatchBaseline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRules">ApprovalRules</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference">SsmPatchBaselineApprovalRulesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFilters">GlobalFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference">SsmPatchBaselineGlobalFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchBaselineId">PatchBaselineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sources">Sources</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList">SsmPatchBaselineSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList">SsmPatchBaselineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRulesInput">ApprovalRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevelInput">ApprovedPatchesComplianceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurityInput">ApprovedPatchesEnableNonSecurityInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesInput">ApprovedPatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatusInput">AvailableSecurityUpdatesComplianceStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaselineInput">DefaultBaselineInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFiltersInput">GlobalFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystemInput">OperatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroupsInput">PatchGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesActionInput">RejectedPatchesActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesInput">RejectedPatchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sourcesInput">SourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatches">ApprovedPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevel">ApprovedPatchesComplianceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurity">ApprovedPatchesEnableNonSecurity</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatus">AvailableSecurityUpdatesComplianceStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaseline">DefaultBaseline</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroups">PatchGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatches">RejectedPatches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesAction">RejectedPatchesAction</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ApprovalRules`<sup>Required</sup> <a name="ApprovalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRules"></a>

```csharp
public SsmPatchBaselineApprovalRulesOutputReference ApprovalRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference">SsmPatchBaselineApprovalRulesOutputReference</a>

---

##### `GlobalFilters`<sup>Required</sup> <a name="GlobalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFilters"></a>

```csharp
public SsmPatchBaselineGlobalFiltersOutputReference GlobalFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference">SsmPatchBaselineGlobalFiltersOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PatchBaselineId`<sup>Required</sup> <a name="PatchBaselineId" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchBaselineId"></a>

```csharp
public string PatchBaselineId { get; }
```

- *Type:* string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sources"></a>

```csharp
public SsmPatchBaselineSourcesList Sources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList">SsmPatchBaselineSourcesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tags"></a>

```csharp
public SsmPatchBaselineTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList">SsmPatchBaselineTagsList</a>

---

##### `ApprovalRulesInput`<sup>Optional</sup> <a name="ApprovalRulesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvalRulesInput"></a>

```csharp
public IResolvable|SsmPatchBaselineApprovalRules ApprovalRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

---

##### `ApprovedPatchesComplianceLevelInput`<sup>Optional</sup> <a name="ApprovedPatchesComplianceLevelInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevelInput"></a>

```csharp
public string ApprovedPatchesComplianceLevelInput { get; }
```

- *Type:* string

---

##### `ApprovedPatchesEnableNonSecurityInput`<sup>Optional</sup> <a name="ApprovedPatchesEnableNonSecurityInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurityInput"></a>

```csharp
public bool|IResolvable ApprovedPatchesEnableNonSecurityInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ApprovedPatchesInput`<sup>Optional</sup> <a name="ApprovedPatchesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesInput"></a>

```csharp
public string[] ApprovedPatchesInput { get; }
```

- *Type:* string[]

---

##### `AvailableSecurityUpdatesComplianceStatusInput`<sup>Optional</sup> <a name="AvailableSecurityUpdatesComplianceStatusInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatusInput"></a>

```csharp
public string AvailableSecurityUpdatesComplianceStatusInput { get; }
```

- *Type:* string

---

##### `DefaultBaselineInput`<sup>Optional</sup> <a name="DefaultBaselineInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaselineInput"></a>

```csharp
public bool|IResolvable DefaultBaselineInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `GlobalFiltersInput`<sup>Optional</sup> <a name="GlobalFiltersInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.globalFiltersInput"></a>

```csharp
public IResolvable|SsmPatchBaselineGlobalFilters GlobalFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OperatingSystemInput`<sup>Optional</sup> <a name="OperatingSystemInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystemInput"></a>

```csharp
public string OperatingSystemInput { get; }
```

- *Type:* string

---

##### `PatchGroupsInput`<sup>Optional</sup> <a name="PatchGroupsInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroupsInput"></a>

```csharp
public string[] PatchGroupsInput { get; }
```

- *Type:* string[]

---

##### `RejectedPatchesActionInput`<sup>Optional</sup> <a name="RejectedPatchesActionInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesActionInput"></a>

```csharp
public string RejectedPatchesActionInput { get; }
```

- *Type:* string

---

##### `RejectedPatchesInput`<sup>Optional</sup> <a name="RejectedPatchesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesInput"></a>

```csharp
public string[] RejectedPatchesInput { get; }
```

- *Type:* string[]

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.sourcesInput"></a>

```csharp
public IResolvable|SsmPatchBaselineSources[] SourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tagsInput"></a>

```csharp
public IResolvable|SsmPatchBaselineTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>[]

---

##### `ApprovedPatches`<sup>Required</sup> <a name="ApprovedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatches"></a>

```csharp
public string[] ApprovedPatches { get; }
```

- *Type:* string[]

---

##### `ApprovedPatchesComplianceLevel`<sup>Required</sup> <a name="ApprovedPatchesComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesComplianceLevel"></a>

```csharp
public string ApprovedPatchesComplianceLevel { get; }
```

- *Type:* string

---

##### `ApprovedPatchesEnableNonSecurity`<sup>Required</sup> <a name="ApprovedPatchesEnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.approvedPatchesEnableNonSecurity"></a>

```csharp
public bool|IResolvable ApprovedPatchesEnableNonSecurity { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AvailableSecurityUpdatesComplianceStatus`<sup>Required</sup> <a name="AvailableSecurityUpdatesComplianceStatus" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.availableSecurityUpdatesComplianceStatus"></a>

```csharp
public string AvailableSecurityUpdatesComplianceStatus { get; }
```

- *Type:* string

---

##### `DefaultBaseline`<sup>Required</sup> <a name="DefaultBaseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.defaultBaseline"></a>

```csharp
public bool|IResolvable DefaultBaseline { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OperatingSystem`<sup>Required</sup> <a name="OperatingSystem" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; }
```

- *Type:* string

---

##### `PatchGroups`<sup>Required</sup> <a name="PatchGroups" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.patchGroups"></a>

```csharp
public string[] PatchGroups { get; }
```

- *Type:* string[]

---

##### `RejectedPatches`<sup>Required</sup> <a name="RejectedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatches"></a>

```csharp
public string[] RejectedPatches { get; }
```

- *Type:* string[]

---

##### `RejectedPatchesAction`<sup>Required</sup> <a name="RejectedPatchesAction" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.rejectedPatchesAction"></a>

```csharp
public string RejectedPatchesAction { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaseline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmPatchBaselineApprovalRules <a name="SsmPatchBaselineApprovalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineApprovalRules {
    IResolvable|SsmPatchBaselineApprovalRulesPatchRules[] PatchRules = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules.property.patchRules">PatchRules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#patch_rules SsmPatchBaseline#patch_rules}. |

---

##### `PatchRules`<sup>Optional</sup> <a name="PatchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules.property.patchRules"></a>

```csharp
public IResolvable|SsmPatchBaselineApprovalRulesPatchRules[] PatchRules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#patch_rules SsmPatchBaseline#patch_rules}.

---

### SsmPatchBaselineApprovalRulesPatchRules <a name="SsmPatchBaselineApprovalRulesPatchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineApprovalRulesPatchRules {
    double ApproveAfterDays = null,
    string ApproveUntilDate = null,
    string ComplianceLevel = null,
    bool|IResolvable EnableNonSecurity = null,
    SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup PatchFilterGroup = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveAfterDays">ApproveAfterDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveUntilDate">ApproveUntilDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.complianceLevel">ComplianceLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.enableNonSecurity">EnableNonSecurity</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.patchFilterGroup">PatchFilterGroup</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a></code> | The patch filter group that defines the criteria for the rule. |

---

##### `ApproveAfterDays`<sup>Optional</sup> <a name="ApproveAfterDays" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveAfterDays"></a>

```csharp
public double ApproveAfterDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#approve_after_days SsmPatchBaseline#approve_after_days}.

---

##### `ApproveUntilDate`<sup>Optional</sup> <a name="ApproveUntilDate" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.approveUntilDate"></a>

```csharp
public string ApproveUntilDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#approve_until_date SsmPatchBaseline#approve_until_date}.

---

##### `ComplianceLevel`<sup>Optional</sup> <a name="ComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.complianceLevel"></a>

```csharp
public string ComplianceLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#compliance_level SsmPatchBaseline#compliance_level}.

---

##### `EnableNonSecurity`<sup>Optional</sup> <a name="EnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.enableNonSecurity"></a>

```csharp
public bool|IResolvable EnableNonSecurity { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#enable_non_security SsmPatchBaseline#enable_non_security}.

---

##### `PatchFilterGroup`<sup>Optional</sup> <a name="PatchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules.property.patchFilterGroup"></a>

```csharp
public SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup PatchFilterGroup { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a>

The patch filter group that defines the criteria for the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#patch_filter_group SsmPatchBaseline#patch_filter_group}

---

### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup {
    IResolvable|SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters[] PatchFilters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup.property.patchFilters">PatchFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}. |

---

##### `PatchFilters`<sup>Optional</sup> <a name="PatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup.property.patchFilters"></a>

```csharp
public IResolvable|SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters[] PatchFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}.

---

### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters {
    string Key = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}.

---

### SsmPatchBaselineConfig <a name="SsmPatchBaselineConfig" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    SsmPatchBaselineApprovalRules ApprovalRules = null,
    string[] ApprovedPatches = null,
    string ApprovedPatchesComplianceLevel = null,
    bool|IResolvable ApprovedPatchesEnableNonSecurity = null,
    string AvailableSecurityUpdatesComplianceStatus = null,
    bool|IResolvable DefaultBaseline = null,
    string Description = null,
    SsmPatchBaselineGlobalFilters GlobalFilters = null,
    string OperatingSystem = null,
    string[] PatchGroups = null,
    string[] RejectedPatches = null,
    string RejectedPatchesAction = null,
    IResolvable|SsmPatchBaselineSources[] Sources = null,
    IResolvable|SsmPatchBaselineTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.name">Name</a></code> | <code>string</code> | The name of the patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvalRules">ApprovalRules</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a></code> | A set of rules defining the approval rules for a patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatches">ApprovedPatches</a></code> | <code>string[]</code> | A list of explicitly approved patches for the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesComplianceLevel">ApprovedPatchesComplianceLevel</a></code> | <code>string</code> | Defines the compliance level for approved patches. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesEnableNonSecurity">ApprovedPatchesEnableNonSecurity</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.availableSecurityUpdatesComplianceStatus">AvailableSecurityUpdatesComplianceStatus</a></code> | <code>string</code> | The compliance status for vendor recommended security updates that are not approved by this patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.defaultBaseline">DefaultBaseline</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set the baseline as default baseline. Only registering to default patch baseline is allowed. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.description">Description</a></code> | <code>string</code> | The description of the patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.globalFilters">GlobalFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a></code> | A set of global filters used to include patches in the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.operatingSystem">OperatingSystem</a></code> | <code>string</code> | Defines the operating system the patch baseline applies to. The Default value is WINDOWS. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.patchGroups">PatchGroups</a></code> | <code>string[]</code> | PatchGroups is used to associate instances with a specific patch baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatches">RejectedPatches</a></code> | <code>string[]</code> | A list of explicitly rejected patches for the baseline. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatchesAction">RejectedPatchesAction</a></code> | <code>string</code> | The action for Patch Manager to take on patches included in the RejectedPackages list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.sources">Sources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>[]</code> | Information about the patches to use to update the instances, including target operating systems and source repository. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>[]</code> | Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}

---

##### `ApprovalRules`<sup>Optional</sup> <a name="ApprovalRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvalRules"></a>

```csharp
public SsmPatchBaselineApprovalRules ApprovalRules { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

A set of rules defining the approval rules for a patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#approval_rules SsmPatchBaseline#approval_rules}

---

##### `ApprovedPatches`<sup>Optional</sup> <a name="ApprovedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatches"></a>

```csharp
public string[] ApprovedPatches { get; set; }
```

- *Type:* string[]

A list of explicitly approved patches for the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#approved_patches SsmPatchBaseline#approved_patches}

---

##### `ApprovedPatchesComplianceLevel`<sup>Optional</sup> <a name="ApprovedPatchesComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesComplianceLevel"></a>

```csharp
public string ApprovedPatchesComplianceLevel { get; set; }
```

- *Type:* string

Defines the compliance level for approved patches.

This means that if an approved patch is reported as missing, this is the severity of the compliance violation. The default value is UNSPECIFIED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#approved_patches_compliance_level SsmPatchBaseline#approved_patches_compliance_level}

---

##### `ApprovedPatchesEnableNonSecurity`<sup>Optional</sup> <a name="ApprovedPatchesEnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.approvedPatchesEnableNonSecurity"></a>

```csharp
public bool|IResolvable ApprovedPatchesEnableNonSecurity { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates whether the list of approved patches includes non-security updates that should be applied to the instances.

The default value is 'false'. Applies to Linux instances only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#approved_patches_enable_non_security SsmPatchBaseline#approved_patches_enable_non_security}

---

##### `AvailableSecurityUpdatesComplianceStatus`<sup>Optional</sup> <a name="AvailableSecurityUpdatesComplianceStatus" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.availableSecurityUpdatesComplianceStatus"></a>

```csharp
public string AvailableSecurityUpdatesComplianceStatus { get; set; }
```

- *Type:* string

The compliance status for vendor recommended security updates that are not approved by this patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#available_security_updates_compliance_status SsmPatchBaseline#available_security_updates_compliance_status}

---

##### `DefaultBaseline`<sup>Optional</sup> <a name="DefaultBaseline" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.defaultBaseline"></a>

```csharp
public bool|IResolvable DefaultBaseline { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set the baseline as default baseline. Only registering to default patch baseline is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#default_baseline SsmPatchBaseline#default_baseline}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#description SsmPatchBaseline#description}

---

##### `GlobalFilters`<sup>Optional</sup> <a name="GlobalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.globalFilters"></a>

```csharp
public SsmPatchBaselineGlobalFilters GlobalFilters { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

A set of global filters used to include patches in the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#global_filters SsmPatchBaseline#global_filters}

---

##### `OperatingSystem`<sup>Optional</sup> <a name="OperatingSystem" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.operatingSystem"></a>

```csharp
public string OperatingSystem { get; set; }
```

- *Type:* string

Defines the operating system the patch baseline applies to. The Default value is WINDOWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#operating_system SsmPatchBaseline#operating_system}

---

##### `PatchGroups`<sup>Optional</sup> <a name="PatchGroups" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.patchGroups"></a>

```csharp
public string[] PatchGroups { get; set; }
```

- *Type:* string[]

PatchGroups is used to associate instances with a specific patch baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#patch_groups SsmPatchBaseline#patch_groups}

---

##### `RejectedPatches`<sup>Optional</sup> <a name="RejectedPatches" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatches"></a>

```csharp
public string[] RejectedPatches { get; set; }
```

- *Type:* string[]

A list of explicitly rejected patches for the baseline.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#rejected_patches SsmPatchBaseline#rejected_patches}

---

##### `RejectedPatchesAction`<sup>Optional</sup> <a name="RejectedPatchesAction" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.rejectedPatchesAction"></a>

```csharp
public string RejectedPatchesAction { get; set; }
```

- *Type:* string

The action for Patch Manager to take on patches included in the RejectedPackages list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#rejected_patches_action SsmPatchBaseline#rejected_patches_action}

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.sources"></a>

```csharp
public IResolvable|SsmPatchBaselineSources[] Sources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>[]

Information about the patches to use to update the instances, including target operating systems and source repository.

Applies to Linux instances only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#sources SsmPatchBaseline#sources}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineConfig.property.tags"></a>

```csharp
public IResolvable|SsmPatchBaselineTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>[]

Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#tags SsmPatchBaseline#tags}

---

### SsmPatchBaselineGlobalFilters <a name="SsmPatchBaselineGlobalFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineGlobalFilters {
    IResolvable|SsmPatchBaselineGlobalFiltersPatchFilters[] PatchFilters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters.property.patchFilters">PatchFilters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}. |

---

##### `PatchFilters`<sup>Optional</sup> <a name="PatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters.property.patchFilters"></a>

```csharp
public IResolvable|SsmPatchBaselineGlobalFiltersPatchFilters[] PatchFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#patch_filters SsmPatchBaseline#patch_filters}.

---

### SsmPatchBaselineGlobalFiltersPatchFilters <a name="SsmPatchBaselineGlobalFiltersPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineGlobalFiltersPatchFilters {
    string Key = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#values SsmPatchBaseline#values}.

---

### SsmPatchBaselineSources <a name="SsmPatchBaselineSources" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineSources {
    string Configuration = null,
    string Name = null,
    string[] Products = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.configuration">Configuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.products">Products</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#products SsmPatchBaseline#products}. |

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.configuration"></a>

```csharp
public string Configuration { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#configuration SsmPatchBaseline#configuration}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#name SsmPatchBaseline#name}.

---

##### `Products`<sup>Optional</sup> <a name="Products" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources.property.products"></a>

```csharp
public string[] Products { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#products SsmPatchBaseline#products}.

---

### SsmPatchBaselineTags <a name="SsmPatchBaselineTags" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#value SsmPatchBaseline#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#key SsmPatchBaseline#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_patch_baseline#value SsmPatchBaseline#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmPatchBaselineApprovalRulesOutputReference <a name="SsmPatchBaselineApprovalRulesOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineApprovalRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.putPatchRules">PutPatchRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resetPatchRules">ResetPatchRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPatchRules` <a name="PutPatchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.putPatchRules"></a>

```csharp
private void PutPatchRules(IResolvable|SsmPatchBaselineApprovalRulesPatchRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.putPatchRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>[]

---

##### `ResetPatchRules` <a name="ResetPatchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.resetPatchRules"></a>

```csharp
private void ResetPatchRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRules">PatchRules</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList">SsmPatchBaselineApprovalRulesPatchRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRulesInput">PatchRulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PatchRules`<sup>Required</sup> <a name="PatchRules" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRules"></a>

```csharp
public SsmPatchBaselineApprovalRulesPatchRulesList PatchRules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList">SsmPatchBaselineApprovalRulesPatchRulesList</a>

---

##### `PatchRulesInput`<sup>Optional</sup> <a name="PatchRulesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.patchRulesInput"></a>

```csharp
public IResolvable|SsmPatchBaselineApprovalRulesPatchRules[] PatchRulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmPatchBaselineApprovalRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRules">SsmPatchBaselineApprovalRules</a>

---


### SsmPatchBaselineApprovalRulesPatchRulesList <a name="SsmPatchBaselineApprovalRulesPatchRulesList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineApprovalRulesPatchRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.get"></a>

```csharp
private SsmPatchBaselineApprovalRulesPatchRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesList.property.internalValue"></a>

```csharp
public IResolvable|SsmPatchBaselineApprovalRulesPatchRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>[]

---


### SsmPatchBaselineApprovalRulesPatchRulesOutputReference <a name="SsmPatchBaselineApprovalRulesPatchRulesOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineApprovalRulesPatchRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.putPatchFilterGroup">PutPatchFilterGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveAfterDays">ResetApproveAfterDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveUntilDate">ResetApproveUntilDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetComplianceLevel">ResetComplianceLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetEnableNonSecurity">ResetEnableNonSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetPatchFilterGroup">ResetPatchFilterGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPatchFilterGroup` <a name="PutPatchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.putPatchFilterGroup"></a>

```csharp
private void PutPatchFilterGroup(SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.putPatchFilterGroup.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a>

---

##### `ResetApproveAfterDays` <a name="ResetApproveAfterDays" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveAfterDays"></a>

```csharp
private void ResetApproveAfterDays()
```

##### `ResetApproveUntilDate` <a name="ResetApproveUntilDate" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetApproveUntilDate"></a>

```csharp
private void ResetApproveUntilDate()
```

##### `ResetComplianceLevel` <a name="ResetComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetComplianceLevel"></a>

```csharp
private void ResetComplianceLevel()
```

##### `ResetEnableNonSecurity` <a name="ResetEnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetEnableNonSecurity"></a>

```csharp
private void ResetEnableNonSecurity()
```

##### `ResetPatchFilterGroup` <a name="ResetPatchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.resetPatchFilterGroup"></a>

```csharp
private void ResetPatchFilterGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroup">PatchFilterGroup</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDaysInput">ApproveAfterDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDateInput">ApproveUntilDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevelInput">ComplianceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurityInput">EnableNonSecurityInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroupInput">PatchFilterGroupInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDays">ApproveAfterDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDate">ApproveUntilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevel">ComplianceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurity">EnableNonSecurity</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PatchFilterGroup`<sup>Required</sup> <a name="PatchFilterGroup" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroup"></a>

```csharp
public SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference PatchFilterGroup { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference</a>

---

##### `ApproveAfterDaysInput`<sup>Optional</sup> <a name="ApproveAfterDaysInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDaysInput"></a>

```csharp
public double ApproveAfterDaysInput { get; }
```

- *Type:* double

---

##### `ApproveUntilDateInput`<sup>Optional</sup> <a name="ApproveUntilDateInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDateInput"></a>

```csharp
public string ApproveUntilDateInput { get; }
```

- *Type:* string

---

##### `ComplianceLevelInput`<sup>Optional</sup> <a name="ComplianceLevelInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevelInput"></a>

```csharp
public string ComplianceLevelInput { get; }
```

- *Type:* string

---

##### `EnableNonSecurityInput`<sup>Optional</sup> <a name="EnableNonSecurityInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurityInput"></a>

```csharp
public bool|IResolvable EnableNonSecurityInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PatchFilterGroupInput`<sup>Optional</sup> <a name="PatchFilterGroupInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.patchFilterGroupInput"></a>

```csharp
public IResolvable|SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup PatchFilterGroupInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a>

---

##### `ApproveAfterDays`<sup>Required</sup> <a name="ApproveAfterDays" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveAfterDays"></a>

```csharp
public double ApproveAfterDays { get; }
```

- *Type:* double

---

##### `ApproveUntilDate`<sup>Required</sup> <a name="ApproveUntilDate" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.approveUntilDate"></a>

```csharp
public string ApproveUntilDate { get; }
```

- *Type:* string

---

##### `ComplianceLevel`<sup>Required</sup> <a name="ComplianceLevel" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.complianceLevel"></a>

```csharp
public string ComplianceLevel { get; }
```

- *Type:* string

---

##### `EnableNonSecurity`<sup>Required</sup> <a name="EnableNonSecurity" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.enableNonSecurity"></a>

```csharp
public bool|IResolvable EnableNonSecurity { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmPatchBaselineApprovalRulesPatchRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRules">SsmPatchBaselineApprovalRulesPatchRules</a>

---


### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.putPatchFilters">PutPatchFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resetPatchFilters">ResetPatchFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPatchFilters` <a name="PutPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.putPatchFilters"></a>

```csharp
private void PutPatchFilters(IResolvable|SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.putPatchFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>[]

---

##### `ResetPatchFilters` <a name="ResetPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.resetPatchFilters"></a>

```csharp
private void ResetPatchFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFilters">PatchFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFiltersInput">PatchFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PatchFilters`<sup>Required</sup> <a name="PatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFilters"></a>

```csharp
public SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList PatchFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList</a>

---

##### `PatchFiltersInput`<sup>Optional</sup> <a name="PatchFiltersInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.patchFiltersInput"></a>

```csharp
public IResolvable|SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters[] PatchFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroup</a>

---


### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.get"></a>

```csharp
private SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersList.property.internalValue"></a>

```csharp
public IResolvable|SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>[]

---


### SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference <a name="SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters">SsmPatchBaselineApprovalRulesPatchRulesPatchFilterGroupPatchFilters</a>

---


### SsmPatchBaselineGlobalFiltersOutputReference <a name="SsmPatchBaselineGlobalFiltersOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineGlobalFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.putPatchFilters">PutPatchFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resetPatchFilters">ResetPatchFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPatchFilters` <a name="PutPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.putPatchFilters"></a>

```csharp
private void PutPatchFilters(IResolvable|SsmPatchBaselineGlobalFiltersPatchFilters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.putPatchFilters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>[]

---

##### `ResetPatchFilters` <a name="ResetPatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.resetPatchFilters"></a>

```csharp
private void ResetPatchFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFilters">PatchFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList">SsmPatchBaselineGlobalFiltersPatchFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFiltersInput">PatchFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PatchFilters`<sup>Required</sup> <a name="PatchFilters" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFilters"></a>

```csharp
public SsmPatchBaselineGlobalFiltersPatchFiltersList PatchFilters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList">SsmPatchBaselineGlobalFiltersPatchFiltersList</a>

---

##### `PatchFiltersInput`<sup>Optional</sup> <a name="PatchFiltersInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.patchFiltersInput"></a>

```csharp
public IResolvable|SsmPatchBaselineGlobalFiltersPatchFilters[] PatchFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmPatchBaselineGlobalFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFilters">SsmPatchBaselineGlobalFilters</a>

---


### SsmPatchBaselineGlobalFiltersPatchFiltersList <a name="SsmPatchBaselineGlobalFiltersPatchFiltersList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineGlobalFiltersPatchFiltersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.get"></a>

```csharp
private SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersList.property.internalValue"></a>

```csharp
public IResolvable|SsmPatchBaselineGlobalFiltersPatchFilters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>[]

---


### SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference <a name="SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFiltersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmPatchBaselineGlobalFiltersPatchFilters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineGlobalFiltersPatchFilters">SsmPatchBaselineGlobalFiltersPatchFilters</a>

---


### SsmPatchBaselineSourcesList <a name="SsmPatchBaselineSourcesList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.get"></a>

```csharp
private SsmPatchBaselineSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesList.property.internalValue"></a>

```csharp
public IResolvable|SsmPatchBaselineSources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>[]

---


### SsmPatchBaselineSourcesOutputReference <a name="SsmPatchBaselineSourcesOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetProducts">ResetProducts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProducts` <a name="ResetProducts" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.resetProducts"></a>

```csharp
private void ResetProducts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configurationInput">ConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.productsInput">ProductsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configuration">Configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.products">Products</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configurationInput"></a>

```csharp
public string ConfigurationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProductsInput`<sup>Optional</sup> <a name="ProductsInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.productsInput"></a>

```csharp
public string[] ProductsInput { get; }
```

- *Type:* string[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.configuration"></a>

```csharp
public string Configuration { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Products`<sup>Required</sup> <a name="Products" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.products"></a>

```csharp
public string[] Products { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmPatchBaselineSources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineSources">SsmPatchBaselineSources</a>

---


### SsmPatchBaselineTagsList <a name="SsmPatchBaselineTagsList" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.get"></a>

```csharp
private SsmPatchBaselineTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsList.property.internalValue"></a>

```csharp
public IResolvable|SsmPatchBaselineTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>[]

---


### SsmPatchBaselineTagsOutputReference <a name="SsmPatchBaselineTagsOutputReference" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmPatchBaselineTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmPatchBaselineTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmPatchBaseline.SsmPatchBaselineTags">SsmPatchBaselineTags</a>

---



