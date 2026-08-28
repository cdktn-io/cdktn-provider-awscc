# `resiliencehubv2Service` Submodule <a name="`resiliencehubv2Service` Submodule" id="@cdktn/provider-awscc.resiliencehubv2Service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2Service <a name="Resiliencehubv2Service" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service awscc_resiliencehubv2_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2Service(Construct Scope, string Id, Resiliencehubv2ServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig">Resiliencehubv2ServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig">Resiliencehubv2ServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssertions">PutAssertions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssociatedSystems">PutAssociatedSystems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putInputSources">PutInputSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel">PutPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putReportConfiguration">PutReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetAssertions">ResetAssertions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetAssociatedSystems">ResetAssociatedSystems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetDependencyDiscovery">ResetDependencyDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetInputSources">ResetInputSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetPermissionModel">ResetPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetPolicyArn">ResetPolicyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetReportConfiguration">ResetReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAssertions` <a name="PutAssertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssertions"></a>

```csharp
private void PutAssertions(IResolvable|Resiliencehubv2ServiceAssertions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssertions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>[]

---

##### `PutAssociatedSystems` <a name="PutAssociatedSystems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssociatedSystems"></a>

```csharp
private void PutAssociatedSystems(IResolvable|Resiliencehubv2ServiceAssociatedSystems[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putAssociatedSystems.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>[]

---

##### `PutInputSources` <a name="PutInputSources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putInputSources"></a>

```csharp
private void PutInputSources(IResolvable|Resiliencehubv2ServiceInputSources[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putInputSources.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>[]

---

##### `PutPermissionModel` <a name="PutPermissionModel" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel"></a>

```csharp
private void PutPermissionModel(Resiliencehubv2ServicePermissionModel Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

---

##### `PutReportConfiguration` <a name="PutReportConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putReportConfiguration"></a>

```csharp
private void PutReportConfiguration(Resiliencehubv2ServiceReportConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putReportConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putTags"></a>

```csharp
private void PutTags(IResolvable|Resiliencehubv2ServiceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>[]

---

##### `ResetAssertions` <a name="ResetAssertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetAssertions"></a>

```csharp
private void ResetAssertions()
```

##### `ResetAssociatedSystems` <a name="ResetAssociatedSystems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetAssociatedSystems"></a>

```csharp
private void ResetAssociatedSystems()
```

##### `ResetDependencyDiscovery` <a name="ResetDependencyDiscovery" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetDependencyDiscovery"></a>

```csharp
private void ResetDependencyDiscovery()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetInputSources` <a name="ResetInputSources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetInputSources"></a>

```csharp
private void ResetInputSources()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetKmsKeyId"></a>

```csharp
private void ResetKmsKeyId()
```

##### `ResetPermissionModel` <a name="ResetPermissionModel" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetPermissionModel"></a>

```csharp
private void ResetPermissionModel()
```

##### `ResetPolicyArn` <a name="ResetPolicyArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetPolicyArn"></a>

```csharp
private void ResetPolicyArn()
```

##### `ResetReportConfiguration` <a name="ResetReportConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetReportConfiguration"></a>

```csharp
private void ResetReportConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Resiliencehubv2Service resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Resiliencehubv2Service.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Resiliencehubv2Service.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Resiliencehubv2Service.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Resiliencehubv2Service.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Resiliencehubv2Service resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Resiliencehubv2Service to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Resiliencehubv2Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.assertions">Assertions</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList">Resiliencehubv2ServiceAssertionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystems">AssociatedSystems</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList">Resiliencehubv2ServiceAssociatedSystemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.effectivePolicyValues">EffectivePolicyValues</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.inputSources">InputSources</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList">Resiliencehubv2ServiceInputSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModel">PermissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference">Resiliencehubv2ServicePermissionModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.reportConfiguration">ReportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference">Resiliencehubv2ServiceReportConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.serviceArn">ServiceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList">Resiliencehubv2ServiceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.assertionsInput">AssertionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystemsInput">AssociatedSystemsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscoveryInput">DependencyDiscoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.inputSourcesInput">InputSourcesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModelInput">PermissionModelInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.policyArnInput">PolicyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.regionsInput">RegionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.reportConfigurationInput">ReportConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscovery">DependencyDiscovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.policyArn">PolicyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.regions">Regions</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Assertions`<sup>Required</sup> <a name="Assertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.assertions"></a>

```csharp
public Resiliencehubv2ServiceAssertionsList Assertions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList">Resiliencehubv2ServiceAssertionsList</a>

---

##### `AssociatedSystems`<sup>Required</sup> <a name="AssociatedSystems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystems"></a>

```csharp
public Resiliencehubv2ServiceAssociatedSystemsList AssociatedSystems { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList">Resiliencehubv2ServiceAssociatedSystemsList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `EffectivePolicyValues`<sup>Required</sup> <a name="EffectivePolicyValues" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.effectivePolicyValues"></a>

```csharp
public Resiliencehubv2ServiceEffectivePolicyValuesOutputReference EffectivePolicyValues { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputSources`<sup>Required</sup> <a name="InputSources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.inputSources"></a>

```csharp
public Resiliencehubv2ServiceInputSourcesList InputSources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList">Resiliencehubv2ServiceInputSourcesList</a>

---

##### `PermissionModel`<sup>Required</sup> <a name="PermissionModel" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModel"></a>

```csharp
public Resiliencehubv2ServicePermissionModelOutputReference PermissionModel { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference">Resiliencehubv2ServicePermissionModelOutputReference</a>

---

##### `ReportConfiguration`<sup>Required</sup> <a name="ReportConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.reportConfiguration"></a>

```csharp
public Resiliencehubv2ServiceReportConfigurationOutputReference ReportConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference">Resiliencehubv2ServiceReportConfigurationOutputReference</a>

---

##### `ServiceArn`<sup>Required</sup> <a name="ServiceArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.serviceArn"></a>

```csharp
public string ServiceArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tags"></a>

```csharp
public Resiliencehubv2ServiceTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList">Resiliencehubv2ServiceTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AssertionsInput`<sup>Optional</sup> <a name="AssertionsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.assertionsInput"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceAssertions[] AssertionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>[]

---

##### `AssociatedSystemsInput`<sup>Optional</sup> <a name="AssociatedSystemsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystemsInput"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceAssociatedSystems[] AssociatedSystemsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>[]

---

##### `DependencyDiscoveryInput`<sup>Optional</sup> <a name="DependencyDiscoveryInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscoveryInput"></a>

```csharp
public string DependencyDiscoveryInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `InputSourcesInput`<sup>Optional</sup> <a name="InputSourcesInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.inputSourcesInput"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceInputSources[] InputSourcesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>[]

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyIdInput"></a>

```csharp
public string KmsKeyIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionModelInput`<sup>Optional</sup> <a name="PermissionModelInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModelInput"></a>

```csharp
public IResolvable|Resiliencehubv2ServicePermissionModel PermissionModelInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

---

##### `PolicyArnInput`<sup>Optional</sup> <a name="PolicyArnInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.policyArnInput"></a>

```csharp
public string PolicyArnInput { get; }
```

- *Type:* string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.regionsInput"></a>

```csharp
public string[] RegionsInput { get; }
```

- *Type:* string[]

---

##### `ReportConfigurationInput`<sup>Optional</sup> <a name="ReportConfigurationInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.reportConfigurationInput"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceReportConfiguration ReportConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tagsInput"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>[]

---

##### `DependencyDiscovery`<sup>Required</sup> <a name="DependencyDiscovery" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscovery"></a>

```csharp
public string DependencyDiscovery { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyArn`<sup>Required</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.policyArn"></a>

```csharp
public string PolicyArn { get; }
```

- *Type:* string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.regions"></a>

```csharp
public string[] Regions { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2Service.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2ServiceAssertions <a name="Resiliencehubv2ServiceAssertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceAssertions {
    string Text = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions.property.text">Text</a></code> | <code>string</code> | The text of the assertion. |

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

The text of the assertion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#text Resiliencehubv2Service#text}

---

### Resiliencehubv2ServiceAssociatedSystems <a name="Resiliencehubv2ServiceAssociatedSystems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceAssociatedSystems {
    string SystemArn = null,
    string[] UserJourneyIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.property.systemArn">SystemArn</a></code> | <code>string</code> | The system ARN. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.property.userJourneyIds">UserJourneyIds</a></code> | <code>string[]</code> | User journey IDs associated with this system. |

---

##### `SystemArn`<sup>Optional</sup> <a name="SystemArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.property.systemArn"></a>

```csharp
public string SystemArn { get; set; }
```

- *Type:* string

The system ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#system_arn Resiliencehubv2Service#system_arn}

---

##### `UserJourneyIds`<sup>Optional</sup> <a name="UserJourneyIds" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems.property.userJourneyIds"></a>

```csharp
public string[] UserJourneyIds { get; set; }
```

- *Type:* string[]

User journey IDs associated with this system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#user_journey_ids Resiliencehubv2Service#user_journey_ids}

---

### Resiliencehubv2ServiceConfig <a name="Resiliencehubv2ServiceConfig" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string[] Regions,
    IResolvable|Resiliencehubv2ServiceAssertions[] Assertions = null,
    IResolvable|Resiliencehubv2ServiceAssociatedSystems[] AssociatedSystems = null,
    string DependencyDiscovery = null,
    string Description = null,
    IResolvable|Resiliencehubv2ServiceInputSources[] InputSources = null,
    string KmsKeyId = null,
    Resiliencehubv2ServicePermissionModel PermissionModel = null,
    string PolicyArn = null,
    Resiliencehubv2ServiceReportConfiguration ReportConfiguration = null,
    IResolvable|Resiliencehubv2ServiceTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.name">Name</a></code> | <code>string</code> | The name of the service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.regions">Regions</a></code> | <code>string[]</code> | AWS regions for the service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.assertions">Assertions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>[]</code> | Assertions associated with this service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.associatedSystems">AssociatedSystems</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>[]</code> | Systems associated with this service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependencyDiscovery">DependencyDiscovery</a></code> | <code>string</code> | Dependency discovery state. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.description">Description</a></code> | <code>string</code> | The description of the service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.inputSources">InputSources</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>[]</code> | Input sources for this service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | The KMS key ID for encrypting service data. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.permissionModel">PermissionModel</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#permission_model Resiliencehubv2Service#permission_model}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.policyArn">PolicyArn</a></code> | <code>string</code> | The ARN of the resilience policy to associate. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.reportConfiguration">ReportConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a></code> | Configuration for automatic report generation on a Service. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>[]</code> | Tags assigned to the service. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#name Resiliencehubv2Service#name}

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.regions"></a>

```csharp
public string[] Regions { get; set; }
```

- *Type:* string[]

AWS regions for the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#regions Resiliencehubv2Service#regions}

---

##### `Assertions`<sup>Optional</sup> <a name="Assertions" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.assertions"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceAssertions[] Assertions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>[]

Assertions associated with this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#assertions Resiliencehubv2Service#assertions}

---

##### `AssociatedSystems`<sup>Optional</sup> <a name="AssociatedSystems" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.associatedSystems"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceAssociatedSystems[] AssociatedSystems { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>[]

Systems associated with this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#associated_systems Resiliencehubv2Service#associated_systems}

---

##### `DependencyDiscovery`<sup>Optional</sup> <a name="DependencyDiscovery" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependencyDiscovery"></a>

```csharp
public string DependencyDiscovery { get; set; }
```

- *Type:* string

Dependency discovery state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#dependency_discovery Resiliencehubv2Service#dependency_discovery}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#description Resiliencehubv2Service#description}

---

##### `InputSources`<sup>Optional</sup> <a name="InputSources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.inputSources"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceInputSources[] InputSources { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>[]

Input sources for this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#input_sources Resiliencehubv2Service#input_sources}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; set; }
```

- *Type:* string

The KMS key ID for encrypting service data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#kms_key_id Resiliencehubv2Service#kms_key_id}

---

##### `PermissionModel`<sup>Optional</sup> <a name="PermissionModel" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.permissionModel"></a>

```csharp
public Resiliencehubv2ServicePermissionModel PermissionModel { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#permission_model Resiliencehubv2Service#permission_model}.

---

##### `PolicyArn`<sup>Optional</sup> <a name="PolicyArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.policyArn"></a>

```csharp
public string PolicyArn { get; set; }
```

- *Type:* string

The ARN of the resilience policy to associate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#policy_arn Resiliencehubv2Service#policy_arn}

---

##### `ReportConfiguration`<sup>Optional</sup> <a name="ReportConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.reportConfiguration"></a>

```csharp
public Resiliencehubv2ServiceReportConfiguration ReportConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a>

Configuration for automatic report generation on a Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#report_configuration Resiliencehubv2Service#report_configuration}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.tags"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>[]

Tags assigned to the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#tags Resiliencehubv2Service#tags}

---

### Resiliencehubv2ServiceEffectivePolicyValues <a name="Resiliencehubv2ServiceEffectivePolicyValues" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceEffectivePolicyValues {

};
```


### Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo <a name="Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo {

};
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach {

};
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo {

};
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto {

};
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach {

};
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo {

};
```


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto {

};
```


### Resiliencehubv2ServiceInputSources <a name="Resiliencehubv2ServiceInputSources" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceInputSources {
    Resiliencehubv2ServiceInputSourcesResourceConfiguration ResourceConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources.property.resourceConfiguration">ResourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a></code> | Resource configuration for an input source. Provide exactly one field. |

---

##### `ResourceConfiguration`<sup>Optional</sup> <a name="ResourceConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources.property.resourceConfiguration"></a>

```csharp
public Resiliencehubv2ServiceInputSourcesResourceConfiguration ResourceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a>

Resource configuration for an input source. Provide exactly one field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#resource_configuration Resiliencehubv2Service#resource_configuration}

---

### Resiliencehubv2ServiceInputSourcesResourceConfiguration <a name="Resiliencehubv2ServiceInputSourcesResourceConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceInputSourcesResourceConfiguration {
    string CfnStackArn = null,
    string DesignFileS3Url = null,
    Resiliencehubv2ServiceInputSourcesResourceConfigurationEks Eks = null,
    IResolvable|Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags[] ResourceTags = null,
    string TfStateFileUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.cfnStackArn">CfnStackArn</a></code> | <code>string</code> | ARN of a CloudFormation stack. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.designFileS3Url">DesignFileS3Url</a></code> | <code>string</code> | S3 URL of a design file. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.eks">Eks</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#eks Resiliencehubv2Service#eks}. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.resourceTags">ResourceTags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>[]</code> | Resource tags to discover resources. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.tfStateFileUrl">TfStateFileUrl</a></code> | <code>string</code> | URL of a Terraform state file. |

---

##### `CfnStackArn`<sup>Optional</sup> <a name="CfnStackArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.cfnStackArn"></a>

```csharp
public string CfnStackArn { get; set; }
```

- *Type:* string

ARN of a CloudFormation stack.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#cfn_stack_arn Resiliencehubv2Service#cfn_stack_arn}

---

##### `DesignFileS3Url`<sup>Optional</sup> <a name="DesignFileS3Url" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.designFileS3Url"></a>

```csharp
public string DesignFileS3Url { get; set; }
```

- *Type:* string

S3 URL of a design file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#design_file_s3_url Resiliencehubv2Service#design_file_s3_url}

---

##### `Eks`<sup>Optional</sup> <a name="Eks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.eks"></a>

```csharp
public Resiliencehubv2ServiceInputSourcesResourceConfigurationEks Eks { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#eks Resiliencehubv2Service#eks}.

---

##### `ResourceTags`<sup>Optional</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.resourceTags"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags[] ResourceTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>[]

Resource tags to discover resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#resource_tags Resiliencehubv2Service#resource_tags}

---

##### `TfStateFileUrl`<sup>Optional</sup> <a name="TfStateFileUrl" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration.property.tfStateFileUrl"></a>

```csharp
public string TfStateFileUrl { get; set; }
```

- *Type:* string

URL of a Terraform state file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#tf_state_file_url Resiliencehubv2Service#tf_state_file_url}

---

### Resiliencehubv2ServiceInputSourcesResourceConfigurationEks <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationEks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceInputSourcesResourceConfigurationEks {
    string ClusterArn = null,
    string[] Namespaces = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.property.clusterArn">ClusterArn</a></code> | <code>string</code> | ARN of the EKS cluster. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.property.namespaces">Namespaces</a></code> | <code>string[]</code> | EKS namespaces. |

---

##### `ClusterArn`<sup>Optional</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.property.clusterArn"></a>

```csharp
public string ClusterArn { get; set; }
```

- *Type:* string

ARN of the EKS cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#cluster_arn Resiliencehubv2Service#cluster_arn}

---

##### `Namespaces`<sup>Optional</sup> <a name="Namespaces" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks.property.namespaces"></a>

```csharp
public string[] Namespaces { get; set; }
```

- *Type:* string[]

EKS namespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#namespaces Resiliencehubv2Service#namespaces}

---

### Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags {
    string Key = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.property.key">Key</a></code> | <code>string</code> | Tag key. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.property.values">Values</a></code> | <code>string[]</code> | Tag values. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#key Resiliencehubv2Service#key}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#values Resiliencehubv2Service#values}

---

### Resiliencehubv2ServicePermissionModel <a name="Resiliencehubv2ServicePermissionModel" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServicePermissionModel {
    IResolvable|Resiliencehubv2ServicePermissionModelCrossAccountRoleArns[] CrossAccountRoleArns = null,
    string InvokerRoleName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.crossAccountRoleArns">CrossAccountRoleArns</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>[]</code> | Cross-account role ARNs. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.invokerRoleName">InvokerRoleName</a></code> | <code>string</code> | Name of the invoker IAM role. |

---

##### `CrossAccountRoleArns`<sup>Optional</sup> <a name="CrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.crossAccountRoleArns"></a>

```csharp
public IResolvable|Resiliencehubv2ServicePermissionModelCrossAccountRoleArns[] CrossAccountRoleArns { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>[]

Cross-account role ARNs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#cross_account_role_arns Resiliencehubv2Service#cross_account_role_arns}

---

##### `InvokerRoleName`<sup>Optional</sup> <a name="InvokerRoleName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.invokerRoleName"></a>

```csharp
public string InvokerRoleName { get; set; }
```

- *Type:* string

Name of the invoker IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#invoker_role_name Resiliencehubv2Service#invoker_role_name}

---

### Resiliencehubv2ServicePermissionModelCrossAccountRoleArns <a name="Resiliencehubv2ServicePermissionModelCrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServicePermissionModelCrossAccountRoleArns {
    string CrossAccountRoleArn = null,
    string ExternalId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.property.crossAccountRoleArn">CrossAccountRoleArn</a></code> | <code>string</code> | ARN of the cross-account IAM role. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.property.externalId">ExternalId</a></code> | <code>string</code> | External ID for cross-account access. |

---

##### `CrossAccountRoleArn`<sup>Optional</sup> <a name="CrossAccountRoleArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.property.crossAccountRoleArn"></a>

```csharp
public string CrossAccountRoleArn { get; set; }
```

- *Type:* string

ARN of the cross-account IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#cross_account_role_arn Resiliencehubv2Service#cross_account_role_arn}

---

##### `ExternalId`<sup>Optional</sup> <a name="ExternalId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns.property.externalId"></a>

```csharp
public string ExternalId { get; set; }
```

- *Type:* string

External ID for cross-account access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#external_id Resiliencehubv2Service#external_id}

---

### Resiliencehubv2ServiceReportConfiguration <a name="Resiliencehubv2ServiceReportConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceReportConfiguration {
    IResolvable|Resiliencehubv2ServiceReportConfigurationReportOutput[] ReportOutput = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration.property.reportOutput">ReportOutput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>[]</code> | Output destinations for generated reports. |

---

##### `ReportOutput`<sup>Optional</sup> <a name="ReportOutput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration.property.reportOutput"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceReportConfigurationReportOutput[] ReportOutput { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>[]

Output destinations for generated reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#report_output Resiliencehubv2Service#report_output}

---

### Resiliencehubv2ServiceReportConfigurationReportOutput <a name="Resiliencehubv2ServiceReportConfigurationReportOutput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceReportConfigurationReportOutput {
    Resiliencehubv2ServiceReportConfigurationReportOutputS3 S3 = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a></code> | S3 configuration for report output. |

---

##### `S3`<sup>Optional</sup> <a name="S3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput.property.s3"></a>

```csharp
public Resiliencehubv2ServiceReportConfigurationReportOutputS3 S3 { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a>

S3 configuration for report output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#s3 Resiliencehubv2Service#s3}

---

### Resiliencehubv2ServiceReportConfigurationReportOutputS3 <a name="Resiliencehubv2ServiceReportConfigurationReportOutputS3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceReportConfigurationReportOutputS3 {
    string BucketOwner = null,
    string BucketPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | Account ID of the bucket owner. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.property.bucketPath">BucketPath</a></code> | <code>string</code> | S3 bucket path where reports will be written. |

---

##### `BucketOwner`<sup>Optional</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; set; }
```

- *Type:* string

Account ID of the bucket owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#bucket_owner Resiliencehubv2Service#bucket_owner}

---

##### `BucketPath`<sup>Optional</sup> <a name="BucketPath" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3.property.bucketPath"></a>

```csharp
public string BucketPath { get; set; }
```

- *Type:* string

S3 bucket path where reports will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#bucket_path Resiliencehubv2Service#bucket_path}

---

### Resiliencehubv2ServiceTags <a name="Resiliencehubv2ServiceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.property.key">Key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.property.value">Value</a></code> | <code>string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#key Resiliencehubv2Service#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/resiliencehubv2_service#value Resiliencehubv2Service#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Resiliencehubv2ServiceAssertionsList <a name="Resiliencehubv2ServiceAssertionsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceAssertionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.get"></a>

```csharp
private Resiliencehubv2ServiceAssertionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsList.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceAssertions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>[]

---


### Resiliencehubv2ServiceAssertionsOutputReference <a name="Resiliencehubv2ServiceAssertionsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceAssertionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.resetText"></a>

```csharp
private void ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceAssertions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssertions">Resiliencehubv2ServiceAssertions</a>

---


### Resiliencehubv2ServiceAssociatedSystemsList <a name="Resiliencehubv2ServiceAssociatedSystemsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceAssociatedSystemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.get"></a>

```csharp
private Resiliencehubv2ServiceAssociatedSystemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsList.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceAssociatedSystems[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>[]

---


### Resiliencehubv2ServiceAssociatedSystemsOutputReference <a name="Resiliencehubv2ServiceAssociatedSystemsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceAssociatedSystemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resetSystemArn">ResetSystemArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resetUserJourneyIds">ResetUserJourneyIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSystemArn` <a name="ResetSystemArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resetSystemArn"></a>

```csharp
private void ResetSystemArn()
```

##### `ResetUserJourneyIds` <a name="ResetUserJourneyIds" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.resetUserJourneyIds"></a>

```csharp
private void ResetUserJourneyIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArnInput">SystemArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIdsInput">UserJourneyIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArn">SystemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIds">UserJourneyIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SystemArnInput`<sup>Optional</sup> <a name="SystemArnInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArnInput"></a>

```csharp
public string SystemArnInput { get; }
```

- *Type:* string

---

##### `UserJourneyIdsInput`<sup>Optional</sup> <a name="UserJourneyIdsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIdsInput"></a>

```csharp
public string[] UserJourneyIdsInput { get; }
```

- *Type:* string[]

---

##### `SystemArn`<sup>Required</sup> <a name="SystemArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.systemArn"></a>

```csharp
public string SystemArn { get; }
```

- *Type:* string

---

##### `UserJourneyIds`<sup>Required</sup> <a name="UserJourneyIds" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.userJourneyIds"></a>

```csharp
public string[] UserJourneyIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceAssociatedSystems InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystems">Resiliencehubv2ServiceAssociatedSystems</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo">Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference.property.internalValue"></a>

```csharp
public Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo">Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySlo</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference.property.internalValue"></a>

```csharp
public Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproach</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference.property.internalValue"></a>

```csharp
public Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpo</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference.property.internalValue"></a>

```csharp
public Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRto</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference.property.internalValue"></a>

```csharp
public Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproach</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference.property.internalValue"></a>

```csharp
public Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpo</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.policyName">PolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PolicyName`<sup>Required</sup> <a name="PolicyName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.policyName"></a>

```csharp
public string PolicyName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference.property.internalValue"></a>

```csharp
public Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRto</a>

---


### Resiliencehubv2ServiceEffectivePolicyValuesOutputReference <a name="Resiliencehubv2ServiceEffectivePolicyValuesOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceEffectivePolicyValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.availabilitySlo">AvailabilitySlo</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzDrApproach">MultiAzDrApproach</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRpo">MultiAzRpo</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRto">MultiAzRto</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionDrApproach">MultiRegionDrApproach</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRpo">MultiRegionRpo</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRto">MultiRegionRto</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValues">Resiliencehubv2ServiceEffectivePolicyValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilitySlo`<sup>Required</sup> <a name="AvailabilitySlo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.availabilitySlo"></a>

```csharp
public Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference AvailabilitySlo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesAvailabilitySloOutputReference</a>

---

##### `MultiAzDrApproach`<sup>Required</sup> <a name="MultiAzDrApproach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzDrApproach"></a>

```csharp
public Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference MultiAzDrApproach { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzDrApproachOutputReference</a>

---

##### `MultiAzRpo`<sup>Required</sup> <a name="MultiAzRpo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRpo"></a>

```csharp
public Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference MultiAzRpo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRpoOutputReference</a>

---

##### `MultiAzRto`<sup>Required</sup> <a name="MultiAzRto" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiAzRto"></a>

```csharp
public Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference MultiAzRto { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiAzRtoOutputReference</a>

---

##### `MultiRegionDrApproach`<sup>Required</sup> <a name="MultiRegionDrApproach" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionDrApproach"></a>

```csharp
public Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference MultiRegionDrApproach { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionDrApproachOutputReference</a>

---

##### `MultiRegionRpo`<sup>Required</sup> <a name="MultiRegionRpo" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRpo"></a>

```csharp
public Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference MultiRegionRpo { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRpoOutputReference</a>

---

##### `MultiRegionRto`<sup>Required</sup> <a name="MultiRegionRto" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.multiRegionRto"></a>

```csharp
public Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference MultiRegionRto { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference">Resiliencehubv2ServiceEffectivePolicyValuesMultiRegionRtoOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValuesOutputReference.property.internalValue"></a>

```csharp
public Resiliencehubv2ServiceEffectivePolicyValues InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceEffectivePolicyValues">Resiliencehubv2ServiceEffectivePolicyValues</a>

---


### Resiliencehubv2ServiceInputSourcesList <a name="Resiliencehubv2ServiceInputSourcesList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceInputSourcesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.get"></a>

```csharp
private Resiliencehubv2ServiceInputSourcesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesList.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceInputSources[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>[]

---


### Resiliencehubv2ServiceInputSourcesOutputReference <a name="Resiliencehubv2ServiceInputSourcesOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceInputSourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.putResourceConfiguration">PutResourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resetResourceConfiguration">ResetResourceConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceConfiguration` <a name="PutResourceConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.putResourceConfiguration"></a>

```csharp
private void PutResourceConfiguration(Resiliencehubv2ServiceInputSourcesResourceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.putResourceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a>

---

##### `ResetResourceConfiguration` <a name="ResetResourceConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.resetResourceConfiguration"></a>

```csharp
private void ResetResourceConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfiguration">ResourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference">Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfigurationInput">ResourceConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ResourceConfiguration`<sup>Required</sup> <a name="ResourceConfiguration" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfiguration"></a>

```csharp
public Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference ResourceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference">Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference</a>

---

##### `ResourceConfigurationInput`<sup>Optional</sup> <a name="ResourceConfigurationInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.resourceConfigurationInput"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceInputSourcesResourceConfiguration ResourceConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceInputSources InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSources">Resiliencehubv2ServiceInputSources</a>

---


### Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resetClusterArn">ResetClusterArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resetNamespaces">ResetNamespaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterArn` <a name="ResetClusterArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resetClusterArn"></a>

```csharp
private void ResetClusterArn()
```

##### `ResetNamespaces` <a name="ResetNamespaces" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.resetNamespaces"></a>

```csharp
private void ResetNamespaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArnInput">ClusterArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespacesInput">NamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArn">ClusterArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespaces">Namespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArnInput"></a>

```csharp
public string ClusterArnInput { get; }
```

- *Type:* string

---

##### `NamespacesInput`<sup>Optional</sup> <a name="NamespacesInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespacesInput"></a>

```csharp
public string[] NamespacesInput { get; }
```

- *Type:* string[]

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.clusterArn"></a>

```csharp
public string ClusterArn { get; }
```

- *Type:* string

---

##### `Namespaces`<sup>Required</sup> <a name="Namespaces" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.namespaces"></a>

```csharp
public string[] Namespaces { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceInputSourcesResourceConfigurationEks InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a>

---


### Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putEks">PutEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putResourceTags">PutResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetCfnStackArn">ResetCfnStackArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetDesignFileS3Url">ResetDesignFileS3Url</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetEks">ResetEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetResourceTags">ResetResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetTfStateFileUrl">ResetTfStateFileUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEks` <a name="PutEks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putEks"></a>

```csharp
private void PutEks(Resiliencehubv2ServiceInputSourcesResourceConfigurationEks Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putEks.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a>

---

##### `PutResourceTags` <a name="PutResourceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putResourceTags"></a>

```csharp
private void PutResourceTags(IResolvable|Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.putResourceTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>[]

---

##### `ResetCfnStackArn` <a name="ResetCfnStackArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetCfnStackArn"></a>

```csharp
private void ResetCfnStackArn()
```

##### `ResetDesignFileS3Url` <a name="ResetDesignFileS3Url" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetDesignFileS3Url"></a>

```csharp
private void ResetDesignFileS3Url()
```

##### `ResetEks` <a name="ResetEks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetEks"></a>

```csharp
private void ResetEks()
```

##### `ResetResourceTags` <a name="ResetResourceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetResourceTags"></a>

```csharp
private void ResetResourceTags()
```

##### `ResetTfStateFileUrl` <a name="ResetTfStateFileUrl" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.resetTfStateFileUrl"></a>

```csharp
private void ResetTfStateFileUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eks">Eks</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference">Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTags">ResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArnInput">CfnStackArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3UrlInput">DesignFileS3UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eksInput">EksInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTagsInput">ResourceTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrlInput">TfStateFileUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArn">CfnStackArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3Url">DesignFileS3Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrl">TfStateFileUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Eks`<sup>Required</sup> <a name="Eks" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eks"></a>

```csharp
public Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference Eks { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference">Resiliencehubv2ServiceInputSourcesResourceConfigurationEksOutputReference</a>

---

##### `ResourceTags`<sup>Required</sup> <a name="ResourceTags" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTags"></a>

```csharp
public Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList ResourceTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList</a>

---

##### `CfnStackArnInput`<sup>Optional</sup> <a name="CfnStackArnInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArnInput"></a>

```csharp
public string CfnStackArnInput { get; }
```

- *Type:* string

---

##### `DesignFileS3UrlInput`<sup>Optional</sup> <a name="DesignFileS3UrlInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3UrlInput"></a>

```csharp
public string DesignFileS3UrlInput { get; }
```

- *Type:* string

---

##### `EksInput`<sup>Optional</sup> <a name="EksInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.eksInput"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceInputSourcesResourceConfigurationEks EksInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationEks">Resiliencehubv2ServiceInputSourcesResourceConfigurationEks</a>

---

##### `ResourceTagsInput`<sup>Optional</sup> <a name="ResourceTagsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.resourceTagsInput"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags[] ResourceTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>[]

---

##### `TfStateFileUrlInput`<sup>Optional</sup> <a name="TfStateFileUrlInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrlInput"></a>

```csharp
public string TfStateFileUrlInput { get; }
```

- *Type:* string

---

##### `CfnStackArn`<sup>Required</sup> <a name="CfnStackArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.cfnStackArn"></a>

```csharp
public string CfnStackArn { get; }
```

- *Type:* string

---

##### `DesignFileS3Url`<sup>Required</sup> <a name="DesignFileS3Url" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.designFileS3Url"></a>

```csharp
public string DesignFileS3Url { get; }
```

- *Type:* string

---

##### `TfStateFileUrl`<sup>Required</sup> <a name="TfStateFileUrl" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.tfStateFileUrl"></a>

```csharp
public string TfStateFileUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceInputSourcesResourceConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfiguration">Resiliencehubv2ServiceInputSourcesResourceConfiguration</a>

---


### Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.get"></a>

```csharp
private Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsList.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>[]

---


### Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference <a name="Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags">Resiliencehubv2ServiceInputSourcesResourceConfigurationResourceTags</a>

---


### Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList <a name="Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.get"></a>

```csharp
private Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServicePermissionModelCrossAccountRoleArns[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>[]

---


### Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference <a name="Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resetCrossAccountRoleArn">ResetCrossAccountRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resetExternalId">ResetExternalId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCrossAccountRoleArn` <a name="ResetCrossAccountRoleArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resetCrossAccountRoleArn"></a>

```csharp
private void ResetCrossAccountRoleArn()
```

##### `ResetExternalId` <a name="ResetExternalId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.resetExternalId"></a>

```csharp
private void ResetExternalId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArnInput">CrossAccountRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalIdInput">ExternalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArn">CrossAccountRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalId">ExternalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrossAccountRoleArnInput`<sup>Optional</sup> <a name="CrossAccountRoleArnInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArnInput"></a>

```csharp
public string CrossAccountRoleArnInput { get; }
```

- *Type:* string

---

##### `ExternalIdInput`<sup>Optional</sup> <a name="ExternalIdInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalIdInput"></a>

```csharp
public string ExternalIdInput { get; }
```

- *Type:* string

---

##### `CrossAccountRoleArn`<sup>Required</sup> <a name="CrossAccountRoleArn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.crossAccountRoleArn"></a>

```csharp
public string CrossAccountRoleArn { get; }
```

- *Type:* string

---

##### `ExternalId`<sup>Required</sup> <a name="ExternalId" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.externalId"></a>

```csharp
public string ExternalId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServicePermissionModelCrossAccountRoleArns InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>

---


### Resiliencehubv2ServicePermissionModelOutputReference <a name="Resiliencehubv2ServicePermissionModelOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServicePermissionModelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRoleArns">PutCrossAccountRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetCrossAccountRoleArns">ResetCrossAccountRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetInvokerRoleName">ResetInvokerRoleName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCrossAccountRoleArns` <a name="PutCrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRoleArns"></a>

```csharp
private void PutCrossAccountRoleArns(IResolvable|Resiliencehubv2ServicePermissionModelCrossAccountRoleArns[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRoleArns.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>[]

---

##### `ResetCrossAccountRoleArns` <a name="ResetCrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetCrossAccountRoleArns"></a>

```csharp
private void ResetCrossAccountRoleArns()
```

##### `ResetInvokerRoleName` <a name="ResetInvokerRoleName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetInvokerRoleName"></a>

```csharp
private void ResetInvokerRoleName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArns">CrossAccountRoleArns</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList">Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArnsInput">CrossAccountRoleArnsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleNameInput">InvokerRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName">InvokerRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CrossAccountRoleArns`<sup>Required</sup> <a name="CrossAccountRoleArns" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArns"></a>

```csharp
public Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList CrossAccountRoleArns { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList">Resiliencehubv2ServicePermissionModelCrossAccountRoleArnsList</a>

---

##### `CrossAccountRoleArnsInput`<sup>Optional</sup> <a name="CrossAccountRoleArnsInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleArnsInput"></a>

```csharp
public IResolvable|Resiliencehubv2ServicePermissionModelCrossAccountRoleArns[] CrossAccountRoleArnsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleArns">Resiliencehubv2ServicePermissionModelCrossAccountRoleArns</a>[]

---

##### `InvokerRoleNameInput`<sup>Optional</sup> <a name="InvokerRoleNameInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleNameInput"></a>

```csharp
public string InvokerRoleNameInput { get; }
```

- *Type:* string

---

##### `InvokerRoleName`<sup>Required</sup> <a name="InvokerRoleName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName"></a>

```csharp
public string InvokerRoleName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServicePermissionModel InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

---


### Resiliencehubv2ServiceReportConfigurationOutputReference <a name="Resiliencehubv2ServiceReportConfigurationOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceReportConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.putReportOutput">PutReportOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resetReportOutput">ResetReportOutput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutReportOutput` <a name="PutReportOutput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.putReportOutput"></a>

```csharp
private void PutReportOutput(IResolvable|Resiliencehubv2ServiceReportConfigurationReportOutput[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.putReportOutput.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>[]

---

##### `ResetReportOutput` <a name="ResetReportOutput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.resetReportOutput"></a>

```csharp
private void ResetReportOutput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutput">ReportOutput</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList">Resiliencehubv2ServiceReportConfigurationReportOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutputInput">ReportOutputInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReportOutput`<sup>Required</sup> <a name="ReportOutput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutput"></a>

```csharp
public Resiliencehubv2ServiceReportConfigurationReportOutputList ReportOutput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList">Resiliencehubv2ServiceReportConfigurationReportOutputList</a>

---

##### `ReportOutputInput`<sup>Optional</sup> <a name="ReportOutputInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.reportOutputInput"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceReportConfigurationReportOutput[] ReportOutputInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceReportConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfiguration">Resiliencehubv2ServiceReportConfiguration</a>

---


### Resiliencehubv2ServiceReportConfigurationReportOutputList <a name="Resiliencehubv2ServiceReportConfigurationReportOutputList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceReportConfigurationReportOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.get"></a>

```csharp
private Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputList.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceReportConfigurationReportOutput[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>[]

---


### Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference <a name="Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.putS3">PutS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resetS3">ResetS3</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3` <a name="PutS3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.putS3"></a>

```csharp
private void PutS3(Resiliencehubv2ServiceReportConfigurationReportOutputS3 Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a>

---

##### `ResetS3` <a name="ResetS3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.resetS3"></a>

```csharp
private void ResetS3()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3">S3</a></code> | <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference">Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3Input">S3Input</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3`<sup>Required</sup> <a name="S3" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3"></a>

```csharp
public Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference S3 { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference">Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference</a>

---

##### `S3Input`<sup>Optional</sup> <a name="S3Input" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.s3Input"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceReportConfigurationReportOutputS3 S3Input { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceReportConfigurationReportOutput InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutput">Resiliencehubv2ServiceReportConfigurationReportOutput</a>

---


### Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference <a name="Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resetBucketOwner">ResetBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resetBucketPath">ResetBucketPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketOwner` <a name="ResetBucketOwner" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resetBucketOwner"></a>

```csharp
private void ResetBucketOwner()
```

##### `ResetBucketPath` <a name="ResetBucketPath" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.resetBucketPath"></a>

```csharp
private void ResetBucketPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwnerInput">BucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPathInput">BucketPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwner">BucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPath">BucketPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketOwnerInput`<sup>Optional</sup> <a name="BucketOwnerInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwnerInput"></a>

```csharp
public string BucketOwnerInput { get; }
```

- *Type:* string

---

##### `BucketPathInput`<sup>Optional</sup> <a name="BucketPathInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPathInput"></a>

```csharp
public string BucketPathInput { get; }
```

- *Type:* string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketOwner"></a>

```csharp
public string BucketOwner { get; }
```

- *Type:* string

---

##### `BucketPath`<sup>Required</sup> <a name="BucketPath" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.bucketPath"></a>

```csharp
public string BucketPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3OutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceReportConfigurationReportOutputS3 InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceReportConfigurationReportOutputS3">Resiliencehubv2ServiceReportConfigurationReportOutputS3</a>

---


### Resiliencehubv2ServiceTagsList <a name="Resiliencehubv2ServiceTagsList" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.get"></a>

```csharp
private Resiliencehubv2ServiceTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsList.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>[]

---


### Resiliencehubv2ServiceTagsOutputReference <a name="Resiliencehubv2ServiceTagsOutputReference" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Resiliencehubv2ServiceTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Resiliencehubv2ServiceTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.resiliencehubv2Service.Resiliencehubv2ServiceTags">Resiliencehubv2ServiceTags</a>

---



