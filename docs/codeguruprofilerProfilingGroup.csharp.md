# `codeguruprofilerProfilingGroup` Submodule <a name="`codeguruprofilerProfilingGroup` Submodule" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodeguruprofilerProfilingGroup <a name="CodeguruprofilerProfilingGroup" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group awscc_codeguruprofiler_profiling_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeguruprofilerProfilingGroup(Construct Scope, string Id, CodeguruprofilerProfilingGroupConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig">CodeguruprofilerProfilingGroupConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig">CodeguruprofilerProfilingGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentPermissions">PutAgentPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAnomalyDetectionNotificationConfiguration">PutAnomalyDetectionNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAgentPermissions">ResetAgentPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAnomalyDetectionNotificationConfiguration">ResetAnomalyDetectionNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetComputePlatform">ResetComputePlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAgentPermissions` <a name="PutAgentPermissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentPermissions"></a>

```csharp
private void PutAgentPermissions(CodeguruprofilerProfilingGroupAgentPermissions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAgentPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a>

---

##### `PutAnomalyDetectionNotificationConfiguration` <a name="PutAnomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAnomalyDetectionNotificationConfiguration"></a>

```csharp
private void PutAnomalyDetectionNotificationConfiguration(IResolvable|CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putAnomalyDetectionNotificationConfiguration.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>[]

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putTags"></a>

```csharp
private void PutTags(IResolvable|CodeguruprofilerProfilingGroupTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>[]

---

##### `ResetAgentPermissions` <a name="ResetAgentPermissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAgentPermissions"></a>

```csharp
private void ResetAgentPermissions()
```

##### `ResetAnomalyDetectionNotificationConfiguration` <a name="ResetAnomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetAnomalyDetectionNotificationConfiguration"></a>

```csharp
private void ResetAnomalyDetectionNotificationConfiguration()
```

##### `ResetComputePlatform` <a name="ResetComputePlatform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetComputePlatform"></a>

```csharp
private void ResetComputePlatform()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CodeguruprofilerProfilingGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodeguruprofilerProfilingGroup.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodeguruprofilerProfilingGroup.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodeguruprofilerProfilingGroup.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

CodeguruprofilerProfilingGroup.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a CodeguruprofilerProfilingGroup resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodeguruprofilerProfilingGroup to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodeguruprofilerProfilingGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the CodeguruprofilerProfilingGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentPermissions">AgentPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference">CodeguruprofilerProfilingGroupAgentPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfiguration">AnomalyDetectionNotificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList">CodeguruprofilerProfilingGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentPermissionsInput">AgentPermissionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfigurationInput">AnomalyDetectionNotificationConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatformInput">ComputePlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.profilingGroupNameInput">ProfilingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatform">ComputePlatform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.profilingGroupName">ProfilingGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AgentPermissions`<sup>Required</sup> <a name="AgentPermissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentPermissions"></a>

```csharp
public CodeguruprofilerProfilingGroupAgentPermissionsOutputReference AgentPermissions { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference">CodeguruprofilerProfilingGroupAgentPermissionsOutputReference</a>

---

##### `AnomalyDetectionNotificationConfiguration`<sup>Required</sup> <a name="AnomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfiguration"></a>

```csharp
public CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList AnomalyDetectionNotificationConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tags"></a>

```csharp
public CodeguruprofilerProfilingGroupTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList">CodeguruprofilerProfilingGroupTagsList</a>

---

##### `AgentPermissionsInput`<sup>Optional</sup> <a name="AgentPermissionsInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.agentPermissionsInput"></a>

```csharp
public IResolvable|CodeguruprofilerProfilingGroupAgentPermissions AgentPermissionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a>

---

##### `AnomalyDetectionNotificationConfigurationInput`<sup>Optional</sup> <a name="AnomalyDetectionNotificationConfigurationInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.anomalyDetectionNotificationConfigurationInput"></a>

```csharp
public IResolvable|CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration[] AnomalyDetectionNotificationConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>[]

---

##### `ComputePlatformInput`<sup>Optional</sup> <a name="ComputePlatformInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatformInput"></a>

```csharp
public string ComputePlatformInput { get; }
```

- *Type:* string

---

##### `ProfilingGroupNameInput`<sup>Optional</sup> <a name="ProfilingGroupNameInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.profilingGroupNameInput"></a>

```csharp
public string ProfilingGroupNameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tagsInput"></a>

```csharp
public IResolvable|CodeguruprofilerProfilingGroupTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>[]

---

##### `ComputePlatform`<sup>Required</sup> <a name="ComputePlatform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.computePlatform"></a>

```csharp
public string ComputePlatform { get; }
```

- *Type:* string

---

##### `ProfilingGroupName`<sup>Required</sup> <a name="ProfilingGroupName" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.profilingGroupName"></a>

```csharp
public string ProfilingGroupName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroup.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodeguruprofilerProfilingGroupAgentPermissions <a name="CodeguruprofilerProfilingGroupAgentPermissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeguruprofilerProfilingGroupAgentPermissions {
    string[] Principals = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions.property.principals">Principals</a></code> | <code>string[]</code> | The principals for the agent permissions. |

---

##### `Principals`<sup>Optional</sup> <a name="Principals" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions.property.principals"></a>

```csharp
public string[] Principals { get; set; }
```

- *Type:* string[]

The principals for the agent permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group#principals CodeguruprofilerProfilingGroup#principals}

---

### CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration <a name="CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration {
    string ChannelId = null,
    string ChannelUri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.property.channelId">ChannelId</a></code> | <code>string</code> | Unique identifier for each Channel in the notification configuration of a Profiling Group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.property.channelUri">ChannelUri</a></code> | <code>string</code> | Unique arn of the resource to be used for notifications. |

---

##### `ChannelId`<sup>Optional</sup> <a name="ChannelId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.property.channelId"></a>

```csharp
public string ChannelId { get; set; }
```

- *Type:* string

Unique identifier for each Channel in the notification configuration of a Profiling Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group#channel_id CodeguruprofilerProfilingGroup#channel_id}

---

##### `ChannelUri`<sup>Optional</sup> <a name="ChannelUri" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration.property.channelUri"></a>

```csharp
public string ChannelUri { get; set; }
```

- *Type:* string

Unique arn of the resource to be used for notifications.

We support a valid SNS topic arn as a channel uri.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group#channel_uri CodeguruprofilerProfilingGroup#channel_uri}

---

### CodeguruprofilerProfilingGroupConfig <a name="CodeguruprofilerProfilingGroupConfig" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeguruprofilerProfilingGroupConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ProfilingGroupName,
    CodeguruprofilerProfilingGroupAgentPermissions AgentPermissions = null,
    IResolvable|CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration[] AnomalyDetectionNotificationConfiguration = null,
    string ComputePlatform = null,
    IResolvable|CodeguruprofilerProfilingGroupTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.profilingGroupName">ProfilingGroupName</a></code> | <code>string</code> | The name of the profiling group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.agentPermissions">AgentPermissions</a></code> | <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a></code> | The agent permissions attached to this profiling group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.anomalyDetectionNotificationConfiguration">AnomalyDetectionNotificationConfiguration</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>[]</code> | Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.computePlatform">ComputePlatform</a></code> | <code>string</code> | The compute platform of the profiling group. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>[]</code> | The tags associated with a profiling group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ProfilingGroupName`<sup>Required</sup> <a name="ProfilingGroupName" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.profilingGroupName"></a>

```csharp
public string ProfilingGroupName { get; set; }
```

- *Type:* string

The name of the profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group#profiling_group_name CodeguruprofilerProfilingGroup#profiling_group_name}

---

##### `AgentPermissions`<sup>Optional</sup> <a name="AgentPermissions" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.agentPermissions"></a>

```csharp
public CodeguruprofilerProfilingGroupAgentPermissions AgentPermissions { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a>

The agent permissions attached to this profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group#agent_permissions CodeguruprofilerProfilingGroup#agent_permissions}

---

##### `AnomalyDetectionNotificationConfiguration`<sup>Optional</sup> <a name="AnomalyDetectionNotificationConfiguration" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.anomalyDetectionNotificationConfiguration"></a>

```csharp
public IResolvable|CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration[] AnomalyDetectionNotificationConfiguration { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>[]

Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group#anomaly_detection_notification_configuration CodeguruprofilerProfilingGroup#anomaly_detection_notification_configuration}

---

##### `ComputePlatform`<sup>Optional</sup> <a name="ComputePlatform" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.computePlatform"></a>

```csharp
public string ComputePlatform { get; set; }
```

- *Type:* string

The compute platform of the profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group#compute_platform CodeguruprofilerProfilingGroup#compute_platform}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupConfig.property.tags"></a>

```csharp
public IResolvable|CodeguruprofilerProfilingGroupTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>[]

The tags associated with a profiling group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/codeguruprofiler_profiling_group#tags CodeguruprofilerProfilingGroup#tags}

---

### CodeguruprofilerProfilingGroupTags <a name="CodeguruprofilerProfilingGroupTags" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeguruprofilerProfilingGroupTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.property.key">Key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.property.value">Value</a></code> | <code>string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : /

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : /

---

## Classes <a name="Classes" id="Classes"></a>

### CodeguruprofilerProfilingGroupAgentPermissionsOutputReference <a name="CodeguruprofilerProfilingGroupAgentPermissionsOutputReference" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeguruprofilerProfilingGroupAgentPermissionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resetPrincipals">ResetPrincipals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrincipals` <a name="ResetPrincipals" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.resetPrincipals"></a>

```csharp
private void ResetPrincipals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principals">Principals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principalsInput"></a>

```csharp
public string[] PrincipalsInput { get; }
```

- *Type:* string[]

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.principals"></a>

```csharp
public string[] Principals { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodeguruprofilerProfilingGroupAgentPermissions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAgentPermissions">CodeguruprofilerProfilingGroupAgentPermissions</a>

---


### CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList <a name="CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.get"></a>

```csharp
private CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>[]

---


### CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference <a name="CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resetChannelId">ResetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resetChannelUri">ResetChannelUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelId` <a name="ResetChannelId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resetChannelId"></a>

```csharp
private void ResetChannelId()
```

##### `ResetChannelUri` <a name="ResetChannelUri" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.resetChannelUri"></a>

```csharp
private void ResetChannelUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelIdInput">ChannelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUriInput">ChannelUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelId">ChannelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUri">ChannelUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelIdInput"></a>

```csharp
public string ChannelIdInput { get; }
```

- *Type:* string

---

##### `ChannelUriInput`<sup>Optional</sup> <a name="ChannelUriInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUriInput"></a>

```csharp
public string ChannelUriInput { get; }
```

- *Type:* string

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelId"></a>

```csharp
public string ChannelId { get; }
```

- *Type:* string

---

##### `ChannelUri`<sup>Required</sup> <a name="ChannelUri" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.channelUri"></a>

```csharp
public string ChannelUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration">CodeguruprofilerProfilingGroupAnomalyDetectionNotificationConfiguration</a>

---


### CodeguruprofilerProfilingGroupTagsList <a name="CodeguruprofilerProfilingGroupTagsList" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeguruprofilerProfilingGroupTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.get"></a>

```csharp
private CodeguruprofilerProfilingGroupTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsList.property.internalValue"></a>

```csharp
public IResolvable|CodeguruprofilerProfilingGroupTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>[]

---


### CodeguruprofilerProfilingGroupTagsOutputReference <a name="CodeguruprofilerProfilingGroupTagsOutputReference" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new CodeguruprofilerProfilingGroupTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|CodeguruprofilerProfilingGroupTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.codeguruprofilerProfilingGroup.CodeguruprofilerProfilingGroupTags">CodeguruprofilerProfilingGroupTags</a>

---



