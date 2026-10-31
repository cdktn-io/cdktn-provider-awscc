# `xrayTransactionSearchConfig` Submodule <a name="`xrayTransactionSearchConfig` Submodule" id="@cdktn/provider-awscc.xrayTransactionSearchConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### XrayTransactionSearchConfig <a name="XrayTransactionSearchConfig" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config awscc_xray_transaction_search_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XrayTransactionSearchConfig(Construct Scope, string Id, XrayTransactionSearchConfigConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig">XrayTransactionSearchConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig">XrayTransactionSearchConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.putCloudwatchLogsConfiguration">PutCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.resetCloudwatchLogsConfiguration">ResetCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.resetIndexingPercentage">ResetIndexingPercentage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCloudwatchLogsConfiguration` <a name="PutCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.putCloudwatchLogsConfiguration"></a>

```csharp
private void PutCloudwatchLogsConfiguration(XrayTransactionSearchConfigCloudwatchLogsConfiguration Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.putCloudwatchLogsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a>

---

##### `ResetCloudwatchLogsConfiguration` <a name="ResetCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.resetCloudwatchLogsConfiguration"></a>

```csharp
private void ResetCloudwatchLogsConfiguration()
```

##### `ResetIndexingPercentage` <a name="ResetIndexingPercentage" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.resetIndexingPercentage"></a>

```csharp
private void ResetIndexingPercentage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a XrayTransactionSearchConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

XrayTransactionSearchConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

XrayTransactionSearchConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

XrayTransactionSearchConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

XrayTransactionSearchConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a XrayTransactionSearchConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the XrayTransactionSearchConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing XrayTransactionSearchConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the XrayTransactionSearchConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.cloudwatchLogsConfiguration">CloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference">XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.cloudwatchLogsConfigurationInput">CloudwatchLogsConfigurationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.indexingPercentageInput">IndexingPercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.indexingPercentage">IndexingPercentage</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `CloudwatchLogsConfiguration`<sup>Required</sup> <a name="CloudwatchLogsConfiguration" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.cloudwatchLogsConfiguration"></a>

```csharp
public XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference CloudwatchLogsConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference">XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `CloudwatchLogsConfigurationInput`<sup>Optional</sup> <a name="CloudwatchLogsConfigurationInput" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.cloudwatchLogsConfigurationInput"></a>

```csharp
public IResolvable|XrayTransactionSearchConfigCloudwatchLogsConfiguration CloudwatchLogsConfigurationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a>

---

##### `IndexingPercentageInput`<sup>Optional</sup> <a name="IndexingPercentageInput" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.indexingPercentageInput"></a>

```csharp
public double IndexingPercentageInput { get; }
```

- *Type:* double

---

##### `IndexingPercentage`<sup>Required</sup> <a name="IndexingPercentage" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.indexingPercentage"></a>

```csharp
public double IndexingPercentage { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### XrayTransactionSearchConfigCloudwatchLogsConfiguration <a name="XrayTransactionSearchConfigCloudwatchLogsConfiguration" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XrayTransactionSearchConfigCloudwatchLogsConfiguration {
    string SpansLogGroupKmsKeyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration.property.spansLogGroupKmsKeyId">SpansLogGroupKmsKeyId</a></code> | <code>string</code> | The ARN of a symmetric customer managed AWS KMS key in the same account and Region, used to encrypt the aws/spans log group. |

---

##### `SpansLogGroupKmsKeyId`<sup>Optional</sup> <a name="SpansLogGroupKmsKeyId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration.property.spansLogGroupKmsKeyId"></a>

```csharp
public string SpansLogGroupKmsKeyId { get; set; }
```

- *Type:* string

The ARN of a symmetric customer managed AWS KMS key in the same account and Region, used to encrypt the aws/spans log group.

Key IDs and alias ARNs are not supported, so for an AWS::KMS::Key use Fn::GetAtt Arn, not Ref. X-Ray applies the key only when it creates aws/spans while enabling Transaction Search. If aws/spans already exists, for example from an earlier enablement or an earlier create that failed partway, the create fails and X-Ray does not enable Transaction Search or change the log group. Remove this property to use the existing log group with its current encryption, and use the CloudWatch Logs AssociateKmsKey API to change its key. The caller needs kms:DescribeKey on the key, and the key policy must allow CloudWatch Logs to use it. Adding, changing or removing this property replaces the resource, which fails while Transaction Search is enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config#spans_log_group_kms_key_id XrayTransactionSearchConfig#spans_log_group_kms_key_id}

---

### XrayTransactionSearchConfigConfig <a name="XrayTransactionSearchConfigConfig" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XrayTransactionSearchConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    XrayTransactionSearchConfigCloudwatchLogsConfiguration CloudwatchLogsConfiguration = null,
    double IndexingPercentage = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.cloudwatchLogsConfiguration">CloudwatchLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a></code> | Configuration for the CloudWatch Logs log group that X-Ray creates when this resource enables Transaction Search. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.indexingPercentage">IndexingPercentage</a></code> | <code>double</code> | Determines the percentage of traces indexed from CloudWatch Logs to X-Ray. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CloudwatchLogsConfiguration`<sup>Optional</sup> <a name="CloudwatchLogsConfiguration" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.cloudwatchLogsConfiguration"></a>

```csharp
public XrayTransactionSearchConfigCloudwatchLogsConfiguration CloudwatchLogsConfiguration { get; set; }
```

- *Type:* <a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a>

Configuration for the CloudWatch Logs log group that X-Ray creates when this resource enables Transaction Search.

It is used only at that time and is never returned

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config#cloudwatch_logs_configuration XrayTransactionSearchConfig#cloudwatch_logs_configuration}

---

##### `IndexingPercentage`<sup>Optional</sup> <a name="IndexingPercentage" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigConfig.property.indexingPercentage"></a>

```csharp
public double IndexingPercentage { get; set; }
```

- *Type:* double

Determines the percentage of traces indexed from CloudWatch Logs to X-Ray.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.108.0/docs/resources/xray_transaction_search_config#indexing_percentage XrayTransactionSearchConfig#indexing_percentage}

---

## Classes <a name="Classes" id="Classes"></a>

### XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference <a name="XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.resetSpansLogGroupKmsKeyId">ResetSpansLogGroupKmsKeyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSpansLogGroupKmsKeyId` <a name="ResetSpansLogGroupKmsKeyId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.resetSpansLogGroupKmsKeyId"></a>

```csharp
private void ResetSpansLogGroupKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.spansLogGroupKmsKeyIdInput">SpansLogGroupKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.spansLogGroupKmsKeyId">SpansLogGroupKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SpansLogGroupKmsKeyIdInput`<sup>Optional</sup> <a name="SpansLogGroupKmsKeyIdInput" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.spansLogGroupKmsKeyIdInput"></a>

```csharp
public string SpansLogGroupKmsKeyIdInput { get; }
```

- *Type:* string

---

##### `SpansLogGroupKmsKeyId`<sup>Required</sup> <a name="SpansLogGroupKmsKeyId" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.spansLogGroupKmsKeyId"></a>

```csharp
public string SpansLogGroupKmsKeyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|XrayTransactionSearchConfigCloudwatchLogsConfiguration InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-awscc.xrayTransactionSearchConfig.XrayTransactionSearchConfigCloudwatchLogsConfiguration">XrayTransactionSearchConfigCloudwatchLogsConfiguration</a>

---



