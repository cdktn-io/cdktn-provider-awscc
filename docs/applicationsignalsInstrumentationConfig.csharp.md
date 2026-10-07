# `applicationsignalsInstrumentationConfig` Submodule <a name="`applicationsignalsInstrumentationConfig` Submodule" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationsignalsInstrumentationConfig <a name="ApplicationsignalsInstrumentationConfig" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config awscc_applicationsignals_instrumentation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsInstrumentationConfig(Construct Scope, string Id, ApplicationsignalsInstrumentationConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig">ApplicationsignalsInstrumentationConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig">ApplicationsignalsInstrumentationConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putCaptureConfiguration">PutCaptureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetAttributeFilters">ResetAttributeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetExpiresAt">ResetExpiresAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCaptureConfiguration` <a name="PutCaptureConfiguration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putCaptureConfiguration"></a>

```csharp
private void PutCaptureConfiguration(ApplicationsignalsInstrumentationConfigCaptureConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putCaptureConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

---

##### `PutLocation` <a name="PutLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putLocation"></a>

```csharp
private void PutLocation(ApplicationsignalsInstrumentationConfigLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putTags"></a>

```csharp
private void PutTags(IResolvable|ApplicationsignalsInstrumentationConfigTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>[]

---

##### `ResetAttributeFilters` <a name="ResetAttributeFilters" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetAttributeFilters"></a>

```csharp
private void ResetAttributeFilters()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExpiresAt` <a name="ResetExpiresAt" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetExpiresAt"></a>

```csharp
private void ResetExpiresAt()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApplicationsignalsInstrumentationConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApplicationsignalsInstrumentationConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApplicationsignalsInstrumentationConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

ApplicationsignalsInstrumentationConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ApplicationsignalsInstrumentationConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationsignalsInstrumentationConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationsignalsInstrumentationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ApplicationsignalsInstrumentationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfiguration">CaptureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationHash">LocationHash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList">ApplicationsignalsInstrumentationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFiltersInput">AttributeFiltersInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfigurationInput">CaptureConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAtInput">ExpiresAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationTypeInput">InstrumentationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationInput">LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalTypeInput">SignalTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFilters">AttributeFilters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationType">InstrumentationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalType">SignalType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CaptureConfiguration`<sup>Required</sup> <a name="CaptureConfiguration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfiguration"></a>

```csharp
public ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference CaptureConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.location"></a>

```csharp
public ApplicationsignalsInstrumentationConfigLocationOutputReference Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationOutputReference</a>

---

##### `LocationHash`<sup>Required</sup> <a name="LocationHash" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationHash"></a>

```csharp
public string LocationHash { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tags"></a>

```csharp
public ApplicationsignalsInstrumentationConfigTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList">ApplicationsignalsInstrumentationConfigTagsList</a>

---

##### `AttributeFiltersInput`<sup>Optional</sup> <a name="AttributeFiltersInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFiltersInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] AttributeFiltersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `CaptureConfigurationInput`<sup>Optional</sup> <a name="CaptureConfigurationInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.captureConfigurationInput"></a>

```csharp
public IResolvable|ApplicationsignalsInstrumentationConfigCaptureConfiguration CaptureConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `ExpiresAtInput`<sup>Optional</sup> <a name="ExpiresAtInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAtInput"></a>

```csharp
public string ExpiresAtInput { get; }
```

- *Type:* string

---

##### `InstrumentationTypeInput`<sup>Optional</sup> <a name="InstrumentationTypeInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationTypeInput"></a>

```csharp
public string InstrumentationTypeInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.locationInput"></a>

```csharp
public IResolvable|ApplicationsignalsInstrumentationConfigLocation LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `SignalTypeInput`<sup>Optional</sup> <a name="SignalTypeInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalTypeInput"></a>

```csharp
public string SignalTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tagsInput"></a>

```csharp
public IResolvable|ApplicationsignalsInstrumentationConfigTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>[]

---

##### `AttributeFilters`<sup>Required</sup> <a name="AttributeFilters" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.attributeFilters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] AttributeFilters { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `ExpiresAt`<sup>Required</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; }
```

- *Type:* string

---

##### `InstrumentationType`<sup>Required</sup> <a name="InstrumentationType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.instrumentationType"></a>

```csharp
public string InstrumentationType { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `SignalType`<sup>Required</sup> <a name="SignalType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.signalType"></a>

```csharp
public string SignalType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationsignalsInstrumentationConfigCaptureConfiguration <a name="ApplicationsignalsInstrumentationConfigCaptureConfiguration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsInstrumentationConfigCaptureConfiguration {
    ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture CodeCapture
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration.property.codeCapture">CodeCapture</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a></code> | Defines what data to capture for code-level instrumentation. |

---

##### `CodeCapture`<sup>Required</sup> <a name="CodeCapture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration.property.codeCapture"></a>

```csharp
public ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture CodeCapture { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

Defines what data to capture for code-level instrumentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_capture ApplicationsignalsInstrumentationConfig#code_capture}

---

### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture {
    ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits CaptureLimits,
    string[] CaptureArguments = null,
    string[] CaptureLocals = null,
    bool|IResolvable CaptureReturn = null,
    bool|IResolvable CaptureStackTrace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLimits">CaptureLimits</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a></code> | Safety limits that bound what is captured. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureArguments">CaptureArguments</a></code> | <code>string[]</code> | The function arguments to capture. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLocals">CaptureLocals</a></code> | <code>string[]</code> | The local variables to capture by name. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureReturn">CaptureReturn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to capture the return value. Defaults to false. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureStackTrace">CaptureStackTrace</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to capture a stack trace. Defaults to true. |

---

##### `CaptureLimits`<sup>Required</sup> <a name="CaptureLimits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLimits"></a>

```csharp
public ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits CaptureLimits { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

Safety limits that bound what is captured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_limits ApplicationsignalsInstrumentationConfig#capture_limits}

---

##### `CaptureArguments`<sup>Optional</sup> <a name="CaptureArguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureArguments"></a>

```csharp
public string[] CaptureArguments { get; set; }
```

- *Type:* string[]

The function arguments to capture.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_arguments ApplicationsignalsInstrumentationConfig#capture_arguments}

---

##### `CaptureLocals`<sup>Optional</sup> <a name="CaptureLocals" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureLocals"></a>

```csharp
public string[] CaptureLocals { get; set; }
```

- *Type:* string[]

The local variables to capture by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_locals ApplicationsignalsInstrumentationConfig#capture_locals}

---

##### `CaptureReturn`<sup>Optional</sup> <a name="CaptureReturn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureReturn"></a>

```csharp
public bool|IResolvable CaptureReturn { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to capture the return value. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_return ApplicationsignalsInstrumentationConfig#capture_return}

---

##### `CaptureStackTrace`<sup>Optional</sup> <a name="CaptureStackTrace" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture.property.captureStackTrace"></a>

```csharp
public bool|IResolvable CaptureStackTrace { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to capture a stack trace. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_stack_trace ApplicationsignalsInstrumentationConfig#capture_stack_trace}

---

### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits {
    double MaxCollectionDepth = null,
    double MaxCollectionWidth = null,
    double MaxFieldsPerObject = null,
    double MaxHits = null,
    double MaxObjectDepth = null,
    double MaxStackFrames = null,
    double MaxStackTraceSize = null,
    double MaxStringLength = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionDepth">MaxCollectionDepth</a></code> | <code>double</code> | Maximum nesting depth to traverse inside collections. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionWidth">MaxCollectionWidth</a></code> | <code>double</code> | Maximum number of items to capture from any collection. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxFieldsPerObject">MaxFieldsPerObject</a></code> | <code>double</code> | Maximum number of fields to capture for any object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxHits">MaxHits</a></code> | <code>double</code> | Maximum number of times the instrumentation point can be hit before disabled. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxObjectDepth">MaxObjectDepth</a></code> | <code>double</code> | Maximum depth for nested object traversal. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackFrames">MaxStackFrames</a></code> | <code>double</code> | Maximum number of stack frames to capture. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackTraceSize">MaxStackTraceSize</a></code> | <code>double</code> | Maximum total size in bytes of a captured stack trace. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStringLength">MaxStringLength</a></code> | <code>double</code> | Maximum length of captured string values in characters. |

---

##### `MaxCollectionDepth`<sup>Optional</sup> <a name="MaxCollectionDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionDepth"></a>

```csharp
public double MaxCollectionDepth { get; set; }
```

- *Type:* double

Maximum nesting depth to traverse inside collections.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_collection_depth ApplicationsignalsInstrumentationConfig#max_collection_depth}

---

##### `MaxCollectionWidth`<sup>Optional</sup> <a name="MaxCollectionWidth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxCollectionWidth"></a>

```csharp
public double MaxCollectionWidth { get; set; }
```

- *Type:* double

Maximum number of items to capture from any collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_collection_width ApplicationsignalsInstrumentationConfig#max_collection_width}

---

##### `MaxFieldsPerObject`<sup>Optional</sup> <a name="MaxFieldsPerObject" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxFieldsPerObject"></a>

```csharp
public double MaxFieldsPerObject { get; set; }
```

- *Type:* double

Maximum number of fields to capture for any object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_fields_per_object ApplicationsignalsInstrumentationConfig#max_fields_per_object}

---

##### `MaxHits`<sup>Optional</sup> <a name="MaxHits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxHits"></a>

```csharp
public double MaxHits { get; set; }
```

- *Type:* double

Maximum number of times the instrumentation point can be hit before disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_hits ApplicationsignalsInstrumentationConfig#max_hits}

---

##### `MaxObjectDepth`<sup>Optional</sup> <a name="MaxObjectDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxObjectDepth"></a>

```csharp
public double MaxObjectDepth { get; set; }
```

- *Type:* double

Maximum depth for nested object traversal.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_object_depth ApplicationsignalsInstrumentationConfig#max_object_depth}

---

##### `MaxStackFrames`<sup>Optional</sup> <a name="MaxStackFrames" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackFrames"></a>

```csharp
public double MaxStackFrames { get; set; }
```

- *Type:* double

Maximum number of stack frames to capture.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_stack_frames ApplicationsignalsInstrumentationConfig#max_stack_frames}

---

##### `MaxStackTraceSize`<sup>Optional</sup> <a name="MaxStackTraceSize" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStackTraceSize"></a>

```csharp
public double MaxStackTraceSize { get; set; }
```

- *Type:* double

Maximum total size in bytes of a captured stack trace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_stack_trace_size ApplicationsignalsInstrumentationConfig#max_stack_trace_size}

---

##### `MaxStringLength`<sup>Optional</sup> <a name="MaxStringLength" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits.property.maxStringLength"></a>

```csharp
public double MaxStringLength { get; set; }
```

- *Type:* double

Maximum length of captured string values in characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#max_string_length ApplicationsignalsInstrumentationConfig#max_string_length}

---

### ApplicationsignalsInstrumentationConfigConfig <a name="ApplicationsignalsInstrumentationConfigConfig" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsInstrumentationConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ApplicationsignalsInstrumentationConfigCaptureConfiguration CaptureConfiguration,
    string Environment,
    string InstrumentationType,
    ApplicationsignalsInstrumentationConfigLocation Location,
    string Service,
    string SignalType,
    IResolvable|System.Collections.Generic.IDictionary<string, string>[] AttributeFilters = null,
    string Description = null,
    string ExpiresAt = null,
    IResolvable|ApplicationsignalsInstrumentationConfigTags[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.captureConfiguration">CaptureConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | Specifies what to capture when the instrumentation point is hit. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.environment">Environment</a></code> | <code>string</code> | The environment that the service is running in. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.instrumentationType">InstrumentationType</a></code> | <code>string</code> | Type of instrumentation: BREAKPOINT (temporary, expires after 24 hours) or PROBE (permanent, persists until deleted). |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a></code> | The location where instrumentation should be applied. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.service">Service</a></code> | <code>string</code> | The name of the service to instrument. This should match the service.name resource attribute reported by the application. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.signalType">SignalType</a></code> | <code>string</code> | The telemetry signal type to emit for this instrumentation. The supported value is SNAPSHOT. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.attributeFilters">AttributeFilters</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string>[]</code> | Client-side filters that target specific instances. Each object is AND-matched on keys, multiple objects are OR-matched. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.description">Description</a></code> | <code>string</code> | An optional short description that explains the purpose of this instrumentation. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.expiresAt">ExpiresAt</a></code> | <code>string</code> | The timestamp after which this configuration is no longer served. For BREAKPOINT only; defaults to 24 hours. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>[]</code> | An optional list of key-value pairs to associate with the instrumentation configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CaptureConfiguration`<sup>Required</sup> <a name="CaptureConfiguration" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.captureConfiguration"></a>

```csharp
public ApplicationsignalsInstrumentationConfigCaptureConfiguration CaptureConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

Specifies what to capture when the instrumentation point is hit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#capture_configuration ApplicationsignalsInstrumentationConfig#capture_configuration}

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The environment that the service is running in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#environment ApplicationsignalsInstrumentationConfig#environment}

---

##### `InstrumentationType`<sup>Required</sup> <a name="InstrumentationType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.instrumentationType"></a>

```csharp
public string InstrumentationType { get; set; }
```

- *Type:* string

Type of instrumentation: BREAKPOINT (temporary, expires after 24 hours) or PROBE (permanent, persists until deleted).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#instrumentation_type ApplicationsignalsInstrumentationConfig#instrumentation_type}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.location"></a>

```csharp
public ApplicationsignalsInstrumentationConfigLocation Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

The location where instrumentation should be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#location ApplicationsignalsInstrumentationConfig#location}

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The name of the service to instrument. This should match the service.name resource attribute reported by the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#service ApplicationsignalsInstrumentationConfig#service}

---

##### `SignalType`<sup>Required</sup> <a name="SignalType" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.signalType"></a>

```csharp
public string SignalType { get; set; }
```

- *Type:* string

The telemetry signal type to emit for this instrumentation. The supported value is SNAPSHOT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#signal_type ApplicationsignalsInstrumentationConfig#signal_type}

---

##### `AttributeFilters`<sup>Optional</sup> <a name="AttributeFilters" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.attributeFilters"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string>[] AttributeFilters { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string>[]

Client-side filters that target specific instances. Each object is AND-matched on keys, multiple objects are OR-matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#attribute_filters ApplicationsignalsInstrumentationConfig#attribute_filters}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional short description that explains the purpose of this instrumentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#description ApplicationsignalsInstrumentationConfig#description}

---

##### `ExpiresAt`<sup>Optional</sup> <a name="ExpiresAt" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.expiresAt"></a>

```csharp
public string ExpiresAt { get; set; }
```

- *Type:* string

The timestamp after which this configuration is no longer served. For BREAKPOINT only; defaults to 24 hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#expires_at ApplicationsignalsInstrumentationConfig#expires_at}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigConfig.property.tags"></a>

```csharp
public IResolvable|ApplicationsignalsInstrumentationConfigTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>[]

An optional list of key-value pairs to associate with the instrumentation configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#tags ApplicationsignalsInstrumentationConfig#tags}

---

### ApplicationsignalsInstrumentationConfigLocation <a name="ApplicationsignalsInstrumentationConfigLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsInstrumentationConfigLocation {
    ApplicationsignalsInstrumentationConfigLocationCodeLocation CodeLocation
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation.property.codeLocation">CodeLocation</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a></code> | Identifies a code location to instrument. |

---

##### `CodeLocation`<sup>Required</sup> <a name="CodeLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation.property.codeLocation"></a>

```csharp
public ApplicationsignalsInstrumentationConfigLocationCodeLocation CodeLocation { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

Identifies a code location to instrument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_location ApplicationsignalsInstrumentationConfig#code_location}

---

### ApplicationsignalsInstrumentationConfigLocationCodeLocation <a name="ApplicationsignalsInstrumentationConfigLocationCodeLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsInstrumentationConfigLocationCodeLocation {
    string FilePath,
    string Language,
    string ClassName = null,
    string CodeUnit = null,
    double LineNumber = null,
    string MethodName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.filePath">FilePath</a></code> | <code>string</code> | The source file path relative to the project or source root. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.language">Language</a></code> | <code>string</code> | The programming language for this instrumentation point. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.className">ClassName</a></code> | <code>string</code> | The class or type name that contains the method. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.codeUnit">CodeUnit</a></code> | <code>string</code> | The package, module, or namespace that contains the target code. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.lineNumber">LineNumber</a></code> | <code>double</code> | The line number to instrument. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.methodName">MethodName</a></code> | <code>string</code> | The method or function name to instrument. |

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.filePath"></a>

```csharp
public string FilePath { get; set; }
```

- *Type:* string

The source file path relative to the project or source root.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#file_path ApplicationsignalsInstrumentationConfig#file_path}

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.language"></a>

```csharp
public string Language { get; set; }
```

- *Type:* string

The programming language for this instrumentation point.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#language ApplicationsignalsInstrumentationConfig#language}

---

##### `ClassName`<sup>Optional</sup> <a name="ClassName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.className"></a>

```csharp
public string ClassName { get; set; }
```

- *Type:* string

The class or type name that contains the method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#class_name ApplicationsignalsInstrumentationConfig#class_name}

---

##### `CodeUnit`<sup>Optional</sup> <a name="CodeUnit" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.codeUnit"></a>

```csharp
public string CodeUnit { get; set; }
```

- *Type:* string

The package, module, or namespace that contains the target code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#code_unit ApplicationsignalsInstrumentationConfig#code_unit}

---

##### `LineNumber`<sup>Optional</sup> <a name="LineNumber" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.lineNumber"></a>

```csharp
public double LineNumber { get; set; }
```

- *Type:* double

The line number to instrument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#line_number ApplicationsignalsInstrumentationConfig#line_number}

---

##### `MethodName`<sup>Optional</sup> <a name="MethodName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation.property.methodName"></a>

```csharp
public string MethodName { get; set; }
```

- *Type:* string

The method or function name to instrument.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#method_name ApplicationsignalsInstrumentationConfig#method_name}

---

### ApplicationsignalsInstrumentationConfigTags <a name="ApplicationsignalsInstrumentationConfigTags" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsInstrumentationConfigTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.key">Key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.value">Value</a></code> | <code>string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#key ApplicationsignalsInstrumentationConfig#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/applicationsignals_instrumentation_config#value ApplicationsignalsInstrumentationConfig#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionDepth">ResetMaxCollectionDepth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionWidth">ResetMaxCollectionWidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxFieldsPerObject">ResetMaxFieldsPerObject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxHits">ResetMaxHits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxObjectDepth">ResetMaxObjectDepth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackFrames">ResetMaxStackFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackTraceSize">ResetMaxStackTraceSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStringLength">ResetMaxStringLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxCollectionDepth` <a name="ResetMaxCollectionDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionDepth"></a>

```csharp
private void ResetMaxCollectionDepth()
```

##### `ResetMaxCollectionWidth` <a name="ResetMaxCollectionWidth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxCollectionWidth"></a>

```csharp
private void ResetMaxCollectionWidth()
```

##### `ResetMaxFieldsPerObject` <a name="ResetMaxFieldsPerObject" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxFieldsPerObject"></a>

```csharp
private void ResetMaxFieldsPerObject()
```

##### `ResetMaxHits` <a name="ResetMaxHits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxHits"></a>

```csharp
private void ResetMaxHits()
```

##### `ResetMaxObjectDepth` <a name="ResetMaxObjectDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxObjectDepth"></a>

```csharp
private void ResetMaxObjectDepth()
```

##### `ResetMaxStackFrames` <a name="ResetMaxStackFrames" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackFrames"></a>

```csharp
private void ResetMaxStackFrames()
```

##### `ResetMaxStackTraceSize` <a name="ResetMaxStackTraceSize" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStackTraceSize"></a>

```csharp
private void ResetMaxStackTraceSize()
```

##### `ResetMaxStringLength` <a name="ResetMaxStringLength" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.resetMaxStringLength"></a>

```csharp
private void ResetMaxStringLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepthInput">MaxCollectionDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidthInput">MaxCollectionWidthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObjectInput">MaxFieldsPerObjectInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHitsInput">MaxHitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepthInput">MaxObjectDepthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFramesInput">MaxStackFramesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSizeInput">MaxStackTraceSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLengthInput">MaxStringLengthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepth">MaxCollectionDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidth">MaxCollectionWidth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObject">MaxFieldsPerObject</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHits">MaxHits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepth">MaxObjectDepth</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFrames">MaxStackFrames</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSize">MaxStackTraceSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLength">MaxStringLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxCollectionDepthInput`<sup>Optional</sup> <a name="MaxCollectionDepthInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepthInput"></a>

```csharp
public double MaxCollectionDepthInput { get; }
```

- *Type:* double

---

##### `MaxCollectionWidthInput`<sup>Optional</sup> <a name="MaxCollectionWidthInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidthInput"></a>

```csharp
public double MaxCollectionWidthInput { get; }
```

- *Type:* double

---

##### `MaxFieldsPerObjectInput`<sup>Optional</sup> <a name="MaxFieldsPerObjectInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObjectInput"></a>

```csharp
public double MaxFieldsPerObjectInput { get; }
```

- *Type:* double

---

##### `MaxHitsInput`<sup>Optional</sup> <a name="MaxHitsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHitsInput"></a>

```csharp
public double MaxHitsInput { get; }
```

- *Type:* double

---

##### `MaxObjectDepthInput`<sup>Optional</sup> <a name="MaxObjectDepthInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepthInput"></a>

```csharp
public double MaxObjectDepthInput { get; }
```

- *Type:* double

---

##### `MaxStackFramesInput`<sup>Optional</sup> <a name="MaxStackFramesInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFramesInput"></a>

```csharp
public double MaxStackFramesInput { get; }
```

- *Type:* double

---

##### `MaxStackTraceSizeInput`<sup>Optional</sup> <a name="MaxStackTraceSizeInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSizeInput"></a>

```csharp
public double MaxStackTraceSizeInput { get; }
```

- *Type:* double

---

##### `MaxStringLengthInput`<sup>Optional</sup> <a name="MaxStringLengthInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLengthInput"></a>

```csharp
public double MaxStringLengthInput { get; }
```

- *Type:* double

---

##### `MaxCollectionDepth`<sup>Required</sup> <a name="MaxCollectionDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionDepth"></a>

```csharp
public double MaxCollectionDepth { get; }
```

- *Type:* double

---

##### `MaxCollectionWidth`<sup>Required</sup> <a name="MaxCollectionWidth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxCollectionWidth"></a>

```csharp
public double MaxCollectionWidth { get; }
```

- *Type:* double

---

##### `MaxFieldsPerObject`<sup>Required</sup> <a name="MaxFieldsPerObject" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxFieldsPerObject"></a>

```csharp
public double MaxFieldsPerObject { get; }
```

- *Type:* double

---

##### `MaxHits`<sup>Required</sup> <a name="MaxHits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxHits"></a>

```csharp
public double MaxHits { get; }
```

- *Type:* double

---

##### `MaxObjectDepth`<sup>Required</sup> <a name="MaxObjectDepth" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxObjectDepth"></a>

```csharp
public double MaxObjectDepth { get; }
```

- *Type:* double

---

##### `MaxStackFrames`<sup>Required</sup> <a name="MaxStackFrames" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackFrames"></a>

```csharp
public double MaxStackFrames { get; }
```

- *Type:* double

---

##### `MaxStackTraceSize`<sup>Required</sup> <a name="MaxStackTraceSize" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStackTraceSize"></a>

```csharp
public double MaxStackTraceSize { get; }
```

- *Type:* double

---

##### `MaxStringLength`<sup>Required</sup> <a name="MaxStringLength" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.maxStringLength"></a>

```csharp
public double MaxStringLength { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

---


### ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits">PutCaptureLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureArguments">ResetCaptureArguments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureLocals">ResetCaptureLocals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureReturn">ResetCaptureReturn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureStackTrace">ResetCaptureStackTrace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCaptureLimits` <a name="PutCaptureLimits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits"></a>

```csharp
private void PutCaptureLimits(ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.putCaptureLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

---

##### `ResetCaptureArguments` <a name="ResetCaptureArguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureArguments"></a>

```csharp
private void ResetCaptureArguments()
```

##### `ResetCaptureLocals` <a name="ResetCaptureLocals" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureLocals"></a>

```csharp
private void ResetCaptureLocals()
```

##### `ResetCaptureReturn` <a name="ResetCaptureReturn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureReturn"></a>

```csharp
private void ResetCaptureReturn()
```

##### `ResetCaptureStackTrace` <a name="ResetCaptureStackTrace" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.resetCaptureStackTrace"></a>

```csharp
private void ResetCaptureStackTrace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimits">CaptureLimits</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArgumentsInput">CaptureArgumentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimitsInput">CaptureLimitsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocalsInput">CaptureLocalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturnInput">CaptureReturnInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTraceInput">CaptureStackTraceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArguments">CaptureArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocals">CaptureLocals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturn">CaptureReturn</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTrace">CaptureStackTrace</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaptureLimits`<sup>Required</sup> <a name="CaptureLimits" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimits"></a>

```csharp
public ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference CaptureLimits { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimitsOutputReference</a>

---

##### `CaptureArgumentsInput`<sup>Optional</sup> <a name="CaptureArgumentsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArgumentsInput"></a>

```csharp
public string[] CaptureArgumentsInput { get; }
```

- *Type:* string[]

---

##### `CaptureLimitsInput`<sup>Optional</sup> <a name="CaptureLimitsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLimitsInput"></a>

```csharp
public IResolvable|ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits CaptureLimitsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureCaptureLimits</a>

---

##### `CaptureLocalsInput`<sup>Optional</sup> <a name="CaptureLocalsInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocalsInput"></a>

```csharp
public string[] CaptureLocalsInput { get; }
```

- *Type:* string[]

---

##### `CaptureReturnInput`<sup>Optional</sup> <a name="CaptureReturnInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturnInput"></a>

```csharp
public bool|IResolvable CaptureReturnInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CaptureStackTraceInput`<sup>Optional</sup> <a name="CaptureStackTraceInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTraceInput"></a>

```csharp
public bool|IResolvable CaptureStackTraceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CaptureArguments`<sup>Required</sup> <a name="CaptureArguments" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureArguments"></a>

```csharp
public string[] CaptureArguments { get; }
```

- *Type:* string[]

---

##### `CaptureLocals`<sup>Required</sup> <a name="CaptureLocals" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureLocals"></a>

```csharp
public string[] CaptureLocals { get; }
```

- *Type:* string[]

---

##### `CaptureReturn`<sup>Required</sup> <a name="CaptureReturn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureReturn"></a>

```csharp
public bool|IResolvable CaptureReturn { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CaptureStackTrace`<sup>Required</sup> <a name="CaptureStackTrace" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.captureStackTrace"></a>

```csharp
public bool|IResolvable CaptureStackTrace { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

---


### ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference <a name="ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture">PutCodeCapture</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeCapture` <a name="PutCodeCapture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture"></a>

```csharp
private void PutCodeCapture(ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.putCodeCapture.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCapture">CodeCapture</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCaptureInput">CodeCaptureInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeCapture`<sup>Required</sup> <a name="CodeCapture" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCapture"></a>

```csharp
public ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference CodeCapture { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCaptureOutputReference</a>

---

##### `CodeCaptureInput`<sup>Optional</sup> <a name="CodeCaptureInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.codeCaptureInput"></a>

```csharp
public IResolvable|ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture CodeCaptureInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture">ApplicationsignalsInstrumentationConfigCaptureConfigurationCodeCapture</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApplicationsignalsInstrumentationConfigCaptureConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigCaptureConfiguration">ApplicationsignalsInstrumentationConfigCaptureConfiguration</a>

---


### ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference <a name="ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetClassName">ResetClassName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetCodeUnit">ResetCodeUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetLineNumber">ResetLineNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetMethodName">ResetMethodName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClassName` <a name="ResetClassName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetClassName"></a>

```csharp
private void ResetClassName()
```

##### `ResetCodeUnit` <a name="ResetCodeUnit" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetCodeUnit"></a>

```csharp
private void ResetCodeUnit()
```

##### `ResetLineNumber` <a name="ResetLineNumber" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetLineNumber"></a>

```csharp
private void ResetLineNumber()
```

##### `ResetMethodName` <a name="ResetMethodName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.resetMethodName"></a>

```csharp
private void ResetMethodName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.classNameInput">ClassNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnitInput">CodeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePathInput">FilePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.languageInput">LanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumberInput">LineNumberInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodNameInput">MethodNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.className">ClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnit">CodeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePath">FilePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.language">Language</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumber">LineNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodName">MethodName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClassNameInput`<sup>Optional</sup> <a name="ClassNameInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.classNameInput"></a>

```csharp
public string ClassNameInput { get; }
```

- *Type:* string

---

##### `CodeUnitInput`<sup>Optional</sup> <a name="CodeUnitInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnitInput"></a>

```csharp
public string CodeUnitInput { get; }
```

- *Type:* string

---

##### `FilePathInput`<sup>Optional</sup> <a name="FilePathInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePathInput"></a>

```csharp
public string FilePathInput { get; }
```

- *Type:* string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.languageInput"></a>

```csharp
public string LanguageInput { get; }
```

- *Type:* string

---

##### `LineNumberInput`<sup>Optional</sup> <a name="LineNumberInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumberInput"></a>

```csharp
public double LineNumberInput { get; }
```

- *Type:* double

---

##### `MethodNameInput`<sup>Optional</sup> <a name="MethodNameInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodNameInput"></a>

```csharp
public string MethodNameInput { get; }
```

- *Type:* string

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.className"></a>

```csharp
public string ClassName { get; }
```

- *Type:* string

---

##### `CodeUnit`<sup>Required</sup> <a name="CodeUnit" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.codeUnit"></a>

```csharp
public string CodeUnit { get; }
```

- *Type:* string

---

##### `FilePath`<sup>Required</sup> <a name="FilePath" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.filePath"></a>

```csharp
public string FilePath { get; }
```

- *Type:* string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.language"></a>

```csharp
public string Language { get; }
```

- *Type:* string

---

##### `LineNumber`<sup>Required</sup> <a name="LineNumber" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.lineNumber"></a>

```csharp
public double LineNumber { get; }
```

- *Type:* double

---

##### `MethodName`<sup>Required</sup> <a name="MethodName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.methodName"></a>

```csharp
public string MethodName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApplicationsignalsInstrumentationConfigLocationCodeLocation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

---


### ApplicationsignalsInstrumentationConfigLocationOutputReference <a name="ApplicationsignalsInstrumentationConfigLocationOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsInstrumentationConfigLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation">PutCodeLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeLocation` <a name="PutCodeLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation"></a>

```csharp
private void PutCodeLocation(ApplicationsignalsInstrumentationConfigLocationCodeLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.putCodeLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocation">CodeLocation</a></code> | <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocationInput">CodeLocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CodeLocation`<sup>Required</sup> <a name="CodeLocation" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocation"></a>

```csharp
public ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference CodeLocation { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference">ApplicationsignalsInstrumentationConfigLocationCodeLocationOutputReference</a>

---

##### `CodeLocationInput`<sup>Optional</sup> <a name="CodeLocationInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.codeLocationInput"></a>

```csharp
public IResolvable|ApplicationsignalsInstrumentationConfigLocationCodeLocation CodeLocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationCodeLocation">ApplicationsignalsInstrumentationConfigLocationCodeLocation</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApplicationsignalsInstrumentationConfigLocation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigLocation">ApplicationsignalsInstrumentationConfigLocation</a>

---


### ApplicationsignalsInstrumentationConfigTagsList <a name="ApplicationsignalsInstrumentationConfigTagsList" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsInstrumentationConfigTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.get"></a>

```csharp
private ApplicationsignalsInstrumentationConfigTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsList.property.internalValue"></a>

```csharp
public IResolvable|ApplicationsignalsInstrumentationConfigTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>[]

---


### ApplicationsignalsInstrumentationConfigTagsOutputReference <a name="ApplicationsignalsInstrumentationConfigTagsOutputReference" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new ApplicationsignalsInstrumentationConfigTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ApplicationsignalsInstrumentationConfigTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.applicationsignalsInstrumentationConfig.ApplicationsignalsInstrumentationConfigTags">ApplicationsignalsInstrumentationConfigTags</a>

---



