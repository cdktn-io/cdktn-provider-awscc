# `ssmAssociation` Submodule <a name="`ssmAssociation` Submodule" id="@cdktn/provider-awscc.ssmAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmAssociation <a name="SsmAssociation" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association awscc_ssm_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmAssociation(Construct Scope, string Id, SsmAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig">SsmAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig">SsmAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putOutputLocation">PutOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetApplyOnlyAtCronInterval">ResetApplyOnlyAtCronInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetAssociationDispatchAssumeRole">ResetAssociationDispatchAssumeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetAssociationName">ResetAssociationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetAutomationTargetParameterName">ResetAutomationTargetParameterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetCalendarNames">ResetCalendarNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetComplianceSeverity">ResetComplianceSeverity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetDocumentVersion">ResetDocumentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetMaxConcurrency">ResetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetMaxErrors">ResetMaxErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetOutputLocation">ResetOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetScheduleOffset">ResetScheduleOffset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetSyncCompliance">ResetSyncCompliance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetTargets">ResetTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetWaitForSuccessTimeoutSeconds">ResetWaitForSuccessTimeoutSeconds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOutputLocation` <a name="PutOutputLocation" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putOutputLocation"></a>

```csharp
private void PutOutputLocation(SsmAssociationOutputLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putOutputLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putTags"></a>

```csharp
private void PutTags(IResolvable|SsmAssociationTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>[]

---

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putTargets"></a>

```csharp
private void PutTargets(IResolvable|SsmAssociationTargets[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.putTargets.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>[]

---

##### `ResetApplyOnlyAtCronInterval` <a name="ResetApplyOnlyAtCronInterval" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetApplyOnlyAtCronInterval"></a>

```csharp
private void ResetApplyOnlyAtCronInterval()
```

##### `ResetAssociationDispatchAssumeRole` <a name="ResetAssociationDispatchAssumeRole" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetAssociationDispatchAssumeRole"></a>

```csharp
private void ResetAssociationDispatchAssumeRole()
```

##### `ResetAssociationName` <a name="ResetAssociationName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetAssociationName"></a>

```csharp
private void ResetAssociationName()
```

##### `ResetAutomationTargetParameterName` <a name="ResetAutomationTargetParameterName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetAutomationTargetParameterName"></a>

```csharp
private void ResetAutomationTargetParameterName()
```

##### `ResetCalendarNames` <a name="ResetCalendarNames" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetCalendarNames"></a>

```csharp
private void ResetCalendarNames()
```

##### `ResetComplianceSeverity` <a name="ResetComplianceSeverity" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetComplianceSeverity"></a>

```csharp
private void ResetComplianceSeverity()
```

##### `ResetDocumentVersion` <a name="ResetDocumentVersion" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetDocumentVersion"></a>

```csharp
private void ResetDocumentVersion()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetInstanceId"></a>

```csharp
private void ResetInstanceId()
```

##### `ResetMaxConcurrency` <a name="ResetMaxConcurrency" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetMaxConcurrency"></a>

```csharp
private void ResetMaxConcurrency()
```

##### `ResetMaxErrors` <a name="ResetMaxErrors" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetMaxErrors"></a>

```csharp
private void ResetMaxErrors()
```

##### `ResetOutputLocation` <a name="ResetOutputLocation" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetOutputLocation"></a>

```csharp
private void ResetOutputLocation()
```

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetParameters"></a>

```csharp
private void ResetParameters()
```

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetScheduleExpression"></a>

```csharp
private void ResetScheduleExpression()
```

##### `ResetScheduleOffset` <a name="ResetScheduleOffset" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetScheduleOffset"></a>

```csharp
private void ResetScheduleOffset()
```

##### `ResetSyncCompliance` <a name="ResetSyncCompliance" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetSyncCompliance"></a>

```csharp
private void ResetSyncCompliance()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetTargets"></a>

```csharp
private void ResetTargets()
```

##### `ResetWaitForSuccessTimeoutSeconds` <a name="ResetWaitForSuccessTimeoutSeconds" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.resetWaitForSuccessTimeoutSeconds"></a>

```csharp
private void ResetWaitForSuccessTimeoutSeconds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

SsmAssociation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a SsmAssociation resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsmAssociation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsmAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the SsmAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationId">AssociationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.outputLocation">OutputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference">SsmAssociationOutputLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList">SsmAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList">SsmAssociationTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.applyOnlyAtCronIntervalInput">ApplyOnlyAtCronIntervalInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationDispatchAssumeRoleInput">AssociationDispatchAssumeRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationNameInput">AssociationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.automationTargetParameterNameInput">AutomationTargetParameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.calendarNamesInput">CalendarNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.complianceSeverityInput">ComplianceSeverityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.documentVersionInput">DocumentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxConcurrencyInput">MaxConcurrencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxErrorsInput">MaxErrorsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.outputLocationInput">OutputLocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.parametersInput">ParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleOffsetInput">ScheduleOffsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.syncComplianceInput">SyncComplianceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.targetsInput">TargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSecondsInput">WaitForSuccessTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.applyOnlyAtCronInterval">ApplyOnlyAtCronInterval</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationDispatchAssumeRole">AssociationDispatchAssumeRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationName">AssociationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.automationTargetParameterName">AutomationTargetParameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.calendarNames">CalendarNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.complianceSeverity">ComplianceSeverity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.documentVersion">DocumentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxConcurrency">MaxConcurrency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxErrors">MaxErrors</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.parameters">Parameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleOffset">ScheduleOffset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.syncCompliance">SyncCompliance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSeconds">WaitForSuccessTimeoutSeconds</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationId"></a>

```csharp
public string AssociationId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OutputLocation`<sup>Required</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.outputLocation"></a>

```csharp
public SsmAssociationOutputLocationOutputReference OutputLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference">SsmAssociationOutputLocationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.tags"></a>

```csharp
public SsmAssociationTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList">SsmAssociationTagsList</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.targets"></a>

```csharp
public SsmAssociationTargetsList Targets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList">SsmAssociationTargetsList</a>

---

##### `ApplyOnlyAtCronIntervalInput`<sup>Optional</sup> <a name="ApplyOnlyAtCronIntervalInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.applyOnlyAtCronIntervalInput"></a>

```csharp
public bool|IResolvable ApplyOnlyAtCronIntervalInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AssociationDispatchAssumeRoleInput`<sup>Optional</sup> <a name="AssociationDispatchAssumeRoleInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationDispatchAssumeRoleInput"></a>

```csharp
public string AssociationDispatchAssumeRoleInput { get; }
```

- *Type:* string

---

##### `AssociationNameInput`<sup>Optional</sup> <a name="AssociationNameInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationNameInput"></a>

```csharp
public string AssociationNameInput { get; }
```

- *Type:* string

---

##### `AutomationTargetParameterNameInput`<sup>Optional</sup> <a name="AutomationTargetParameterNameInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.automationTargetParameterNameInput"></a>

```csharp
public string AutomationTargetParameterNameInput { get; }
```

- *Type:* string

---

##### `CalendarNamesInput`<sup>Optional</sup> <a name="CalendarNamesInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.calendarNamesInput"></a>

```csharp
public string[] CalendarNamesInput { get; }
```

- *Type:* string[]

---

##### `ComplianceSeverityInput`<sup>Optional</sup> <a name="ComplianceSeverityInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.complianceSeverityInput"></a>

```csharp
public string ComplianceSeverityInput { get; }
```

- *Type:* string

---

##### `DocumentVersionInput`<sup>Optional</sup> <a name="DocumentVersionInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.documentVersionInput"></a>

```csharp
public string DocumentVersionInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `MaxConcurrencyInput`<sup>Optional</sup> <a name="MaxConcurrencyInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxConcurrencyInput"></a>

```csharp
public string MaxConcurrencyInput { get; }
```

- *Type:* string

---

##### `MaxErrorsInput`<sup>Optional</sup> <a name="MaxErrorsInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxErrorsInput"></a>

```csharp
public string MaxErrorsInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputLocationInput`<sup>Optional</sup> <a name="OutputLocationInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.outputLocationInput"></a>

```csharp
public IResolvable|SsmAssociationOutputLocation OutputLocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.parametersInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> ParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleExpressionInput"></a>

```csharp
public string ScheduleExpressionInput { get; }
```

- *Type:* string

---

##### `ScheduleOffsetInput`<sup>Optional</sup> <a name="ScheduleOffsetInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleOffsetInput"></a>

```csharp
public double ScheduleOffsetInput { get; }
```

- *Type:* double

---

##### `SyncComplianceInput`<sup>Optional</sup> <a name="SyncComplianceInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.syncComplianceInput"></a>

```csharp
public string SyncComplianceInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.tagsInput"></a>

```csharp
public IResolvable|SsmAssociationTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>[]

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.targetsInput"></a>

```csharp
public IResolvable|SsmAssociationTargets[] TargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>[]

---

##### `WaitForSuccessTimeoutSecondsInput`<sup>Optional</sup> <a name="WaitForSuccessTimeoutSecondsInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSecondsInput"></a>

```csharp
public double WaitForSuccessTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `ApplyOnlyAtCronInterval`<sup>Required</sup> <a name="ApplyOnlyAtCronInterval" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.applyOnlyAtCronInterval"></a>

```csharp
public bool|IResolvable ApplyOnlyAtCronInterval { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `AssociationDispatchAssumeRole`<sup>Required</sup> <a name="AssociationDispatchAssumeRole" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationDispatchAssumeRole"></a>

```csharp
public string AssociationDispatchAssumeRole { get; }
```

- *Type:* string

---

##### `AssociationName`<sup>Required</sup> <a name="AssociationName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.associationName"></a>

```csharp
public string AssociationName { get; }
```

- *Type:* string

---

##### `AutomationTargetParameterName`<sup>Required</sup> <a name="AutomationTargetParameterName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.automationTargetParameterName"></a>

```csharp
public string AutomationTargetParameterName { get; }
```

- *Type:* string

---

##### `CalendarNames`<sup>Required</sup> <a name="CalendarNames" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.calendarNames"></a>

```csharp
public string[] CalendarNames { get; }
```

- *Type:* string[]

---

##### `ComplianceSeverity`<sup>Required</sup> <a name="ComplianceSeverity" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.complianceSeverity"></a>

```csharp
public string ComplianceSeverity { get; }
```

- *Type:* string

---

##### `DocumentVersion`<sup>Required</sup> <a name="DocumentVersion" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.documentVersion"></a>

```csharp
public string DocumentVersion { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxConcurrency"></a>

```csharp
public string MaxConcurrency { get; }
```

- *Type:* string

---

##### `MaxErrors`<sup>Required</sup> <a name="MaxErrors" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.maxErrors"></a>

```csharp
public string MaxErrors { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.parameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> Parameters { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `ScheduleOffset`<sup>Required</sup> <a name="ScheduleOffset" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.scheduleOffset"></a>

```csharp
public double ScheduleOffset { get; }
```

- *Type:* double

---

##### `SyncCompliance`<sup>Required</sup> <a name="SyncCompliance" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.syncCompliance"></a>

```csharp
public string SyncCompliance { get; }
```

- *Type:* string

---

##### `WaitForSuccessTimeoutSeconds`<sup>Required</sup> <a name="WaitForSuccessTimeoutSeconds" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.waitForSuccessTimeoutSeconds"></a>

```csharp
public double WaitForSuccessTimeoutSeconds { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmAssociationConfig <a name="SsmAssociationConfig" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmAssociationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    bool|IResolvable ApplyOnlyAtCronInterval = null,
    string AssociationDispatchAssumeRole = null,
    string AssociationName = null,
    string AutomationTargetParameterName = null,
    string[] CalendarNames = null,
    string ComplianceSeverity = null,
    string DocumentVersion = null,
    string InstanceId = null,
    string MaxConcurrency = null,
    string MaxErrors = null,
    SsmAssociationOutputLocation OutputLocation = null,
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> Parameters = null,
    string ScheduleExpression = null,
    double ScheduleOffset = null,
    string SyncCompliance = null,
    IResolvable|SsmAssociationTags[] Tags = null,
    IResolvable|SsmAssociationTargets[] Targets = null,
    double WaitForSuccessTimeoutSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.name">Name</a></code> | <code>string</code> | The name of the SSM document. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.applyOnlyAtCronInterval">ApplyOnlyAtCronInterval</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.associationDispatchAssumeRole">AssociationDispatchAssumeRole</a></code> | <code>string</code> | A role used by association to take actions on your behalf. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.associationName">AssociationName</a></code> | <code>string</code> | The name of the association. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.automationTargetParameterName">AutomationTargetParameterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.calendarNames">CalendarNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#calendar_names SsmAssociation#calendar_names}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.complianceSeverity">ComplianceSeverity</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#compliance_severity SsmAssociation#compliance_severity}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.documentVersion">DocumentVersion</a></code> | <code>string</code> | The version of the SSM document to associate with the target. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | The ID of the instance that the SSM document is associated with. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.maxConcurrency">MaxConcurrency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_concurrency SsmAssociation#max_concurrency}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.maxErrors">MaxErrors</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_errors SsmAssociation#max_errors}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.outputLocation">OutputLocation</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_location SsmAssociation#output_location}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.parameters">Parameters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | Parameter values that the SSM document uses at runtime. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | A Cron or Rate expression that specifies when the association is applied to the target. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.scheduleOffset">ScheduleOffset</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#schedule_offset SsmAssociation#schedule_offset}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.syncCompliance">SyncCompliance</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#sync_compliance SsmAssociation#sync_compliance}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>[]</code> | A key-value pair to associate with a resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.targets">Targets</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>[]</code> | The targets that the SSM document sends commands to. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.waitForSuccessTimeoutSeconds">WaitForSuccessTimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the SSM document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#name SsmAssociation#name}

---

##### `ApplyOnlyAtCronInterval`<sup>Optional</sup> <a name="ApplyOnlyAtCronInterval" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.applyOnlyAtCronInterval"></a>

```csharp
public bool|IResolvable ApplyOnlyAtCronInterval { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#apply_only_at_cron_interval SsmAssociation#apply_only_at_cron_interval}.

---

##### `AssociationDispatchAssumeRole`<sup>Optional</sup> <a name="AssociationDispatchAssumeRole" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.associationDispatchAssumeRole"></a>

```csharp
public string AssociationDispatchAssumeRole { get; set; }
```

- *Type:* string

A role used by association to take actions on your behalf.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#association_dispatch_assume_role SsmAssociation#association_dispatch_assume_role}

---

##### `AssociationName`<sup>Optional</sup> <a name="AssociationName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.associationName"></a>

```csharp
public string AssociationName { get; set; }
```

- *Type:* string

The name of the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#association_name SsmAssociation#association_name}

---

##### `AutomationTargetParameterName`<sup>Optional</sup> <a name="AutomationTargetParameterName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.automationTargetParameterName"></a>

```csharp
public string AutomationTargetParameterName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#automation_target_parameter_name SsmAssociation#automation_target_parameter_name}.

---

##### `CalendarNames`<sup>Optional</sup> <a name="CalendarNames" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.calendarNames"></a>

```csharp
public string[] CalendarNames { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#calendar_names SsmAssociation#calendar_names}.

---

##### `ComplianceSeverity`<sup>Optional</sup> <a name="ComplianceSeverity" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.complianceSeverity"></a>

```csharp
public string ComplianceSeverity { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#compliance_severity SsmAssociation#compliance_severity}.

---

##### `DocumentVersion`<sup>Optional</sup> <a name="DocumentVersion" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.documentVersion"></a>

```csharp
public string DocumentVersion { get; set; }
```

- *Type:* string

The version of the SSM document to associate with the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#document_version SsmAssociation#document_version}

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

The ID of the instance that the SSM document is associated with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#instance_id SsmAssociation#instance_id}

---

##### `MaxConcurrency`<sup>Optional</sup> <a name="MaxConcurrency" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.maxConcurrency"></a>

```csharp
public string MaxConcurrency { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_concurrency SsmAssociation#max_concurrency}.

---

##### `MaxErrors`<sup>Optional</sup> <a name="MaxErrors" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.maxErrors"></a>

```csharp
public string MaxErrors { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#max_errors SsmAssociation#max_errors}.

---

##### `OutputLocation`<sup>Optional</sup> <a name="OutputLocation" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.outputLocation"></a>

```csharp
public SsmAssociationOutputLocation OutputLocation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_location SsmAssociation#output_location}.

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.parameters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> Parameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

Parameter values that the SSM document uses at runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#parameters SsmAssociation#parameters}

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; set; }
```

- *Type:* string

A Cron or Rate expression that specifies when the association is applied to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#schedule_expression SsmAssociation#schedule_expression}

---

##### `ScheduleOffset`<sup>Optional</sup> <a name="ScheduleOffset" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.scheduleOffset"></a>

```csharp
public double ScheduleOffset { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#schedule_offset SsmAssociation#schedule_offset}.

---

##### `SyncCompliance`<sup>Optional</sup> <a name="SyncCompliance" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.syncCompliance"></a>

```csharp
public string SyncCompliance { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#sync_compliance SsmAssociation#sync_compliance}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.tags"></a>

```csharp
public IResolvable|SsmAssociationTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>[]

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#tags SsmAssociation#tags}

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.targets"></a>

```csharp
public IResolvable|SsmAssociationTargets[] Targets { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>[]

The targets that the SSM document sends commands to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#targets SsmAssociation#targets}

---

##### `WaitForSuccessTimeoutSeconds`<sup>Optional</sup> <a name="WaitForSuccessTimeoutSeconds" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationConfig.property.waitForSuccessTimeoutSeconds"></a>

```csharp
public double WaitForSuccessTimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#wait_for_success_timeout_seconds SsmAssociation#wait_for_success_timeout_seconds}.

---

### SsmAssociationOutputLocation <a name="SsmAssociationOutputLocation" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmAssociationOutputLocation {
    SsmAssociationOutputLocationS3Location S3Location = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#s3_location SsmAssociation#s3_location}. |

---

##### `S3Location`<sup>Optional</sup> <a name="S3Location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation.property.s3Location"></a>

```csharp
public SsmAssociationOutputLocationS3Location S3Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#s3_location SsmAssociation#s3_location}.

---

### SsmAssociationOutputLocationS3Location <a name="SsmAssociationOutputLocationS3Location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmAssociationOutputLocationS3Location {
    string OutputS3BucketName = null,
    string OutputS3KeyPrefix = null,
    string OutputS3Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.property.outputS3BucketName">OutputS3BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_bucket_name SsmAssociation#output_s3_bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.property.outputS3KeyPrefix">OutputS3KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_key_prefix SsmAssociation#output_s3_key_prefix}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.property.outputS3Region">OutputS3Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_region SsmAssociation#output_s3_region}. |

---

##### `OutputS3BucketName`<sup>Optional</sup> <a name="OutputS3BucketName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.property.outputS3BucketName"></a>

```csharp
public string OutputS3BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_bucket_name SsmAssociation#output_s3_bucket_name}.

---

##### `OutputS3KeyPrefix`<sup>Optional</sup> <a name="OutputS3KeyPrefix" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.property.outputS3KeyPrefix"></a>

```csharp
public string OutputS3KeyPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_key_prefix SsmAssociation#output_s3_key_prefix}.

---

##### `OutputS3Region`<sup>Optional</sup> <a name="OutputS3Region" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location.property.outputS3Region"></a>

```csharp
public string OutputS3Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#output_s3_region SsmAssociation#output_s3_region}.

---

### SsmAssociationTags <a name="SsmAssociationTags" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmAssociationTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags.property.key">Key</a></code> | <code>string</code> | The name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags.property.value">Value</a></code> | <code>string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#key SsmAssociation#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#value SsmAssociation#value}

---

### SsmAssociationTargets <a name="SsmAssociationTargets" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmAssociationTargets {
    string Key = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#key SsmAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#values SsmAssociation#values}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#key SsmAssociation#key}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ssm_association#values SsmAssociation#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### SsmAssociationOutputLocationOutputReference <a name="SsmAssociationOutputLocationOutputReference" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmAssociationOutputLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.putS3Location">PutS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.resetS3Location">ResetS3Location</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Location` <a name="PutS3Location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.putS3Location"></a>

```csharp
private void PutS3Location(SsmAssociationOutputLocationS3Location Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.putS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a>

---

##### `ResetS3Location` <a name="ResetS3Location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.resetS3Location"></a>

```csharp
private void ResetS3Location()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3Location">S3Location</a></code> | <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference">SsmAssociationOutputLocationS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3LocationInput">S3LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Location`<sup>Required</sup> <a name="S3Location" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3Location"></a>

```csharp
public SsmAssociationOutputLocationS3LocationOutputReference S3Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference">SsmAssociationOutputLocationS3LocationOutputReference</a>

---

##### `S3LocationInput`<sup>Optional</sup> <a name="S3LocationInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.s3LocationInput"></a>

```csharp
public IResolvable|SsmAssociationOutputLocationS3Location S3LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmAssociationOutputLocation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocation">SsmAssociationOutputLocation</a>

---


### SsmAssociationOutputLocationS3LocationOutputReference <a name="SsmAssociationOutputLocationS3LocationOutputReference" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmAssociationOutputLocationS3LocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resetOutputS3BucketName">ResetOutputS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resetOutputS3KeyPrefix">ResetOutputS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resetOutputS3Region">ResetOutputS3Region</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOutputS3BucketName` <a name="ResetOutputS3BucketName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resetOutputS3BucketName"></a>

```csharp
private void ResetOutputS3BucketName()
```

##### `ResetOutputS3KeyPrefix` <a name="ResetOutputS3KeyPrefix" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resetOutputS3KeyPrefix"></a>

```csharp
private void ResetOutputS3KeyPrefix()
```

##### `ResetOutputS3Region` <a name="ResetOutputS3Region" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.resetOutputS3Region"></a>

```csharp
private void ResetOutputS3Region()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3BucketNameInput">OutputS3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3KeyPrefixInput">OutputS3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3RegionInput">OutputS3RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3BucketName">OutputS3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3KeyPrefix">OutputS3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3Region">OutputS3Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputS3BucketNameInput`<sup>Optional</sup> <a name="OutputS3BucketNameInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3BucketNameInput"></a>

```csharp
public string OutputS3BucketNameInput { get; }
```

- *Type:* string

---

##### `OutputS3KeyPrefixInput`<sup>Optional</sup> <a name="OutputS3KeyPrefixInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3KeyPrefixInput"></a>

```csharp
public string OutputS3KeyPrefixInput { get; }
```

- *Type:* string

---

##### `OutputS3RegionInput`<sup>Optional</sup> <a name="OutputS3RegionInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3RegionInput"></a>

```csharp
public string OutputS3RegionInput { get; }
```

- *Type:* string

---

##### `OutputS3BucketName`<sup>Required</sup> <a name="OutputS3BucketName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3BucketName"></a>

```csharp
public string OutputS3BucketName { get; }
```

- *Type:* string

---

##### `OutputS3KeyPrefix`<sup>Required</sup> <a name="OutputS3KeyPrefix" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3KeyPrefix"></a>

```csharp
public string OutputS3KeyPrefix { get; }
```

- *Type:* string

---

##### `OutputS3Region`<sup>Required</sup> <a name="OutputS3Region" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.outputS3Region"></a>

```csharp
public string OutputS3Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3LocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmAssociationOutputLocationS3Location InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationOutputLocationS3Location">SsmAssociationOutputLocationS3Location</a>

---


### SsmAssociationTagsList <a name="SsmAssociationTagsList" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmAssociationTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.get"></a>

```csharp
private SsmAssociationTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsList.property.internalValue"></a>

```csharp
public IResolvable|SsmAssociationTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>[]

---


### SsmAssociationTagsOutputReference <a name="SsmAssociationTagsOutputReference" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmAssociationTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmAssociationTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTags">SsmAssociationTags</a>

---


### SsmAssociationTargetsList <a name="SsmAssociationTargetsList" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmAssociationTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.get"></a>

```csharp
private SsmAssociationTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsList.property.internalValue"></a>

```csharp
public IResolvable|SsmAssociationTargets[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>[]

---


### SsmAssociationTargetsOutputReference <a name="SsmAssociationTargetsOutputReference" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new SsmAssociationTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|SsmAssociationTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ssmAssociation.SsmAssociationTargets">SsmAssociationTargets</a>

---



