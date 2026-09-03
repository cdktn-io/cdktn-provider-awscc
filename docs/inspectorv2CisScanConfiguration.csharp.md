# `inspectorv2CisScanConfiguration` Submodule <a name="`inspectorv2CisScanConfiguration` Submodule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Inspectorv2CisScanConfiguration <a name="Inspectorv2CisScanConfiguration" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration awscc_inspectorv2_cis_scan_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CisScanConfiguration(Construct Scope, string Id, Inspectorv2CisScanConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig">Inspectorv2CisScanConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig">Inspectorv2CisScanConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putSchedule"></a>

```csharp
private void PutSchedule(Inspectorv2CisScanConfigurationSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a>

---

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putTargets"></a>

```csharp
private void PutTargets(Inspectorv2CisScanConfigurationTargets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.putTargets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a>

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Inspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Inspectorv2CisScanConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Inspectorv2CisScanConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Inspectorv2CisScanConfiguration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

Inspectorv2CisScanConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a Inspectorv2CisScanConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Inspectorv2CisScanConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Inspectorv2CisScanConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the Inspectorv2CisScanConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference">Inspectorv2CisScanConfigurationScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference">Inspectorv2CisScanConfigurationTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scanNameInput">ScanNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scheduleInput">ScheduleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.securityLevelInput">SecurityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.targetsInput">TargetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scanName">ScanName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.securityLevel">SecurityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.schedule"></a>

```csharp
public Inspectorv2CisScanConfigurationScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference">Inspectorv2CisScanConfigurationScheduleOutputReference</a>

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.targets"></a>

```csharp
public Inspectorv2CisScanConfigurationTargetsOutputReference Targets { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference">Inspectorv2CisScanConfigurationTargetsOutputReference</a>

---

##### `ScanNameInput`<sup>Optional</sup> <a name="ScanNameInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scanNameInput"></a>

```csharp
public string ScanNameInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scheduleInput"></a>

```csharp
public IResolvable|Inspectorv2CisScanConfigurationSchedule ScheduleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a>

---

##### `SecurityLevelInput`<sup>Optional</sup> <a name="SecurityLevelInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.securityLevelInput"></a>

```csharp
public string SecurityLevelInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.targetsInput"></a>

```csharp
public IResolvable|Inspectorv2CisScanConfigurationTargets TargetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a>

---

##### `ScanName`<sup>Required</sup> <a name="ScanName" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.scanName"></a>

```csharp
public string ScanName { get; }
```

- *Type:* string

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.securityLevel"></a>

```csharp
public string SecurityLevel { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Inspectorv2CisScanConfigurationConfig <a name="Inspectorv2CisScanConfigurationConfig" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CisScanConfigurationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ScanName,
    Inspectorv2CisScanConfigurationSchedule Schedule,
    string SecurityLevel,
    Inspectorv2CisScanConfigurationTargets Targets,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.scanName">ScanName</a></code> | <code>string</code> | Name of the scan. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a></code> | Choose a Schedule cadence. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.securityLevel">SecurityLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#security_level Inspectorv2CisScanConfiguration#security_level}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#targets Inspectorv2CisScanConfiguration#targets}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#tags Inspectorv2CisScanConfiguration#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ScanName`<sup>Required</sup> <a name="ScanName" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.scanName"></a>

```csharp
public string ScanName { get; set; }
```

- *Type:* string

Name of the scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#scan_name Inspectorv2CisScanConfiguration#scan_name}

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.schedule"></a>

```csharp
public Inspectorv2CisScanConfigurationSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a>

Choose a Schedule cadence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#schedule Inspectorv2CisScanConfiguration#schedule}

---

##### `SecurityLevel`<sup>Required</sup> <a name="SecurityLevel" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.securityLevel"></a>

```csharp
public string SecurityLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#security_level Inspectorv2CisScanConfiguration#security_level}.

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.targets"></a>

```csharp
public Inspectorv2CisScanConfigurationTargets Targets { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#targets Inspectorv2CisScanConfiguration#targets}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#tags Inspectorv2CisScanConfiguration#tags}.

---

### Inspectorv2CisScanConfigurationSchedule <a name="Inspectorv2CisScanConfigurationSchedule" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CisScanConfigurationSchedule {
    Inspectorv2CisScanConfigurationScheduleDaily Daily = null,
    Inspectorv2CisScanConfigurationScheduleMonthly Monthly = null,
    string OneTime = null,
    Inspectorv2CisScanConfigurationScheduleWeekly Weekly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.daily">Daily</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#daily Inspectorv2CisScanConfiguration#daily}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.monthly">Monthly</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#monthly Inspectorv2CisScanConfiguration#monthly}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.oneTime">OneTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#one_time Inspectorv2CisScanConfiguration#one_time}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.weekly">Weekly</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#weekly Inspectorv2CisScanConfiguration#weekly}. |

---

##### `Daily`<sup>Optional</sup> <a name="Daily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.daily"></a>

```csharp
public Inspectorv2CisScanConfigurationScheduleDaily Daily { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#daily Inspectorv2CisScanConfiguration#daily}.

---

##### `Monthly`<sup>Optional</sup> <a name="Monthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.monthly"></a>

```csharp
public Inspectorv2CisScanConfigurationScheduleMonthly Monthly { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#monthly Inspectorv2CisScanConfiguration#monthly}.

---

##### `OneTime`<sup>Optional</sup> <a name="OneTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.oneTime"></a>

```csharp
public string OneTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#one_time Inspectorv2CisScanConfiguration#one_time}.

---

##### `Weekly`<sup>Optional</sup> <a name="Weekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule.property.weekly"></a>

```csharp
public Inspectorv2CisScanConfigurationScheduleWeekly Weekly { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#weekly Inspectorv2CisScanConfiguration#weekly}.

---

### Inspectorv2CisScanConfigurationScheduleDaily <a name="Inspectorv2CisScanConfigurationScheduleDaily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CisScanConfigurationScheduleDaily {
    Inspectorv2CisScanConfigurationScheduleDailyStartTime StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}. |

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily.property.startTime"></a>

```csharp
public Inspectorv2CisScanConfigurationScheduleDailyStartTime StartTime { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}.

---

### Inspectorv2CisScanConfigurationScheduleDailyStartTime <a name="Inspectorv2CisScanConfigurationScheduleDailyStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CisScanConfigurationScheduleDailyStartTime {
    string TimeOfDay = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.property.timeOfDay">TimeOfDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}. |

---

##### `TimeOfDay`<sup>Optional</sup> <a name="TimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.property.timeOfDay"></a>

```csharp
public string TimeOfDay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}.

---

### Inspectorv2CisScanConfigurationScheduleMonthly <a name="Inspectorv2CisScanConfigurationScheduleMonthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CisScanConfigurationScheduleMonthly {
    string Day = null,
    Inspectorv2CisScanConfigurationScheduleMonthlyStartTime StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.property.day">Day</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#day Inspectorv2CisScanConfiguration#day}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}. |

---

##### `Day`<sup>Optional</sup> <a name="Day" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.property.day"></a>

```csharp
public string Day { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#day Inspectorv2CisScanConfiguration#day}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly.property.startTime"></a>

```csharp
public Inspectorv2CisScanConfigurationScheduleMonthlyStartTime StartTime { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}.

---

### Inspectorv2CisScanConfigurationScheduleMonthlyStartTime <a name="Inspectorv2CisScanConfigurationScheduleMonthlyStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CisScanConfigurationScheduleMonthlyStartTime {
    string TimeOfDay = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.property.timeOfDay">TimeOfDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}. |

---

##### `TimeOfDay`<sup>Optional</sup> <a name="TimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.property.timeOfDay"></a>

```csharp
public string TimeOfDay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}.

---

### Inspectorv2CisScanConfigurationScheduleWeekly <a name="Inspectorv2CisScanConfigurationScheduleWeekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CisScanConfigurationScheduleWeekly {
    string[] Days = null,
    Inspectorv2CisScanConfigurationScheduleWeeklyStartTime StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.property.days">Days</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#days Inspectorv2CisScanConfiguration#days}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.property.days"></a>

```csharp
public string[] Days { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#days Inspectorv2CisScanConfiguration#days}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly.property.startTime"></a>

```csharp
public Inspectorv2CisScanConfigurationScheduleWeeklyStartTime StartTime { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#start_time Inspectorv2CisScanConfiguration#start_time}.

---

### Inspectorv2CisScanConfigurationScheduleWeeklyStartTime <a name="Inspectorv2CisScanConfigurationScheduleWeeklyStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CisScanConfigurationScheduleWeeklyStartTime {
    string TimeOfDay = null,
    string TimeZone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.property.timeOfDay">TimeOfDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.property.timeZone">TimeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}. |

---

##### `TimeOfDay`<sup>Optional</sup> <a name="TimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.property.timeOfDay"></a>

```csharp
public string TimeOfDay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_of_day Inspectorv2CisScanConfiguration#time_of_day}.

---

##### `TimeZone`<sup>Optional</sup> <a name="TimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#time_zone Inspectorv2CisScanConfiguration#time_zone}.

---

### Inspectorv2CisScanConfigurationTargets <a name="Inspectorv2CisScanConfigurationTargets" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CisScanConfigurationTargets {
    string[] AccountIds,
    IResolvable|System.Collections.Generic.IDictionary<string, string[]> TargetResourceTags
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.property.accountIds">AccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#account_ids Inspectorv2CisScanConfiguration#account_ids}. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.property.targetResourceTags">TargetResourceTags</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#target_resource_tags Inspectorv2CisScanConfiguration#target_resource_tags}. |

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.property.accountIds"></a>

```csharp
public string[] AccountIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#account_ids Inspectorv2CisScanConfiguration#account_ids}.

---

##### `TargetResourceTags`<sup>Required</sup> <a name="TargetResourceTags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets.property.targetResourceTags"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> TargetResourceTags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/inspectorv2_cis_scan_configuration#target_resource_tags Inspectorv2CisScanConfiguration#target_resource_tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### Inspectorv2CisScanConfigurationScheduleDailyOutputReference <a name="Inspectorv2CisScanConfigurationScheduleDailyOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CisScanConfigurationScheduleDailyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.putStartTime"></a>

```csharp
private void PutStartTime(Inspectorv2CisScanConfigurationScheduleDailyStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a>

---

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTime"></a>

```csharp
public Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference StartTime { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference</a>

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.startTimeInput"></a>

```csharp
public IResolvable|Inspectorv2CisScanConfigurationScheduleDailyStartTime StartTimeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Inspectorv2CisScanConfigurationScheduleDaily InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a>

---


### Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference <a name="Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resetTimeOfDay">ResetTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeOfDay` <a name="ResetTimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resetTimeOfDay"></a>

```csharp
private void ResetTimeOfDay()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDayInput">TimeOfDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeOfDayInput`<sup>Optional</sup> <a name="TimeOfDayInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDayInput"></a>

```csharp
public string TimeOfDayInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeOfDay"></a>

```csharp
public string TimeOfDay { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTimeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Inspectorv2CisScanConfigurationScheduleDailyStartTime InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyStartTime">Inspectorv2CisScanConfigurationScheduleDailyStartTime</a>

---


### Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference <a name="Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resetDay">ResetDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.putStartTime"></a>

```csharp
private void PutStartTime(Inspectorv2CisScanConfigurationScheduleMonthlyStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

---

##### `ResetDay` <a name="ResetDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resetDay"></a>

```csharp
private void ResetDay()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.dayInput">DayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.day">Day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTime"></a>

```csharp
public Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference StartTime { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference</a>

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.dayInput"></a>

```csharp
public string DayInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.startTimeInput"></a>

```csharp
public IResolvable|Inspectorv2CisScanConfigurationScheduleMonthlyStartTime StartTimeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.day"></a>

```csharp
public string Day { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Inspectorv2CisScanConfigurationScheduleMonthly InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a>

---


### Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference <a name="Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resetTimeOfDay">ResetTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeOfDay` <a name="ResetTimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resetTimeOfDay"></a>

```csharp
private void ResetTimeOfDay()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDayInput">TimeOfDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeOfDayInput`<sup>Optional</sup> <a name="TimeOfDayInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDayInput"></a>

```csharp
public string TimeOfDayInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeOfDay"></a>

```csharp
public string TimeOfDay { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTimeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Inspectorv2CisScanConfigurationScheduleMonthlyStartTime InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyStartTime">Inspectorv2CisScanConfigurationScheduleMonthlyStartTime</a>

---


### Inspectorv2CisScanConfigurationScheduleOutputReference <a name="Inspectorv2CisScanConfigurationScheduleOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CisScanConfigurationScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putDaily">PutDaily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putMonthly">PutMonthly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putWeekly">PutWeekly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetDaily">ResetDaily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetMonthly">ResetMonthly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetOneTime">ResetOneTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetWeekly">ResetWeekly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDaily` <a name="PutDaily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putDaily"></a>

```csharp
private void PutDaily(Inspectorv2CisScanConfigurationScheduleDaily Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putDaily.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a>

---

##### `PutMonthly` <a name="PutMonthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putMonthly"></a>

```csharp
private void PutMonthly(Inspectorv2CisScanConfigurationScheduleMonthly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putMonthly.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a>

---

##### `PutWeekly` <a name="PutWeekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putWeekly"></a>

```csharp
private void PutWeekly(Inspectorv2CisScanConfigurationScheduleWeekly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.putWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a>

---

##### `ResetDaily` <a name="ResetDaily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetDaily"></a>

```csharp
private void ResetDaily()
```

##### `ResetMonthly` <a name="ResetMonthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetMonthly"></a>

```csharp
private void ResetMonthly()
```

##### `ResetOneTime` <a name="ResetOneTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetOneTime"></a>

```csharp
private void ResetOneTime()
```

##### `ResetWeekly` <a name="ResetWeekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.resetWeekly"></a>

```csharp
private void ResetWeekly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.daily">Daily</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference">Inspectorv2CisScanConfigurationScheduleDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.monthly">Monthly</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference">Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.weekly">Weekly</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference">Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.dailyInput">DailyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.monthlyInput">MonthlyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.oneTimeInput">OneTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.weeklyInput">WeeklyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.oneTime">OneTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Daily`<sup>Required</sup> <a name="Daily" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.daily"></a>

```csharp
public Inspectorv2CisScanConfigurationScheduleDailyOutputReference Daily { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDailyOutputReference">Inspectorv2CisScanConfigurationScheduleDailyOutputReference</a>

---

##### `Monthly`<sup>Required</sup> <a name="Monthly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.monthly"></a>

```csharp
public Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference Monthly { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference">Inspectorv2CisScanConfigurationScheduleMonthlyOutputReference</a>

---

##### `Weekly`<sup>Required</sup> <a name="Weekly" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.weekly"></a>

```csharp
public Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference Weekly { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference">Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference</a>

---

##### `DailyInput`<sup>Optional</sup> <a name="DailyInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.dailyInput"></a>

```csharp
public IResolvable|Inspectorv2CisScanConfigurationScheduleDaily DailyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleDaily">Inspectorv2CisScanConfigurationScheduleDaily</a>

---

##### `MonthlyInput`<sup>Optional</sup> <a name="MonthlyInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.monthlyInput"></a>

```csharp
public IResolvable|Inspectorv2CisScanConfigurationScheduleMonthly MonthlyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleMonthly">Inspectorv2CisScanConfigurationScheduleMonthly</a>

---

##### `OneTimeInput`<sup>Optional</sup> <a name="OneTimeInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.oneTimeInput"></a>

```csharp
public string OneTimeInput { get; }
```

- *Type:* string

---

##### `WeeklyInput`<sup>Optional</sup> <a name="WeeklyInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.weeklyInput"></a>

```csharp
public IResolvable|Inspectorv2CisScanConfigurationScheduleWeekly WeeklyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a>

---

##### `OneTime`<sup>Required</sup> <a name="OneTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.oneTime"></a>

```csharp
public string OneTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Inspectorv2CisScanConfigurationSchedule InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationSchedule">Inspectorv2CisScanConfigurationSchedule</a>

---


### Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference <a name="Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resetDays">ResetDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStartTime` <a name="PutStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.putStartTime"></a>

```csharp
private void PutStartTime(Inspectorv2CisScanConfigurationScheduleWeeklyStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

---

##### `ResetDays` <a name="ResetDays" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resetDays"></a>

```csharp
private void ResetDays()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.daysInput">DaysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.days">Days</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTime"></a>

```csharp
public Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference StartTime { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference">Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference</a>

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.daysInput"></a>

```csharp
public string[] DaysInput { get; }
```

- *Type:* string[]

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.startTimeInput"></a>

```csharp
public IResolvable|Inspectorv2CisScanConfigurationScheduleWeeklyStartTime StartTimeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.days"></a>

```csharp
public string[] Days { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Inspectorv2CisScanConfigurationScheduleWeekly InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeekly">Inspectorv2CisScanConfigurationScheduleWeekly</a>

---


### Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference <a name="Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resetTimeOfDay">ResetTimeOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resetTimeZone">ResetTimeZone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeOfDay` <a name="ResetTimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resetTimeOfDay"></a>

```csharp
private void ResetTimeOfDay()
```

##### `ResetTimeZone` <a name="ResetTimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.resetTimeZone"></a>

```csharp
private void ResetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDayInput">TimeOfDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimeOfDayInput`<sup>Optional</sup> <a name="TimeOfDayInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDayInput"></a>

```csharp
public string TimeOfDayInput { get; }
```

- *Type:* string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeOfDay"></a>

```csharp
public string TimeOfDay { get; }
```

- *Type:* string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTimeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Inspectorv2CisScanConfigurationScheduleWeeklyStartTime InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationScheduleWeeklyStartTime">Inspectorv2CisScanConfigurationScheduleWeeklyStartTime</a>

---


### Inspectorv2CisScanConfigurationTargetsOutputReference <a name="Inspectorv2CisScanConfigurationTargetsOutputReference" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new Inspectorv2CisScanConfigurationTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.accountIdsInput">AccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTagsInput">TargetResourceTagsInput</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.accountIds">AccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTags">TargetResourceTags</a></code> | <code>Io.Cdktn.IResolvable\|System.Collections.Generic.IDictionary<string, string[]></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccountIdsInput`<sup>Optional</sup> <a name="AccountIdsInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.accountIdsInput"></a>

```csharp
public string[] AccountIdsInput { get; }
```

- *Type:* string[]

---

##### `TargetResourceTagsInput`<sup>Optional</sup> <a name="TargetResourceTagsInput" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTagsInput"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> TargetResourceTagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `AccountIds`<sup>Required</sup> <a name="AccountIds" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.accountIds"></a>

```csharp
public string[] AccountIds { get; }
```

- *Type:* string[]

---

##### `TargetResourceTags`<sup>Required</sup> <a name="TargetResourceTags" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.targetResourceTags"></a>

```csharp
public IResolvable|System.Collections.Generic.IDictionary<string, string[]> TargetResourceTags { get; }
```

- *Type:* Io.Cdktn.IResolvable|System.Collections.Generic.IDictionary<string, string[]>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|Inspectorv2CisScanConfigurationTargets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.inspectorv2CisScanConfiguration.Inspectorv2CisScanConfigurationTargets">Inspectorv2CisScanConfigurationTargets</a>

---



