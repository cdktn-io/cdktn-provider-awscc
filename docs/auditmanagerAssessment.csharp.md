# `auditmanagerAssessment` Submodule <a name="`auditmanagerAssessment` Submodule" id="@cdktn/provider-awscc.auditmanagerAssessment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AuditmanagerAssessment <a name="AuditmanagerAssessment" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment awscc_auditmanager_assessment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessment(Construct Scope, string Id, AuditmanagerAssessmentConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig">AuditmanagerAssessmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig">AuditmanagerAssessmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination">PutAssessmentReportsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAwsAccount">PutAwsAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putDelegations">PutDelegations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putRoles">PutRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putScope">PutScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetAssessmentReportsDestination">ResetAssessmentReportsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetAwsAccount">ResetAwsAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetDelegations">ResetDelegations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetFrameworkId">ResetFrameworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetRoles">ResetRoles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssessmentReportsDestination` <a name="PutAssessmentReportsDestination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination"></a>

```csharp
private void PutAssessmentReportsDestination(AuditmanagerAssessmentAssessmentReportsDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAssessmentReportsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>

---

##### `PutAwsAccount` <a name="PutAwsAccount" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAwsAccount"></a>

```csharp
private void PutAwsAccount(AuditmanagerAssessmentAwsAccount Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putAwsAccount.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a>

---

##### `PutDelegations` <a name="PutDelegations" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putDelegations"></a>

```csharp
private void PutDelegations(IResolvable|AuditmanagerAssessmentDelegations[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putDelegations.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>[]

---

##### `PutRoles` <a name="PutRoles" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putRoles"></a>

```csharp
private void PutRoles(IResolvable|AuditmanagerAssessmentRoles[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putRoles.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>[]

---

##### `PutScope` <a name="PutScope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putScope"></a>

```csharp
private void PutScope(AuditmanagerAssessmentScope Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putTags"></a>

```csharp
private void PutTags(IResolvable|AuditmanagerAssessmentTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>[]

---

##### `ResetAssessmentReportsDestination` <a name="ResetAssessmentReportsDestination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetAssessmentReportsDestination"></a>

```csharp
private void ResetAssessmentReportsDestination()
```

##### `ResetAwsAccount` <a name="ResetAwsAccount" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetAwsAccount"></a>

```csharp
private void ResetAwsAccount()
```

##### `ResetDelegations` <a name="ResetDelegations" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetDelegations"></a>

```csharp
private void ResetDelegations()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFrameworkId` <a name="ResetFrameworkId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetFrameworkId"></a>

```csharp
private void ResetFrameworkId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRoles` <a name="ResetRoles" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetRoles"></a>

```csharp
private void ResetRoles()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a AuditmanagerAssessment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AuditmanagerAssessment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AuditmanagerAssessment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AuditmanagerAssessment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

AuditmanagerAssessment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a AuditmanagerAssessment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AuditmanagerAssessment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AuditmanagerAssessment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the AuditmanagerAssessment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentId">AssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestination">AssessmentReportsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference">AuditmanagerAssessmentAssessmentReportsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.awsAccount">AwsAccount</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference">AuditmanagerAssessmentAwsAccountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.creationTime">CreationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.delegations">Delegations</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList">AuditmanagerAssessmentDelegationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.roles">Roles</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList">AuditmanagerAssessmentRolesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference">AuditmanagerAssessmentScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList">AuditmanagerAssessmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestinationInput">AssessmentReportsDestinationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.awsAccountInput">AwsAccountInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.delegationsInput">DelegationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkIdInput">FrameworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.rolesInput">RolesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.scopeInput">ScopeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkId">FrameworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `AssessmentId`<sup>Required</sup> <a name="AssessmentId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentId"></a>

```csharp
public string AssessmentId { get; }
```

- *Type:* string

---

##### `AssessmentReportsDestination`<sup>Required</sup> <a name="AssessmentReportsDestination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestination"></a>

```csharp
public AuditmanagerAssessmentAssessmentReportsDestinationOutputReference AssessmentReportsDestination { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference">AuditmanagerAssessmentAssessmentReportsDestinationOutputReference</a>

---

##### `AwsAccount`<sup>Required</sup> <a name="AwsAccount" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.awsAccount"></a>

```csharp
public AuditmanagerAssessmentAwsAccountOutputReference AwsAccount { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference">AuditmanagerAssessmentAwsAccountOutputReference</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.creationTime"></a>

```csharp
public double CreationTime { get; }
```

- *Type:* double

---

##### `Delegations`<sup>Required</sup> <a name="Delegations" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.delegations"></a>

```csharp
public AuditmanagerAssessmentDelegationsList Delegations { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList">AuditmanagerAssessmentDelegationsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.roles"></a>

```csharp
public AuditmanagerAssessmentRolesList Roles { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList">AuditmanagerAssessmentRolesList</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.scope"></a>

```csharp
public AuditmanagerAssessmentScopeOutputReference Scope { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference">AuditmanagerAssessmentScopeOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.tags"></a>

```csharp
public AuditmanagerAssessmentTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList">AuditmanagerAssessmentTagsList</a>

---

##### `AssessmentReportsDestinationInput`<sup>Optional</sup> <a name="AssessmentReportsDestinationInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.assessmentReportsDestinationInput"></a>

```csharp
public IResolvable|AuditmanagerAssessmentAssessmentReportsDestination AssessmentReportsDestinationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>

---

##### `AwsAccountInput`<sup>Optional</sup> <a name="AwsAccountInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.awsAccountInput"></a>

```csharp
public IResolvable|AuditmanagerAssessmentAwsAccount AwsAccountInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a>

---

##### `DelegationsInput`<sup>Optional</sup> <a name="DelegationsInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.delegationsInput"></a>

```csharp
public IResolvable|AuditmanagerAssessmentDelegations[] DelegationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FrameworkIdInput`<sup>Optional</sup> <a name="FrameworkIdInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkIdInput"></a>

```csharp
public string FrameworkIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RolesInput`<sup>Optional</sup> <a name="RolesInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.rolesInput"></a>

```csharp
public IResolvable|AuditmanagerAssessmentRoles[] RolesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>[]

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.scopeInput"></a>

```csharp
public IResolvable|AuditmanagerAssessmentScope ScopeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.tagsInput"></a>

```csharp
public IResolvable|AuditmanagerAssessmentTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FrameworkId`<sup>Required</sup> <a name="FrameworkId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.frameworkId"></a>

```csharp
public string FrameworkId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AuditmanagerAssessmentAssessmentReportsDestination <a name="AuditmanagerAssessmentAssessmentReportsDestination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentAssessmentReportsDestination {
    string Destination = null,
    string DestinationType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destination">Destination</a></code> | <code>string</code> | The URL of the specified Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destinationType">DestinationType</a></code> | <code>string</code> | The destination type, such as Amazon S3. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

The URL of the specified Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#destination AuditmanagerAssessment#destination}

---

##### `DestinationType`<sup>Optional</sup> <a name="DestinationType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination.property.destinationType"></a>

```csharp
public string DestinationType { get; set; }
```

- *Type:* string

The destination type, such as Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#destination_type AuditmanagerAssessment#destination_type}

---

### AuditmanagerAssessmentAwsAccount <a name="AuditmanagerAssessmentAwsAccount" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentAwsAccount {
    string EmailAddress = null,
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.property.emailAddress">EmailAddress</a></code> | <code>string</code> | The unique identifier for the email account. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.property.id">Id</a></code> | <code>string</code> | The identifier for the specified AWS account. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.property.name">Name</a></code> | <code>string</code> | The name of the specified AWS account. |

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

The unique identifier for the email account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#email_address AuditmanagerAssessment#email_address}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The identifier for the specified AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#id AuditmanagerAssessment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the specified AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#name AuditmanagerAssessment#name}

---

### AuditmanagerAssessmentConfig <a name="AuditmanagerAssessmentConfig" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    AuditmanagerAssessmentAssessmentReportsDestination AssessmentReportsDestination = null,
    AuditmanagerAssessmentAwsAccount AwsAccount = null,
    IResolvable|AuditmanagerAssessmentDelegations[] Delegations = null,
    string Description = null,
    string FrameworkId = null,
    string Name = null,
    IResolvable|AuditmanagerAssessmentRoles[] Roles = null,
    AuditmanagerAssessmentScope Scope = null,
    string Status = null,
    IResolvable|AuditmanagerAssessmentTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.assessmentReportsDestination">AssessmentReportsDestination</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a></code> | The destination in which evidence reports are stored for the specified assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.awsAccount">AwsAccount</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a></code> | The AWS account associated with the assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.delegations">Delegations</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>[]</code> | The list of delegations. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.description">Description</a></code> | <code>string</code> | The description of the specified assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.frameworkId">FrameworkId</a></code> | <code>string</code> | The identifier for the specified framework. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.name">Name</a></code> | <code>string</code> | The name of the related assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.roles">Roles</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>[]</code> | The list of roles for the specified assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.scope">Scope</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a></code> | The wrapper that contains the AWS accounts and AWS services in scope for the assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.status">Status</a></code> | <code>string</code> | The status of the specified assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>[]</code> | The tags associated with the assessment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AssessmentReportsDestination`<sup>Optional</sup> <a name="AssessmentReportsDestination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.assessmentReportsDestination"></a>

```csharp
public AuditmanagerAssessmentAssessmentReportsDestination AssessmentReportsDestination { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>

The destination in which evidence reports are stored for the specified assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#assessment_reports_destination AuditmanagerAssessment#assessment_reports_destination}

---

##### `AwsAccount`<sup>Optional</sup> <a name="AwsAccount" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.awsAccount"></a>

```csharp
public AuditmanagerAssessmentAwsAccount AwsAccount { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a>

The AWS account associated with the assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#aws_account AuditmanagerAssessment#aws_account}

---

##### `Delegations`<sup>Optional</sup> <a name="Delegations" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.delegations"></a>

```csharp
public IResolvable|AuditmanagerAssessmentDelegations[] Delegations { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>[]

The list of delegations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#delegations AuditmanagerAssessment#delegations}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the specified assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#description AuditmanagerAssessment#description}

---

##### `FrameworkId`<sup>Optional</sup> <a name="FrameworkId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.frameworkId"></a>

```csharp
public string FrameworkId { get; set; }
```

- *Type:* string

The identifier for the specified framework.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#framework_id AuditmanagerAssessment#framework_id}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the related assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#name AuditmanagerAssessment#name}

---

##### `Roles`<sup>Optional</sup> <a name="Roles" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.roles"></a>

```csharp
public IResolvable|AuditmanagerAssessmentRoles[] Roles { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>[]

The list of roles for the specified assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#roles AuditmanagerAssessment#roles}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.scope"></a>

```csharp
public AuditmanagerAssessmentScope Scope { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>

The wrapper that contains the AWS accounts and AWS services in scope for the assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#scope AuditmanagerAssessment#scope}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The status of the specified assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#status AuditmanagerAssessment#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentConfig.property.tags"></a>

```csharp
public IResolvable|AuditmanagerAssessmentTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>[]

The tags associated with the assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#tags AuditmanagerAssessment#tags}

---

### AuditmanagerAssessmentDelegations <a name="AuditmanagerAssessmentDelegations" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentDelegations {
    string AssessmentId = null,
    string AssessmentName = null,
    string Comment = null,
    string ControlSetId = null,
    string CreatedBy = null,
    double CreationTime = null,
    string Id = null,
    double LastUpdated = null,
    string RoleArn = null,
    string RoleType = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.assessmentId">AssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#assessment_id AuditmanagerAssessment#assessment_id}. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.assessmentName">AssessmentName</a></code> | <code>string</code> | The name of the related assessment. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.comment">Comment</a></code> | <code>string</code> | The comment related to the delegation. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.controlSetId">ControlSetId</a></code> | <code>string</code> | The identifier for the specified control set. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.createdBy">CreatedBy</a></code> | <code>string</code> | The IAM user or role that performed the action. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.creationTime">CreationTime</a></code> | <code>double</code> | The sequence of characters that identifies when the event occurred. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#id AuditmanagerAssessment#id}. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.lastUpdated">LastUpdated</a></code> | <code>double</code> | The sequence of characters that identifies when the event occurred. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM user or role. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.roleType">RoleType</a></code> | <code>string</code> | The IAM role type. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.status">Status</a></code> | <code>string</code> | The status of the delegation. |

---

##### `AssessmentId`<sup>Optional</sup> <a name="AssessmentId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.assessmentId"></a>

```csharp
public string AssessmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#assessment_id AuditmanagerAssessment#assessment_id}.

---

##### `AssessmentName`<sup>Optional</sup> <a name="AssessmentName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.assessmentName"></a>

```csharp
public string AssessmentName { get; set; }
```

- *Type:* string

The name of the related assessment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#assessment_name AuditmanagerAssessment#assessment_name}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

The comment related to the delegation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#comment AuditmanagerAssessment#comment}

---

##### `ControlSetId`<sup>Optional</sup> <a name="ControlSetId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.controlSetId"></a>

```csharp
public string ControlSetId { get; set; }
```

- *Type:* string

The identifier for the specified control set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#control_set_id AuditmanagerAssessment#control_set_id}

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.createdBy"></a>

```csharp
public string CreatedBy { get; set; }
```

- *Type:* string

The IAM user or role that performed the action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#created_by AuditmanagerAssessment#created_by}

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.creationTime"></a>

```csharp
public double CreationTime { get; set; }
```

- *Type:* double

The sequence of characters that identifies when the event occurred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#creation_time AuditmanagerAssessment#creation_time}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#id AuditmanagerAssessment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LastUpdated`<sup>Optional</sup> <a name="LastUpdated" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.lastUpdated"></a>

```csharp
public double LastUpdated { get; set; }
```

- *Type:* double

The sequence of characters that identifies when the event occurred.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#last_updated AuditmanagerAssessment#last_updated}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM user or role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#role_arn AuditmanagerAssessment#role_arn}

---

##### `RoleType`<sup>Optional</sup> <a name="RoleType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.roleType"></a>

```csharp
public string RoleType { get; set; }
```

- *Type:* string

The IAM role type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#role_type AuditmanagerAssessment#role_type}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

The status of the delegation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#status AuditmanagerAssessment#status}

---

### AuditmanagerAssessmentRoles <a name="AuditmanagerAssessmentRoles" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentRoles {
    string RoleArn = null,
    string RoleType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleArn">RoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM user or role. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleType">RoleType</a></code> | <code>string</code> | The IAM role type. |

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleArn"></a>

```csharp
public string RoleArn { get; set; }
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM user or role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#role_arn AuditmanagerAssessment#role_arn}

---

##### `RoleType`<sup>Optional</sup> <a name="RoleType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles.property.roleType"></a>

```csharp
public string RoleType { get; set; }
```

- *Type:* string

The IAM role type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#role_type AuditmanagerAssessment#role_type}

---

### AuditmanagerAssessmentScope <a name="AuditmanagerAssessmentScope" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentScope {
    IResolvable|AuditmanagerAssessmentScopeAwsAccounts[] AwsAccounts = null,
    IResolvable|AuditmanagerAssessmentScopeAwsServices[] AwsServices = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsAccounts">AwsAccounts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>[]</code> | The AWS accounts included in scope. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsServices">AwsServices</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>[]</code> | The AWS services included in scope. |

---

##### `AwsAccounts`<sup>Optional</sup> <a name="AwsAccounts" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsAccounts"></a>

```csharp
public IResolvable|AuditmanagerAssessmentScopeAwsAccounts[] AwsAccounts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>[]

The AWS accounts included in scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#aws_accounts AuditmanagerAssessment#aws_accounts}

---

##### `AwsServices`<sup>Optional</sup> <a name="AwsServices" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope.property.awsServices"></a>

```csharp
public IResolvable|AuditmanagerAssessmentScopeAwsServices[] AwsServices { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>[]

The AWS services included in scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#aws_services AuditmanagerAssessment#aws_services}

---

### AuditmanagerAssessmentScopeAwsAccounts <a name="AuditmanagerAssessmentScopeAwsAccounts" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentScopeAwsAccounts {
    string EmailAddress = null,
    string Id = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.emailAddress">EmailAddress</a></code> | <code>string</code> | The unique identifier for the email account. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.id">Id</a></code> | <code>string</code> | The identifier for the specified AWS account. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.name">Name</a></code> | <code>string</code> | The name of the specified AWS account. |

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.emailAddress"></a>

```csharp
public string EmailAddress { get; set; }
```

- *Type:* string

The unique identifier for the email account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#email_address AuditmanagerAssessment#email_address}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

The identifier for the specified AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#id AuditmanagerAssessment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the specified AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#name AuditmanagerAssessment#name}

---

### AuditmanagerAssessmentScopeAwsServices <a name="AuditmanagerAssessmentScopeAwsServices" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentScopeAwsServices {
    string ServiceName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices.property.serviceName">ServiceName</a></code> | <code>string</code> | The name of the AWS service. |

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

The name of the AWS service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#service_name AuditmanagerAssessment#service_name}

---

### AuditmanagerAssessmentTags <a name="AuditmanagerAssessmentTags" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#key AuditmanagerAssessment#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/auditmanager_assessment#value AuditmanagerAssessment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### AuditmanagerAssessmentAssessmentReportsDestinationOutputReference <a name="AuditmanagerAssessmentAssessmentReportsDestinationOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentAssessmentReportsDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resetDestinationType">ResetDestinationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```

##### `ResetDestinationType` <a name="ResetDestinationType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.resetDestinationType"></a>

```csharp
private void ResetDestinationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationType">DestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationTypeInput"></a>

```csharp
public string DestinationTypeInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.destinationType"></a>

```csharp
public string DestinationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestinationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentAssessmentReportsDestination InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAssessmentReportsDestination">AuditmanagerAssessmentAssessmentReportsDestination</a>

---


### AuditmanagerAssessmentAwsAccountOutputReference <a name="AuditmanagerAssessmentAwsAccountOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentAwsAccountOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resetEmailAddress"></a>

```csharp
private void ResetEmailAddress()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccountOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentAwsAccount InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentAwsAccount">AuditmanagerAssessmentAwsAccount</a>

---


### AuditmanagerAssessmentDelegationsList <a name="AuditmanagerAssessmentDelegationsList" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentDelegationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.get"></a>

```csharp
private AuditmanagerAssessmentDelegationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsList.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentDelegations[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>[]

---


### AuditmanagerAssessmentDelegationsOutputReference <a name="AuditmanagerAssessmentDelegationsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentDelegationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetAssessmentId">ResetAssessmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetAssessmentName">ResetAssessmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetControlSetId">ResetControlSetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetLastUpdated">ResetLastUpdated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetRoleType">ResetRoleType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssessmentId` <a name="ResetAssessmentId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetAssessmentId"></a>

```csharp
private void ResetAssessmentId()
```

##### `ResetAssessmentName` <a name="ResetAssessmentName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetAssessmentName"></a>

```csharp
private void ResetAssessmentName()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetControlSetId` <a name="ResetControlSetId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetControlSetId"></a>

```csharp
private void ResetControlSetId()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetCreatedBy"></a>

```csharp
private void ResetCreatedBy()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetCreationTime"></a>

```csharp
private void ResetCreationTime()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLastUpdated` <a name="ResetLastUpdated" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetLastUpdated"></a>

```csharp
private void ResetLastUpdated()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetRoleType` <a name="ResetRoleType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetRoleType"></a>

```csharp
private void ResetRoleType()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentIdInput">AssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentNameInput">AssessmentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.controlSetIdInput">ControlSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.createdByInput">CreatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.creationTimeInput">CreationTimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.lastUpdatedInput">LastUpdatedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleTypeInput">RoleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentId">AssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentName">AssessmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.controlSetId">ControlSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.creationTime">CreationTime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.lastUpdated">LastUpdated</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleType">RoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssessmentIdInput`<sup>Optional</sup> <a name="AssessmentIdInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentIdInput"></a>

```csharp
public string AssessmentIdInput { get; }
```

- *Type:* string

---

##### `AssessmentNameInput`<sup>Optional</sup> <a name="AssessmentNameInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentNameInput"></a>

```csharp
public string AssessmentNameInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `ControlSetIdInput`<sup>Optional</sup> <a name="ControlSetIdInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.controlSetIdInput"></a>

```csharp
public string ControlSetIdInput { get; }
```

- *Type:* string

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.createdByInput"></a>

```csharp
public string CreatedByInput { get; }
```

- *Type:* string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.creationTimeInput"></a>

```csharp
public double CreationTimeInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LastUpdatedInput`<sup>Optional</sup> <a name="LastUpdatedInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.lastUpdatedInput"></a>

```csharp
public double LastUpdatedInput { get; }
```

- *Type:* double

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RoleTypeInput`<sup>Optional</sup> <a name="RoleTypeInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleTypeInput"></a>

```csharp
public string RoleTypeInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `AssessmentId`<sup>Required</sup> <a name="AssessmentId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentId"></a>

```csharp
public string AssessmentId { get; }
```

- *Type:* string

---

##### `AssessmentName`<sup>Required</sup> <a name="AssessmentName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.assessmentName"></a>

```csharp
public string AssessmentName { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ControlSetId`<sup>Required</sup> <a name="ControlSetId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.controlSetId"></a>

```csharp
public string ControlSetId { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.creationTime"></a>

```csharp
public double CreationTime { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdated`<sup>Required</sup> <a name="LastUpdated" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.lastUpdated"></a>

```csharp
public double LastUpdated { get; }
```

- *Type:* double

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.roleType"></a>

```csharp
public string RoleType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentDelegations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentDelegations">AuditmanagerAssessmentDelegations</a>

---


### AuditmanagerAssessmentRolesList <a name="AuditmanagerAssessmentRolesList" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.get"></a>

```csharp
private AuditmanagerAssessmentRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesList.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentRoles[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>[]

---


### AuditmanagerAssessmentRolesOutputReference <a name="AuditmanagerAssessmentRolesOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resetRoleType">ResetRoleType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resetRoleArn"></a>

```csharp
private void ResetRoleArn()
```

##### `ResetRoleType` <a name="ResetRoleType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.resetRoleType"></a>

```csharp
private void ResetRoleType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleTypeInput">RoleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleType">RoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArnInput"></a>

```csharp
public string RoleArnInput { get; }
```

- *Type:* string

---

##### `RoleTypeInput`<sup>Optional</sup> <a name="RoleTypeInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleTypeInput"></a>

```csharp
public string RoleTypeInput { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `RoleType`<sup>Required</sup> <a name="RoleType" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.roleType"></a>

```csharp
public string RoleType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRolesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentRoles InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentRoles">AuditmanagerAssessmentRoles</a>

---


### AuditmanagerAssessmentScopeAwsAccountsList <a name="AuditmanagerAssessmentScopeAwsAccountsList" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentScopeAwsAccountsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.get"></a>

```csharp
private AuditmanagerAssessmentScopeAwsAccountsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentScopeAwsAccounts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>[]

---


### AuditmanagerAssessmentScopeAwsAccountsOutputReference <a name="AuditmanagerAssessmentScopeAwsAccountsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentScopeAwsAccountsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resetEmailAddress"></a>

```csharp
private void ResetEmailAddress()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.emailAddress">EmailAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.emailAddressInput"></a>

```csharp
public string EmailAddressInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.emailAddress"></a>

```csharp
public string EmailAddress { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentScopeAwsAccounts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>

---


### AuditmanagerAssessmentScopeAwsServicesList <a name="AuditmanagerAssessmentScopeAwsServicesList" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentScopeAwsServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.get"></a>

```csharp
private AuditmanagerAssessmentScopeAwsServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentScopeAwsServices[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>[]

---


### AuditmanagerAssessmentScopeAwsServicesOutputReference <a name="AuditmanagerAssessmentScopeAwsServicesOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentScopeAwsServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.resetServiceName"></a>

```csharp
private void ResetServiceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentScopeAwsServices InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>

---


### AuditmanagerAssessmentScopeOutputReference <a name="AuditmanagerAssessmentScopeOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentScopeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsAccounts">PutAwsAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsServices">PutAwsServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsAccounts">ResetAwsAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsServices">ResetAwsServices</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsAccounts` <a name="PutAwsAccounts" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsAccounts"></a>

```csharp
private void PutAwsAccounts(IResolvable|AuditmanagerAssessmentScopeAwsAccounts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsAccounts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>[]

---

##### `PutAwsServices` <a name="PutAwsServices" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsServices"></a>

```csharp
private void PutAwsServices(IResolvable|AuditmanagerAssessmentScopeAwsServices[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.putAwsServices.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>[]

---

##### `ResetAwsAccounts` <a name="ResetAwsAccounts" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsAccounts"></a>

```csharp
private void ResetAwsAccounts()
```

##### `ResetAwsServices` <a name="ResetAwsServices" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.resetAwsServices"></a>

```csharp
private void ResetAwsServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccounts">AwsAccounts</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList">AuditmanagerAssessmentScopeAwsAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServices">AwsServices</a></code> | <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList">AuditmanagerAssessmentScopeAwsServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccountsInput">AwsAccountsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServicesInput">AwsServicesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsAccounts`<sup>Required</sup> <a name="AwsAccounts" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccounts"></a>

```csharp
public AuditmanagerAssessmentScopeAwsAccountsList AwsAccounts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccountsList">AuditmanagerAssessmentScopeAwsAccountsList</a>

---

##### `AwsServices`<sup>Required</sup> <a name="AwsServices" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServices"></a>

```csharp
public AuditmanagerAssessmentScopeAwsServicesList AwsServices { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServicesList">AuditmanagerAssessmentScopeAwsServicesList</a>

---

##### `AwsAccountsInput`<sup>Optional</sup> <a name="AwsAccountsInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsAccountsInput"></a>

```csharp
public IResolvable|AuditmanagerAssessmentScopeAwsAccounts[] AwsAccountsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsAccounts">AuditmanagerAssessmentScopeAwsAccounts</a>[]

---

##### `AwsServicesInput`<sup>Optional</sup> <a name="AwsServicesInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.awsServicesInput"></a>

```csharp
public IResolvable|AuditmanagerAssessmentScopeAwsServices[] AwsServicesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeAwsServices">AuditmanagerAssessmentScopeAwsServices</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScopeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentScope InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentScope">AuditmanagerAssessmentScope</a>

---


### AuditmanagerAssessmentTagsList <a name="AuditmanagerAssessmentTagsList" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.get"></a>

```csharp
private AuditmanagerAssessmentTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsList.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>[]

---


### AuditmanagerAssessmentTagsOutputReference <a name="AuditmanagerAssessmentTagsOutputReference" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new AuditmanagerAssessmentTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|AuditmanagerAssessmentTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.auditmanagerAssessment.AuditmanagerAssessmentTags">AuditmanagerAssessmentTags</a>

---



