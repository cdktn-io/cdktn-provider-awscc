# `bcmScheduledReport` Submodule <a name="`bcmScheduledReport` Submodule" id="@cdktn/provider-awscc.bcmScheduledReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmScheduledReport <a name="BcmScheduledReport" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report awscc_bcm_scheduled_report}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmScheduledReport(Construct Scope, string Id, BcmScheduledReportConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig">BcmScheduledReportConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig">BcmScheduledReportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putScheduleConfig">PutScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putWidgetDateRangeOverride">PutWidgetDateRangeOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetDateRangeOverride">ResetWidgetDateRangeOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetIds">ResetWidgetIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutScheduleConfig` <a name="PutScheduleConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putScheduleConfig"></a>

```csharp
private void PutScheduleConfig(BcmScheduledReportScheduleConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putScheduleConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putTags"></a>

```csharp
private void PutTags(IResolvable|BcmScheduledReportTags[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putTags.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>[]

---

##### `PutWidgetDateRangeOverride` <a name="PutWidgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putWidgetDateRangeOverride"></a>

```csharp
private void PutWidgetDateRangeOverride(BcmScheduledReportWidgetDateRangeOverride Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.putWidgetDateRangeOverride.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetWidgetDateRangeOverride` <a name="ResetWidgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetDateRangeOverride"></a>

```csharp
private void ResetWidgetDateRangeOverride()
```

##### `ResetWidgetIds` <a name="ResetWidgetIds" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.resetWidgetIds"></a>

```csharp
private void ResetWidgetIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BcmScheduledReport resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmScheduledReport.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmScheduledReport.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmScheduledReport.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

BcmScheduledReport.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BcmScheduledReport resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BcmScheduledReport to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BcmScheduledReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BcmScheduledReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.healthStatus">HealthStatus</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference">BcmScheduledReportHealthStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfig">ScheduleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference">BcmScheduledReportScheduleConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList">BcmScheduledReportTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverride">WidgetDateRangeOverride</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference">BcmScheduledReportWidgetDateRangeOverrideOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArnInput">DashboardArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfigInput">ScheduleConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArnInput">ScheduledReportExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tagsInput">TagsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverrideInput">WidgetDateRangeOverrideInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIdsInput">WidgetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArn">DashboardArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArn">ScheduledReportExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIds">WidgetIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `HealthStatus`<sup>Required</sup> <a name="HealthStatus" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.healthStatus"></a>

```csharp
public BcmScheduledReportHealthStatusOutputReference HealthStatus { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference">BcmScheduledReportHealthStatusOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ScheduleConfig`<sup>Required</sup> <a name="ScheduleConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfig"></a>

```csharp
public BcmScheduledReportScheduleConfigOutputReference ScheduleConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference">BcmScheduledReportScheduleConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tags"></a>

```csharp
public BcmScheduledReportTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList">BcmScheduledReportTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `WidgetDateRangeOverride`<sup>Required</sup> <a name="WidgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverride"></a>

```csharp
public BcmScheduledReportWidgetDateRangeOverrideOutputReference WidgetDateRangeOverride { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference">BcmScheduledReportWidgetDateRangeOverrideOutputReference</a>

---

##### `DashboardArnInput`<sup>Optional</sup> <a name="DashboardArnInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArnInput"></a>

```csharp
public string DashboardArnInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ScheduleConfigInput`<sup>Optional</sup> <a name="ScheduleConfigInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduleConfigInput"></a>

```csharp
public IResolvable|BcmScheduledReportScheduleConfig ScheduleConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

---

##### `ScheduledReportExecutionRoleArnInput`<sup>Optional</sup> <a name="ScheduledReportExecutionRoleArnInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArnInput"></a>

```csharp
public string ScheduledReportExecutionRoleArnInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tagsInput"></a>

```csharp
public IResolvable|BcmScheduledReportTags[] TagsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>[]

---

##### `WidgetDateRangeOverrideInput`<sup>Optional</sup> <a name="WidgetDateRangeOverrideInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetDateRangeOverrideInput"></a>

```csharp
public IResolvable|BcmScheduledReportWidgetDateRangeOverride WidgetDateRangeOverrideInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

---

##### `WidgetIdsInput`<sup>Optional</sup> <a name="WidgetIdsInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIdsInput"></a>

```csharp
public string[] WidgetIdsInput { get; }
```

- *Type:* string[]

---

##### `DashboardArn`<sup>Required</sup> <a name="DashboardArn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.dashboardArn"></a>

```csharp
public string DashboardArn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScheduledReportExecutionRoleArn`<sup>Required</sup> <a name="ScheduledReportExecutionRoleArn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.scheduledReportExecutionRoleArn"></a>

```csharp
public string ScheduledReportExecutionRoleArn { get; }
```

- *Type:* string

---

##### `WidgetIds`<sup>Required</sup> <a name="WidgetIds" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.widgetIds"></a>

```csharp
public string[] WidgetIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReport.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BcmScheduledReportConfig <a name="BcmScheduledReportConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmScheduledReportConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string DashboardArn,
    string Name,
    BcmScheduledReportScheduleConfig ScheduleConfig,
    string ScheduledReportExecutionRoleArn,
    string Description = null,
    IResolvable|BcmScheduledReportTags[] Tags = null,
    BcmScheduledReportWidgetDateRangeOverride WidgetDateRangeOverride = null,
    string[] WidgetIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dashboardArn">DashboardArn</a></code> | <code>string</code> | The ARN of the dashboard associated with the scheduled report. Managed dashboards cannot be used. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.name">Name</a></code> | <code>string</code> | The name of the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduleConfig">ScheduleConfig</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a></code> | The schedule configuration that defines when and how often the report is generated. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduledReportExecutionRoleArn">ScheduledReportExecutionRoleArn</a></code> | <code>string</code> | The ARN of the IAM role that the scheduled report uses to execute. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.description">Description</a></code> | <code>string</code> | A description of the scheduled report's purpose or contents. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.tags">Tags</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>[]</code> | The tags applied to the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetDateRangeOverride">WidgetDateRangeOverride</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a></code> | The date range override applied to widgets in the scheduled report. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetIds">WidgetIds</a></code> | <code>string[]</code> | The list of widget identifiers included in the scheduled report. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `DashboardArn`<sup>Required</sup> <a name="DashboardArn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.dashboardArn"></a>

```csharp
public string DashboardArn { get; set; }
```

- *Type:* string

The ARN of the dashboard associated with the scheduled report. Managed dashboards cannot be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#dashboard_arn BcmScheduledReport#dashboard_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#name BcmScheduledReport#name}

---

##### `ScheduleConfig`<sup>Required</sup> <a name="ScheduleConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduleConfig"></a>

```csharp
public BcmScheduledReportScheduleConfig ScheduleConfig { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

The schedule configuration that defines when and how often the report is generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_config BcmScheduledReport#schedule_config}

---

##### `ScheduledReportExecutionRoleArn`<sup>Required</sup> <a name="ScheduledReportExecutionRoleArn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.scheduledReportExecutionRoleArn"></a>

```csharp
public string ScheduledReportExecutionRoleArn { get; set; }
```

- *Type:* string

The ARN of the IAM role that the scheduled report uses to execute.

AWS Billing and Cost Management Dashboards assumes this IAM role while executing the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#scheduled_report_execution_role_arn BcmScheduledReport#scheduled_report_execution_role_arn}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A description of the scheduled report's purpose or contents.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#description BcmScheduledReport#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.tags"></a>

```csharp
public IResolvable|BcmScheduledReportTags[] Tags { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>[]

The tags applied to the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#tags BcmScheduledReport#tags}

---

##### `WidgetDateRangeOverride`<sup>Optional</sup> <a name="WidgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetDateRangeOverride"></a>

```csharp
public BcmScheduledReportWidgetDateRangeOverride WidgetDateRangeOverride { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

The date range override applied to widgets in the scheduled report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#widget_date_range_override BcmScheduledReport#widget_date_range_override}

---

##### `WidgetIds`<sup>Optional</sup> <a name="WidgetIds" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportConfig.property.widgetIds"></a>

```csharp
public string[] WidgetIds { get; set; }
```

- *Type:* string[]

The list of widget identifiers included in the scheduled report.

If not specified, all widgets in the dashboard are included.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#widget_ids BcmScheduledReport#widget_ids}

---

### BcmScheduledReportHealthStatus <a name="BcmScheduledReportHealthStatus" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmScheduledReportHealthStatus {

};
```


### BcmScheduledReportScheduleConfig <a name="BcmScheduledReportScheduleConfig" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmScheduledReportScheduleConfig {
    string ScheduleExpression = null,
    string ScheduleExpressionTimeZone = null,
    BcmScheduledReportScheduleConfigSchedulePeriod SchedulePeriod = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | The schedule expression that specifies when to trigger the scheduled report run. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpressionTimeZone">ScheduleExpressionTimeZone</a></code> | <code>string</code> | The time zone for the schedule expression, for example, UTC. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.schedulePeriod">SchedulePeriod</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a></code> | The time period during which the schedule is active. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.state">State</a></code> | <code>string</code> | The state of the schedule. |

---

##### `ScheduleExpression`<sup>Optional</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; set; }
```

- *Type:* string

The schedule expression that specifies when to trigger the scheduled report run.

This value must be a cron expression consisting of six fields separated by white spaces: cron(minutes hours day_of_month month day_of_week year).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_expression BcmScheduledReport#schedule_expression}

---

##### `ScheduleExpressionTimeZone`<sup>Optional</sup> <a name="ScheduleExpressionTimeZone" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.scheduleExpressionTimeZone"></a>

```csharp
public string ScheduleExpressionTimeZone { get; set; }
```

- *Type:* string

The time zone for the schedule expression, for example, UTC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_expression_time_zone BcmScheduledReport#schedule_expression_time_zone}

---

##### `SchedulePeriod`<sup>Optional</sup> <a name="SchedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.schedulePeriod"></a>

```csharp
public BcmScheduledReportScheduleConfigSchedulePeriod SchedulePeriod { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a>

The time period during which the schedule is active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#schedule_period BcmScheduledReport#schedule_period}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

The state of the schedule.

ENABLED means the scheduled report runs according to its schedule expression. DISABLED means the scheduled report is paused and will not run until re-enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#state BcmScheduledReport#state}

---

### BcmScheduledReportScheduleConfigSchedulePeriod <a name="BcmScheduledReportScheduleConfigSchedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmScheduledReportScheduleConfigSchedulePeriod {
    string EndTime = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.endTime">EndTime</a></code> | <code>string</code> | The time at which the schedule stops being active. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.startTime">StartTime</a></code> | <code>string</code> | The time at which the schedule becomes active. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

The time at which the schedule stops being active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#end_time BcmScheduledReport#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

The time at which the schedule becomes active.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#start_time BcmScheduledReport#start_time}

---

### BcmScheduledReportTags <a name="BcmScheduledReportTags" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmScheduledReportTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.key">Key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.value">Value</a></code> | <code>string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#key BcmScheduledReport#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#value BcmScheduledReport#value}

---

### BcmScheduledReportWidgetDateRangeOverride <a name="BcmScheduledReportWidgetDateRangeOverride" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmScheduledReportWidgetDateRangeOverride {
    BcmScheduledReportWidgetDateRangeOverrideEndTime EndTime = null,
    BcmScheduledReportWidgetDateRangeOverrideStartTime StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.endTime">EndTime</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a></code> | The end of the range. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a></code> | The start of the range. |

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.endTime"></a>

```csharp
public BcmScheduledReportWidgetDateRangeOverrideEndTime EndTime { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a>

The end of the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#end_time BcmScheduledReport#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride.property.startTime"></a>

```csharp
public BcmScheduledReportWidgetDateRangeOverrideStartTime StartTime { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a>

The start of the range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#start_time BcmScheduledReport#start_time}

---

### BcmScheduledReportWidgetDateRangeOverrideEndTime <a name="BcmScheduledReportWidgetDateRangeOverrideEndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmScheduledReportWidgetDateRangeOverrideEndTime {
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.type">Type</a></code> | <code>string</code> | Whether Value is an absolute date or a duration relative to now. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.value">Value</a></code> | <code>string</code> | The date, or an ISO 8601 duration when Type is RELATIVE. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Whether Value is an absolute date or a duration relative to now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#type BcmScheduledReport#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The date, or an ISO 8601 duration when Type is RELATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#value BcmScheduledReport#value}

---

### BcmScheduledReportWidgetDateRangeOverrideStartTime <a name="BcmScheduledReportWidgetDateRangeOverrideStartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmScheduledReportWidgetDateRangeOverrideStartTime {
    string Type = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.type">Type</a></code> | <code>string</code> | Whether Value is an absolute date or a duration relative to now. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.value">Value</a></code> | <code>string</code> | The date, or an ISO 8601 duration when Type is RELATIVE. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Whether Value is an absolute date or a duration relative to now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#type BcmScheduledReport#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

The date, or an ISO 8601 duration when Type is RELATIVE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/bcm_scheduled_report#value BcmScheduledReport#value}

---

## Classes <a name="Classes" id="Classes"></a>

### BcmScheduledReportHealthStatusOutputReference <a name="BcmScheduledReportHealthStatusOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmScheduledReportHealthStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.lastRefreshedAt">LastRefreshedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.statusCode">StatusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus">BcmScheduledReportHealthStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastRefreshedAt`<sup>Required</sup> <a name="LastRefreshedAt" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.lastRefreshedAt"></a>

```csharp
public string LastRefreshedAt { get; }
```

- *Type:* string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.statusCode"></a>

```csharp
public string StatusCode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatusOutputReference.property.internalValue"></a>

```csharp
public BcmScheduledReportHealthStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportHealthStatus">BcmScheduledReportHealthStatus</a>

---


### BcmScheduledReportScheduleConfigOutputReference <a name="BcmScheduledReportScheduleConfigOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmScheduledReportScheduleConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.putSchedulePeriod">PutSchedulePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpression">ResetScheduleExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpressionTimeZone">ResetScheduleExpressionTimeZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetSchedulePeriod">ResetSchedulePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSchedulePeriod` <a name="PutSchedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.putSchedulePeriod"></a>

```csharp
private void PutSchedulePeriod(BcmScheduledReportScheduleConfigSchedulePeriod Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.putSchedulePeriod.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a>

---

##### `ResetScheduleExpression` <a name="ResetScheduleExpression" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpression"></a>

```csharp
private void ResetScheduleExpression()
```

##### `ResetScheduleExpressionTimeZone` <a name="ResetScheduleExpressionTimeZone" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetScheduleExpressionTimeZone"></a>

```csharp
private void ResetScheduleExpressionTimeZone()
```

##### `ResetSchedulePeriod` <a name="ResetSchedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetSchedulePeriod"></a>

```csharp
private void ResetSchedulePeriod()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.resetState"></a>

```csharp
private void ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriod">SchedulePeriod</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference">BcmScheduledReportScheduleConfigSchedulePeriodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionInput">ScheduleExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZoneInput">ScheduleExpressionTimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriodInput">SchedulePeriodInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpression">ScheduleExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZone">ScheduleExpressionTimeZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchedulePeriod`<sup>Required</sup> <a name="SchedulePeriod" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriod"></a>

```csharp
public BcmScheduledReportScheduleConfigSchedulePeriodOutputReference SchedulePeriod { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference">BcmScheduledReportScheduleConfigSchedulePeriodOutputReference</a>

---

##### `ScheduleExpressionInput`<sup>Optional</sup> <a name="ScheduleExpressionInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionInput"></a>

```csharp
public string ScheduleExpressionInput { get; }
```

- *Type:* string

---

##### `ScheduleExpressionTimeZoneInput`<sup>Optional</sup> <a name="ScheduleExpressionTimeZoneInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZoneInput"></a>

```csharp
public string ScheduleExpressionTimeZoneInput { get; }
```

- *Type:* string

---

##### `SchedulePeriodInput`<sup>Optional</sup> <a name="SchedulePeriodInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.schedulePeriodInput"></a>

```csharp
public IResolvable|BcmScheduledReportScheduleConfigSchedulePeriod SchedulePeriodInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `ScheduleExpression`<sup>Required</sup> <a name="ScheduleExpression" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpression"></a>

```csharp
public string ScheduleExpression { get; }
```

- *Type:* string

---

##### `ScheduleExpressionTimeZone`<sup>Required</sup> <a name="ScheduleExpressionTimeZone" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.scheduleExpressionTimeZone"></a>

```csharp
public string ScheduleExpressionTimeZone { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BcmScheduledReportScheduleConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfig">BcmScheduledReportScheduleConfig</a>

---


### BcmScheduledReportScheduleConfigSchedulePeriodOutputReference <a name="BcmScheduledReportScheduleConfigSchedulePeriodOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmScheduledReportScheduleConfigSchedulePeriodOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriodOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BcmScheduledReportScheduleConfigSchedulePeriod InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportScheduleConfigSchedulePeriod">BcmScheduledReportScheduleConfigSchedulePeriod</a>

---


### BcmScheduledReportTagsList <a name="BcmScheduledReportTagsList" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmScheduledReportTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.get"></a>

```csharp
private BcmScheduledReportTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsList.property.internalValue"></a>

```csharp
public IResolvable|BcmScheduledReportTags[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>[]

---


### BcmScheduledReportTagsOutputReference <a name="BcmScheduledReportTagsOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmScheduledReportTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTagsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BcmScheduledReportTags InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportTags">BcmScheduledReportTags</a>

---


### BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference <a name="BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BcmScheduledReportWidgetDateRangeOverrideEndTime InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a>

---


### BcmScheduledReportWidgetDateRangeOverrideOutputReference <a name="BcmScheduledReportWidgetDateRangeOverrideOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmScheduledReportWidgetDateRangeOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putEndTime">PutEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putStartTime">PutStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndTime` <a name="PutEndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putEndTime"></a>

```csharp
private void PutEndTime(BcmScheduledReportWidgetDateRangeOverrideEndTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putEndTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a>

---

##### `PutStartTime` <a name="PutStartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putStartTime"></a>

```csharp
private void PutStartTime(BcmScheduledReportWidgetDateRangeOverrideStartTime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a>

---

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTime">EndTime</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTime"></a>

```csharp
public BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference EndTime { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideEndTimeOutputReference</a>

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTime"></a>

```csharp
public BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference StartTime { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference">BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference</a>

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.endTimeInput"></a>

```csharp
public IResolvable|BcmScheduledReportWidgetDateRangeOverrideEndTime EndTimeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideEndTime">BcmScheduledReportWidgetDateRangeOverrideEndTime</a>

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.startTimeInput"></a>

```csharp
public IResolvable|BcmScheduledReportWidgetDateRangeOverrideStartTime StartTimeInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BcmScheduledReportWidgetDateRangeOverride InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverride">BcmScheduledReportWidgetDateRangeOverride</a>

---


### BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference <a name="BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTimeOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BcmScheduledReportWidgetDateRangeOverrideStartTime InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.bcmScheduledReport.BcmScheduledReportWidgetDateRangeOverrideStartTime">BcmScheduledReportWidgetDateRangeOverrideStartTime</a>

---



