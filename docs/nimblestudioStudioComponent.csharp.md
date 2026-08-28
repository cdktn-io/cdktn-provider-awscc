# `nimblestudioStudioComponent` Submodule <a name="`nimblestudioStudioComponent` Submodule" id="@cdktn/provider-awscc.nimblestudioStudioComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NimblestudioStudioComponent <a name="NimblestudioStudioComponent" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component awscc_nimblestudio_studio_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponent(Construct Scope, string Id, NimblestudioStudioComponentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig">NimblestudioStudioComponentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig">NimblestudioStudioComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putInitializationScripts">PutInitializationScripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putScriptParameters">PutScriptParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetConfiguration">ResetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetEc2SecurityGroupIds">ResetEc2SecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetInitializationScripts">ResetInitializationScripts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetScriptParameters">ResetScriptParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetSubtype">ResetSubtype</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putConfiguration"></a>

```csharp
private void PutConfiguration(NimblestudioStudioComponentConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a>

---

##### `PutInitializationScripts` <a name="PutInitializationScripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putInitializationScripts"></a>

```csharp
private void PutInitializationScripts(IResolvable|NimblestudioStudioComponentInitializationScripts[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putInitializationScripts.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>[]

---

##### `PutScriptParameters` <a name="PutScriptParameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putScriptParameters"></a>

```csharp
private void PutScriptParameters(IResolvable|NimblestudioStudioComponentScriptParameters[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.putScriptParameters.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>[]

---

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetConfiguration"></a>

```csharp
private void ResetConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEc2SecurityGroupIds` <a name="ResetEc2SecurityGroupIds" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetEc2SecurityGroupIds"></a>

```csharp
private void ResetEc2SecurityGroupIds()
```

##### `ResetInitializationScripts` <a name="ResetInitializationScripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetInitializationScripts"></a>

```csharp
private void ResetInitializationScripts()
```

##### `ResetScriptParameters` <a name="ResetScriptParameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetScriptParameters"></a>

```csharp
private void ResetScriptParameters()
```

##### `ResetSubtype` <a name="ResetSubtype" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetSubtype"></a>

```csharp
private void ResetSubtype()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NimblestudioStudioComponent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NimblestudioStudioComponent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NimblestudioStudioComponent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NimblestudioStudioComponent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

NimblestudioStudioComponent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a NimblestudioStudioComponent resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NimblestudioStudioComponent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NimblestudioStudioComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the NimblestudioStudioComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference">NimblestudioStudioComponentConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.initializationScripts">InitializationScripts</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList">NimblestudioStudioComponentInitializationScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.scriptParameters">ScriptParameters</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList">NimblestudioStudioComponentScriptParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioComponentId">StudioComponentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.configurationInput">ConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.ec2SecurityGroupIdsInput">Ec2SecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.initializationScriptsInput">InitializationScriptsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.scriptParametersInput">ScriptParametersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioIdInput">StudioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.subtypeInput">SubtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.ec2SecurityGroupIds">Ec2SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioId">StudioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.subtype">Subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.configuration"></a>

```csharp
public NimblestudioStudioComponentConfigurationOutputReference Configuration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference">NimblestudioStudioComponentConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitializationScripts`<sup>Required</sup> <a name="InitializationScripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.initializationScripts"></a>

```csharp
public NimblestudioStudioComponentInitializationScriptsList InitializationScripts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList">NimblestudioStudioComponentInitializationScriptsList</a>

---

##### `ScriptParameters`<sup>Required</sup> <a name="ScriptParameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.scriptParameters"></a>

```csharp
public NimblestudioStudioComponentScriptParametersList ScriptParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList">NimblestudioStudioComponentScriptParametersList</a>

---

##### `StudioComponentId`<sup>Required</sup> <a name="StudioComponentId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioComponentId"></a>

```csharp
public string StudioComponentId { get; }
```

- *Type:* string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.configurationInput"></a>

```csharp
public IResolvable|NimblestudioStudioComponentConfiguration ConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `Ec2SecurityGroupIdsInput`<sup>Optional</sup> <a name="Ec2SecurityGroupIdsInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.ec2SecurityGroupIdsInput"></a>

```csharp
public string[] Ec2SecurityGroupIdsInput { get; }
```

- *Type:* string[]

---

##### `InitializationScriptsInput`<sup>Optional</sup> <a name="InitializationScriptsInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.initializationScriptsInput"></a>

```csharp
public IResolvable|NimblestudioStudioComponentInitializationScripts[] InitializationScriptsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScriptParametersInput`<sup>Optional</sup> <a name="ScriptParametersInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.scriptParametersInput"></a>

```csharp
public IResolvable|NimblestudioStudioComponentScriptParameters[] ScriptParametersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>[]

---

##### `StudioIdInput`<sup>Optional</sup> <a name="StudioIdInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioIdInput"></a>

```csharp
public string StudioIdInput { get; }
```

- *Type:* string

---

##### `SubtypeInput`<sup>Optional</sup> <a name="SubtypeInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.subtypeInput"></a>

```csharp
public string SubtypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Ec2SecurityGroupIds`<sup>Required</sup> <a name="Ec2SecurityGroupIds" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.ec2SecurityGroupIds"></a>

```csharp
public string[] Ec2SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StudioId`<sup>Required</sup> <a name="StudioId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.studioId"></a>

```csharp
public string StudioId { get; }
```

- *Type:* string

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.subtype"></a>

```csharp
public string Subtype { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NimblestudioStudioComponentConfig <a name="NimblestudioStudioComponentConfig" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string StudioId,
    string Type,
    NimblestudioStudioComponentConfiguration Configuration = null,
    string Description = null,
    string[] Ec2SecurityGroupIds = null,
    IResolvable|NimblestudioStudioComponentInitializationScripts[] InitializationScripts = null,
    IResolvable|NimblestudioStudioComponentScriptParameters[] ScriptParameters = null,
    string Subtype = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.studioId">StudioId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#studio_id NimblestudioStudioComponent#studio_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#type NimblestudioStudioComponent#type}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#configuration NimblestudioStudioComponent#configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#description NimblestudioStudioComponent#description}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.ec2SecurityGroupIds">Ec2SecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#ec_2_security_group_ids NimblestudioStudioComponent#ec_2_security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.initializationScripts">InitializationScripts</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#initialization_scripts NimblestudioStudioComponent#initialization_scripts}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.scriptParameters">ScriptParameters</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#script_parameters NimblestudioStudioComponent#script_parameters}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.subtype">Subtype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#subtype NimblestudioStudioComponent#subtype}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#tags NimblestudioStudioComponent#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}.

---

##### `StudioId`<sup>Required</sup> <a name="StudioId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.studioId"></a>

```csharp
public string StudioId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#studio_id NimblestudioStudioComponent#studio_id}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#type NimblestudioStudioComponent#type}.

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.configuration"></a>

```csharp
public NimblestudioStudioComponentConfiguration Configuration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#configuration NimblestudioStudioComponent#configuration}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#description NimblestudioStudioComponent#description}.

---

##### `Ec2SecurityGroupIds`<sup>Optional</sup> <a name="Ec2SecurityGroupIds" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.ec2SecurityGroupIds"></a>

```csharp
public string[] Ec2SecurityGroupIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#ec_2_security_group_ids NimblestudioStudioComponent#ec_2_security_group_ids}.

---

##### `InitializationScripts`<sup>Optional</sup> <a name="InitializationScripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.initializationScripts"></a>

```csharp
public IResolvable|NimblestudioStudioComponentInitializationScripts[] InitializationScripts { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#initialization_scripts NimblestudioStudioComponent#initialization_scripts}.

---

##### `ScriptParameters`<sup>Optional</sup> <a name="ScriptParameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.scriptParameters"></a>

```csharp
public IResolvable|NimblestudioStudioComponentScriptParameters[] ScriptParameters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#script_parameters NimblestudioStudioComponent#script_parameters}.

---

##### `Subtype`<sup>Optional</sup> <a name="Subtype" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.subtype"></a>

```csharp
public string Subtype { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#subtype NimblestudioStudioComponent#subtype}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#tags NimblestudioStudioComponent#tags}.

---

### NimblestudioStudioComponentConfiguration <a name="NimblestudioStudioComponentConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentConfiguration {
    NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration ActiveDirectoryConfiguration = null,
    NimblestudioStudioComponentConfigurationComputeFarmConfiguration ComputeFarmConfiguration = null,
    NimblestudioStudioComponentConfigurationLicenseServiceConfiguration LicenseServiceConfiguration = null,
    NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration SharedFileSystemConfiguration = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.activeDirectoryConfiguration">ActiveDirectoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#active_directory_configuration NimblestudioStudioComponent#active_directory_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.computeFarmConfiguration">ComputeFarmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#compute_farm_configuration NimblestudioStudioComponent#compute_farm_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.licenseServiceConfiguration">LicenseServiceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#license_service_configuration NimblestudioStudioComponent#license_service_configuration}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.sharedFileSystemConfiguration">SharedFileSystemConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#shared_file_system_configuration NimblestudioStudioComponent#shared_file_system_configuration}. |

---

##### `ActiveDirectoryConfiguration`<sup>Optional</sup> <a name="ActiveDirectoryConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.activeDirectoryConfiguration"></a>

```csharp
public NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration ActiveDirectoryConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#active_directory_configuration NimblestudioStudioComponent#active_directory_configuration}.

---

##### `ComputeFarmConfiguration`<sup>Optional</sup> <a name="ComputeFarmConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.computeFarmConfiguration"></a>

```csharp
public NimblestudioStudioComponentConfigurationComputeFarmConfiguration ComputeFarmConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#compute_farm_configuration NimblestudioStudioComponent#compute_farm_configuration}.

---

##### `LicenseServiceConfiguration`<sup>Optional</sup> <a name="LicenseServiceConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.licenseServiceConfiguration"></a>

```csharp
public NimblestudioStudioComponentConfigurationLicenseServiceConfiguration LicenseServiceConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#license_service_configuration NimblestudioStudioComponent#license_service_configuration}.

---

##### `SharedFileSystemConfiguration`<sup>Optional</sup> <a name="SharedFileSystemConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration.property.sharedFileSystemConfiguration"></a>

```csharp
public NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration SharedFileSystemConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#shared_file_system_configuration NimblestudioStudioComponent#shared_file_system_configuration}.

---

### NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration {
    IResolvable|NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes[] ComputerAttributes = null,
    string DirectoryId = null,
    string OrganizationalUnitDistinguishedName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.computerAttributes">ComputerAttributes</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#computer_attributes NimblestudioStudioComponent#computer_attributes}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.directoryId">DirectoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#directory_id NimblestudioStudioComponent#directory_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#organizational_unit_distinguished_name NimblestudioStudioComponent#organizational_unit_distinguished_name}. |

---

##### `ComputerAttributes`<sup>Optional</sup> <a name="ComputerAttributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.computerAttributes"></a>

```csharp
public IResolvable|NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes[] ComputerAttributes { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#computer_attributes NimblestudioStudioComponent#computer_attributes}.

---

##### `DirectoryId`<sup>Optional</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.directoryId"></a>

```csharp
public string DirectoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#directory_id NimblestudioStudioComponent#directory_id}.

---

##### `OrganizationalUnitDistinguishedName`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration.property.organizationalUnitDistinguishedName"></a>

```csharp
public string OrganizationalUnitDistinguishedName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#organizational_unit_distinguished_name NimblestudioStudioComponent#organizational_unit_distinguished_name}.

---

### NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes {
    string Name = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#value NimblestudioStudioComponent#value}. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#name NimblestudioStudioComponent#name}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#value NimblestudioStudioComponent#value}.

---

### NimblestudioStudioComponentConfigurationComputeFarmConfiguration <a name="NimblestudioStudioComponentConfigurationComputeFarmConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentConfigurationComputeFarmConfiguration {
    string ActiveDirectoryUser = null,
    string Endpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.property.activeDirectoryUser">ActiveDirectoryUser</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#active_directory_user NimblestudioStudioComponent#active_directory_user}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.property.endpoint">Endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}. |

---

##### `ActiveDirectoryUser`<sup>Optional</sup> <a name="ActiveDirectoryUser" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.property.activeDirectoryUser"></a>

```csharp
public string ActiveDirectoryUser { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#active_directory_user NimblestudioStudioComponent#active_directory_user}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}.

---

### NimblestudioStudioComponentConfigurationLicenseServiceConfiguration <a name="NimblestudioStudioComponentConfigurationLicenseServiceConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentConfigurationLicenseServiceConfiguration {
    string Endpoint = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration.property.endpoint">Endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}. |

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}.

---

### NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration <a name="NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration {
    string Endpoint = null,
    string FileSystemId = null,
    string LinuxMountPoint = null,
    string ShareName = null,
    string WindowsMountDrive = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.endpoint">Endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#file_system_id NimblestudioStudioComponent#file_system_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.linuxMountPoint">LinuxMountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#linux_mount_point NimblestudioStudioComponent#linux_mount_point}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.shareName">ShareName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#share_name NimblestudioStudioComponent#share_name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.windowsMountDrive">WindowsMountDrive</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#windows_mount_drive NimblestudioStudioComponent#windows_mount_drive}. |

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#endpoint NimblestudioStudioComponent#endpoint}.

---

##### `FileSystemId`<sup>Optional</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#file_system_id NimblestudioStudioComponent#file_system_id}.

---

##### `LinuxMountPoint`<sup>Optional</sup> <a name="LinuxMountPoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.linuxMountPoint"></a>

```csharp
public string LinuxMountPoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#linux_mount_point NimblestudioStudioComponent#linux_mount_point}.

---

##### `ShareName`<sup>Optional</sup> <a name="ShareName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.shareName"></a>

```csharp
public string ShareName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#share_name NimblestudioStudioComponent#share_name}.

---

##### `WindowsMountDrive`<sup>Optional</sup> <a name="WindowsMountDrive" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration.property.windowsMountDrive"></a>

```csharp
public string WindowsMountDrive { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#windows_mount_drive NimblestudioStudioComponent#windows_mount_drive}.

---

### NimblestudioStudioComponentInitializationScripts <a name="NimblestudioStudioComponentInitializationScripts" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentInitializationScripts {
    string LaunchProfileProtocolVersion = null,
    string Platform = null,
    string RunContext = null,
    string Script = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.launchProfileProtocolVersion">LaunchProfileProtocolVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#launch_profile_protocol_version NimblestudioStudioComponent#launch_profile_protocol_version}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.platform">Platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#platform NimblestudioStudioComponent#platform}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.runContext">RunContext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#run_context NimblestudioStudioComponent#run_context}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.script">Script</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#script NimblestudioStudioComponent#script}. |

---

##### `LaunchProfileProtocolVersion`<sup>Optional</sup> <a name="LaunchProfileProtocolVersion" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.launchProfileProtocolVersion"></a>

```csharp
public string LaunchProfileProtocolVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#launch_profile_protocol_version NimblestudioStudioComponent#launch_profile_protocol_version}.

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.platform"></a>

```csharp
public string Platform { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#platform NimblestudioStudioComponent#platform}.

---

##### `RunContext`<sup>Optional</sup> <a name="RunContext" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.runContext"></a>

```csharp
public string RunContext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#run_context NimblestudioStudioComponent#run_context}.

---

##### `Script`<sup>Optional</sup> <a name="Script" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts.property.script"></a>

```csharp
public string Script { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#script NimblestudioStudioComponent#script}.

---

### NimblestudioStudioComponentScriptParameters <a name="NimblestudioStudioComponentScriptParameters" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentScriptParameters {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#key NimblestudioStudioComponent#key}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#value NimblestudioStudioComponent#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#key NimblestudioStudioComponent#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_studio_component#value NimblestudioStudioComponent#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get"></a>

```csharp
private NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList.property.internalValue"></a>

```csharp
public IResolvable|NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>[]

---


### NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>

---


### NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.putComputerAttributes">PutComputerAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetComputerAttributes">ResetComputerAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetDirectoryId">ResetDirectoryId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetOrganizationalUnitDistinguishedName">ResetOrganizationalUnitDistinguishedName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutComputerAttributes` <a name="PutComputerAttributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.putComputerAttributes"></a>

```csharp
private void PutComputerAttributes(IResolvable|NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.putComputerAttributes.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>[]

---

##### `ResetComputerAttributes` <a name="ResetComputerAttributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetComputerAttributes"></a>

```csharp
private void ResetComputerAttributes()
```

##### `ResetDirectoryId` <a name="ResetDirectoryId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetDirectoryId"></a>

```csharp
private void ResetDirectoryId()
```

##### `ResetOrganizationalUnitDistinguishedName` <a name="ResetOrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.resetOrganizationalUnitDistinguishedName"></a>

```csharp
private void ResetOrganizationalUnitDistinguishedName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributes">ComputerAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributesInput">ComputerAttributesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryIdInput">DirectoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedNameInput">OrganizationalUnitDistinguishedNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryId">DirectoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName">OrganizationalUnitDistinguishedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ComputerAttributes`<sup>Required</sup> <a name="ComputerAttributes" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributes"></a>

```csharp
public NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList ComputerAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributesList</a>

---

##### `ComputerAttributesInput`<sup>Optional</sup> <a name="ComputerAttributesInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.computerAttributesInput"></a>

```csharp
public IResolvable|NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes[] ComputerAttributesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationComputerAttributes</a>[]

---

##### `DirectoryIdInput`<sup>Optional</sup> <a name="DirectoryIdInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryIdInput"></a>

```csharp
public string DirectoryIdInput { get; }
```

- *Type:* string

---

##### `OrganizationalUnitDistinguishedNameInput`<sup>Optional</sup> <a name="OrganizationalUnitDistinguishedNameInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedNameInput"></a>

```csharp
public string OrganizationalUnitDistinguishedNameInput { get; }
```

- *Type:* string

---

##### `DirectoryId`<sup>Required</sup> <a name="DirectoryId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.directoryId"></a>

```csharp
public string DirectoryId { get; }
```

- *Type:* string

---

##### `OrganizationalUnitDistinguishedName`<sup>Required</sup> <a name="OrganizationalUnitDistinguishedName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.organizationalUnitDistinguishedName"></a>

```csharp
public string OrganizationalUnitDistinguishedName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

---


### NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resetActiveDirectoryUser">ResetActiveDirectoryUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActiveDirectoryUser` <a name="ResetActiveDirectoryUser" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resetActiveDirectoryUser"></a>

```csharp
private void ResetActiveDirectoryUser()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUserInput">ActiveDirectoryUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUser">ActiveDirectoryUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDirectoryUserInput`<sup>Optional</sup> <a name="ActiveDirectoryUserInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUserInput"></a>

```csharp
public string ActiveDirectoryUserInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `ActiveDirectoryUser`<sup>Required</sup> <a name="ActiveDirectoryUser" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.activeDirectoryUser"></a>

```csharp
public string ActiveDirectoryUser { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NimblestudioStudioComponentConfigurationComputeFarmConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

---


### NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NimblestudioStudioComponentConfigurationLicenseServiceConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

---


### NimblestudioStudioComponentConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putActiveDirectoryConfiguration">PutActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putComputeFarmConfiguration">PutComputeFarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putLicenseServiceConfiguration">PutLicenseServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putSharedFileSystemConfiguration">PutSharedFileSystemConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetActiveDirectoryConfiguration">ResetActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetComputeFarmConfiguration">ResetComputeFarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetLicenseServiceConfiguration">ResetLicenseServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetSharedFileSystemConfiguration">ResetSharedFileSystemConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActiveDirectoryConfiguration` <a name="PutActiveDirectoryConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putActiveDirectoryConfiguration"></a>

```csharp
private void PutActiveDirectoryConfiguration(NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putActiveDirectoryConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

---

##### `PutComputeFarmConfiguration` <a name="PutComputeFarmConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putComputeFarmConfiguration"></a>

```csharp
private void PutComputeFarmConfiguration(NimblestudioStudioComponentConfigurationComputeFarmConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putComputeFarmConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

---

##### `PutLicenseServiceConfiguration` <a name="PutLicenseServiceConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putLicenseServiceConfiguration"></a>

```csharp
private void PutLicenseServiceConfiguration(NimblestudioStudioComponentConfigurationLicenseServiceConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putLicenseServiceConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

---

##### `PutSharedFileSystemConfiguration` <a name="PutSharedFileSystemConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putSharedFileSystemConfiguration"></a>

```csharp
private void PutSharedFileSystemConfiguration(NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.putSharedFileSystemConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

---

##### `ResetActiveDirectoryConfiguration` <a name="ResetActiveDirectoryConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetActiveDirectoryConfiguration"></a>

```csharp
private void ResetActiveDirectoryConfiguration()
```

##### `ResetComputeFarmConfiguration` <a name="ResetComputeFarmConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetComputeFarmConfiguration"></a>

```csharp
private void ResetComputeFarmConfiguration()
```

##### `ResetLicenseServiceConfiguration` <a name="ResetLicenseServiceConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetLicenseServiceConfiguration"></a>

```csharp
private void ResetLicenseServiceConfiguration()
```

##### `ResetSharedFileSystemConfiguration` <a name="ResetSharedFileSystemConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.resetSharedFileSystemConfiguration"></a>

```csharp
private void ResetSharedFileSystemConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfiguration">ActiveDirectoryConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfiguration">ComputeFarmConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference">NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfiguration">LicenseServiceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference">NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfiguration">SharedFileSystemConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference">NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfigurationInput">ActiveDirectoryConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfigurationInput">ComputeFarmConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfigurationInput">LicenseServiceConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfigurationInput">SharedFileSystemConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveDirectoryConfiguration`<sup>Required</sup> <a name="ActiveDirectoryConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfiguration"></a>

```csharp
public NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference ActiveDirectoryConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference">NimblestudioStudioComponentConfigurationActiveDirectoryConfigurationOutputReference</a>

---

##### `ComputeFarmConfiguration`<sup>Required</sup> <a name="ComputeFarmConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfiguration"></a>

```csharp
public NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference ComputeFarmConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference">NimblestudioStudioComponentConfigurationComputeFarmConfigurationOutputReference</a>

---

##### `LicenseServiceConfiguration`<sup>Required</sup> <a name="LicenseServiceConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfiguration"></a>

```csharp
public NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference LicenseServiceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference">NimblestudioStudioComponentConfigurationLicenseServiceConfigurationOutputReference</a>

---

##### `SharedFileSystemConfiguration`<sup>Required</sup> <a name="SharedFileSystemConfiguration" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfiguration"></a>

```csharp
public NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference SharedFileSystemConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference">NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference</a>

---

##### `ActiveDirectoryConfigurationInput`<sup>Optional</sup> <a name="ActiveDirectoryConfigurationInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.activeDirectoryConfigurationInput"></a>

```csharp
public IResolvable|NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration ActiveDirectoryConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration">NimblestudioStudioComponentConfigurationActiveDirectoryConfiguration</a>

---

##### `ComputeFarmConfigurationInput`<sup>Optional</sup> <a name="ComputeFarmConfigurationInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.computeFarmConfigurationInput"></a>

```csharp
public IResolvable|NimblestudioStudioComponentConfigurationComputeFarmConfiguration ComputeFarmConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationComputeFarmConfiguration">NimblestudioStudioComponentConfigurationComputeFarmConfiguration</a>

---

##### `LicenseServiceConfigurationInput`<sup>Optional</sup> <a name="LicenseServiceConfigurationInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.licenseServiceConfigurationInput"></a>

```csharp
public IResolvable|NimblestudioStudioComponentConfigurationLicenseServiceConfiguration LicenseServiceConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationLicenseServiceConfiguration">NimblestudioStudioComponentConfigurationLicenseServiceConfiguration</a>

---

##### `SharedFileSystemConfigurationInput`<sup>Optional</sup> <a name="SharedFileSystemConfigurationInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.sharedFileSystemConfigurationInput"></a>

```csharp
public IResolvable|NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration SharedFileSystemConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NimblestudioStudioComponentConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfiguration">NimblestudioStudioComponentConfiguration</a>

---


### NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference <a name="NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetFileSystemId">ResetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetLinuxMountPoint">ResetLinuxMountPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetShareName">ResetShareName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetWindowsMountDrive">ResetWindowsMountDrive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetFileSystemId` <a name="ResetFileSystemId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetFileSystemId"></a>

```csharp
private void ResetFileSystemId()
```

##### `ResetLinuxMountPoint` <a name="ResetLinuxMountPoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetLinuxMountPoint"></a>

```csharp
private void ResetLinuxMountPoint()
```

##### `ResetShareName` <a name="ResetShareName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetShareName"></a>

```csharp
private void ResetShareName()
```

##### `ResetWindowsMountDrive` <a name="ResetWindowsMountDrive" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.resetWindowsMountDrive"></a>

```csharp
private void ResetWindowsMountDrive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPointInput">LinuxMountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareNameInput">ShareNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDriveInput">WindowsMountDriveInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPoint">LinuxMountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareName">ShareName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDrive">WindowsMountDrive</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemIdInput"></a>

```csharp
public string FileSystemIdInput { get; }
```

- *Type:* string

---

##### `LinuxMountPointInput`<sup>Optional</sup> <a name="LinuxMountPointInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPointInput"></a>

```csharp
public string LinuxMountPointInput { get; }
```

- *Type:* string

---

##### `ShareNameInput`<sup>Optional</sup> <a name="ShareNameInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareNameInput"></a>

```csharp
public string ShareNameInput { get; }
```

- *Type:* string

---

##### `WindowsMountDriveInput`<sup>Optional</sup> <a name="WindowsMountDriveInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDriveInput"></a>

```csharp
public string WindowsMountDriveInput { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.fileSystemId"></a>

```csharp
public string FileSystemId { get; }
```

- *Type:* string

---

##### `LinuxMountPoint`<sup>Required</sup> <a name="LinuxMountPoint" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.linuxMountPoint"></a>

```csharp
public string LinuxMountPoint { get; }
```

- *Type:* string

---

##### `ShareName`<sup>Required</sup> <a name="ShareName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.shareName"></a>

```csharp
public string ShareName { get; }
```

- *Type:* string

---

##### `WindowsMountDrive`<sup>Required</sup> <a name="WindowsMountDrive" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.windowsMountDrive"></a>

```csharp
public string WindowsMountDrive { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration">NimblestudioStudioComponentConfigurationSharedFileSystemConfiguration</a>

---


### NimblestudioStudioComponentInitializationScriptsList <a name="NimblestudioStudioComponentInitializationScriptsList" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentInitializationScriptsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.get"></a>

```csharp
private NimblestudioStudioComponentInitializationScriptsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsList.property.internalValue"></a>

```csharp
public IResolvable|NimblestudioStudioComponentInitializationScripts[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>[]

---


### NimblestudioStudioComponentInitializationScriptsOutputReference <a name="NimblestudioStudioComponentInitializationScriptsOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentInitializationScriptsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetLaunchProfileProtocolVersion">ResetLaunchProfileProtocolVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetPlatform">ResetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetRunContext">ResetRunContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetScript">ResetScript</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLaunchProfileProtocolVersion` <a name="ResetLaunchProfileProtocolVersion" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetLaunchProfileProtocolVersion"></a>

```csharp
private void ResetLaunchProfileProtocolVersion()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetPlatform"></a>

```csharp
private void ResetPlatform()
```

##### `ResetRunContext` <a name="ResetRunContext" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetRunContext"></a>

```csharp
private void ResetRunContext()
```

##### `ResetScript` <a name="ResetScript" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.resetScript"></a>

```csharp
private void ResetScript()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersionInput">LaunchProfileProtocolVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.platformInput">PlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.runContextInput">RunContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.scriptInput">ScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersion">LaunchProfileProtocolVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.runContext">RunContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.script">Script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LaunchProfileProtocolVersionInput`<sup>Optional</sup> <a name="LaunchProfileProtocolVersionInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersionInput"></a>

```csharp
public string LaunchProfileProtocolVersionInput { get; }
```

- *Type:* string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.platformInput"></a>

```csharp
public string PlatformInput { get; }
```

- *Type:* string

---

##### `RunContextInput`<sup>Optional</sup> <a name="RunContextInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.runContextInput"></a>

```csharp
public string RunContextInput { get; }
```

- *Type:* string

---

##### `ScriptInput`<sup>Optional</sup> <a name="ScriptInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.scriptInput"></a>

```csharp
public string ScriptInput { get; }
```

- *Type:* string

---

##### `LaunchProfileProtocolVersion`<sup>Required</sup> <a name="LaunchProfileProtocolVersion" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.launchProfileProtocolVersion"></a>

```csharp
public string LaunchProfileProtocolVersion { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `RunContext`<sup>Required</sup> <a name="RunContext" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.runContext"></a>

```csharp
public string RunContext { get; }
```

- *Type:* string

---

##### `Script`<sup>Required</sup> <a name="Script" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.script"></a>

```csharp
public string Script { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScriptsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NimblestudioStudioComponentInitializationScripts InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentInitializationScripts">NimblestudioStudioComponentInitializationScripts</a>

---


### NimblestudioStudioComponentScriptParametersList <a name="NimblestudioStudioComponentScriptParametersList" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentScriptParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.get"></a>

```csharp
private NimblestudioStudioComponentScriptParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersList.property.internalValue"></a>

```csharp
public IResolvable|NimblestudioStudioComponentScriptParameters[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>[]

---


### NimblestudioStudioComponentScriptParametersOutputReference <a name="NimblestudioStudioComponentScriptParametersOutputReference" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new NimblestudioStudioComponentScriptParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParametersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|NimblestudioStudioComponentScriptParameters InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.nimblestudioStudioComponent.NimblestudioStudioComponentScriptParameters">NimblestudioStudioComponentScriptParameters</a>

---



