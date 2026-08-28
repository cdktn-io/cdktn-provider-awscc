# `dataAwsccIotanalyticsPipeline` Submodule <a name="`dataAwsccIotanalyticsPipeline` Submodule" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotanalyticsPipeline <a name="DataAwsccIotanalyticsPipeline" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotanalytics_pipeline awscc_iotanalytics_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipeline(Construct Scope, string Id, DataAwsccIotanalyticsPipelineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig">DataAwsccIotanalyticsPipelineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig">DataAwsccIotanalyticsPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccIotanalyticsPipeline resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotanalyticsPipeline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotanalyticsPipeline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotanalyticsPipeline.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccIotanalyticsPipeline.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccIotanalyticsPipeline resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccIotanalyticsPipeline to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccIotanalyticsPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotanalytics_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotanalyticsPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.pipelineActivities">PipelineActivities</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList">DataAwsccIotanalyticsPipelinePipelineActivitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.pipelineName">PipelineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList">DataAwsccIotanalyticsPipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `PipelineActivities`<sup>Required</sup> <a name="PipelineActivities" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.pipelineActivities"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesList PipelineActivities { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList">DataAwsccIotanalyticsPipelinePipelineActivitiesList</a>

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `PipelineName`<sup>Required</sup> <a name="PipelineName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.pipelineName"></a>

```csharp
public string PipelineName { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.tags"></a>

```csharp
public DataAwsccIotanalyticsPipelineTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList">DataAwsccIotanalyticsPipelineTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipeline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotanalyticsPipelineConfig <a name="DataAwsccIotanalyticsPipelineConfig" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelineConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Id
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iotanalytics_pipeline#id DataAwsccIotanalyticsPipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotanalyticsPipelinePipelineActivities <a name="DataAwsccIotanalyticsPipelinePipelineActivities" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivities.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivities {

};
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes {

};
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesChannel <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesChannel" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannel.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesChannel {

};
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore {

};
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich {

};
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich {

};
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesFilter <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesFilter" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilter.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesFilter {

};
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesLambda <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesLambda" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambda.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesLambda {

};
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesMath <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesMath" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMath"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMath.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesMath {

};
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes {

};
```


### DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes {

};
```


### DataAwsccIotanalyticsPipelineTags <a name="DataAwsccIotanalyticsPipelineTags" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelineTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.attributes">Attributes</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.next">Next</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes">DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.attributes"></a>

```csharp
public StringMap Attributes { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.next"></a>

```csharp
public string Next { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes">DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributes</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.channelName">ChannelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.next">Next</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannel">DataAwsccIotanalyticsPipelinePipelineActivitiesChannel</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.channelName"></a>

```csharp
public string ChannelName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.next"></a>

```csharp
public string Next { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesChannel InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannel">DataAwsccIotanalyticsPipelinePipelineActivitiesChannel</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.datastoreName">DatastoreName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore">DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatastoreName`<sup>Required</sup> <a name="DatastoreName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.datastoreName"></a>

```csharp
public string DatastoreName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore">DataAwsccIotanalyticsPipelinePipelineActivitiesDatastore</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.next">Next</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.thingName">ThingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.next"></a>

```csharp
public string Next { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `ThingName`<sup>Required</sup> <a name="ThingName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.thingName"></a>

```csharp
public string ThingName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrich</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.next">Next</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.thingName">ThingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.next"></a>

```csharp
public string Next { get; }
```

- *Type:* string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `ThingName`<sup>Required</sup> <a name="ThingName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.thingName"></a>

```csharp
public string ThingName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrich</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.next">Next</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilter">DataAwsccIotanalyticsPipelinePipelineActivitiesFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.next"></a>

```csharp
public string Next { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesFilter InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilter">DataAwsccIotanalyticsPipelinePipelineActivitiesFilter</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.batchSize">BatchSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.lambdaName">LambdaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.next">Next</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambda">DataAwsccIotanalyticsPipelinePipelineActivitiesLambda</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.batchSize"></a>

```csharp
public double BatchSize { get; }
```

- *Type:* double

---

##### `LambdaName`<sup>Required</sup> <a name="LambdaName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.lambdaName"></a>

```csharp
public string LambdaName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.next"></a>

```csharp
public string Next { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesLambda InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambda">DataAwsccIotanalyticsPipelinePipelineActivitiesLambda</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesList <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.get"></a>

```csharp
private DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.math">Math</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.next">Next</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMath">DataAwsccIotanalyticsPipelinePipelineActivitiesMath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `Math`<sup>Required</sup> <a name="Math" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.math"></a>

```csharp
public string Math { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.next"></a>

```csharp
public string Next { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesMath InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMath">DataAwsccIotanalyticsPipelinePipelineActivitiesMath</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.addAttributes">AddAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.channel">Channel</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.datastore">Datastore</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceRegistryEnrich">DeviceRegistryEnrich</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceShadowEnrich">DeviceShadowEnrich</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.lambda">Lambda</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.math">Math</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.removeAttributes">RemoveAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.selectAttributes">SelectAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivities">DataAwsccIotanalyticsPipelinePipelineActivities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddAttributes`<sup>Required</sup> <a name="AddAttributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.addAttributes"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference AddAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesAddAttributesOutputReference</a>

---

##### `Channel`<sup>Required</sup> <a name="Channel" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.channel"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference Channel { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesChannelOutputReference</a>

---

##### `Datastore`<sup>Required</sup> <a name="Datastore" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.datastore"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference Datastore { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesDatastoreOutputReference</a>

---

##### `DeviceRegistryEnrich`<sup>Required</sup> <a name="DeviceRegistryEnrich" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceRegistryEnrich"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference DeviceRegistryEnrich { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceRegistryEnrichOutputReference</a>

---

##### `DeviceShadowEnrich`<sup>Required</sup> <a name="DeviceShadowEnrich" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.deviceShadowEnrich"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference DeviceShadowEnrich { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesDeviceShadowEnrichOutputReference</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.filter"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference Filter { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesFilterOutputReference</a>

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.lambda"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference Lambda { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesLambdaOutputReference</a>

---

##### `Math`<sup>Required</sup> <a name="Math" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.math"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference Math { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesMathOutputReference</a>

---

##### `RemoveAttributes`<sup>Required</sup> <a name="RemoveAttributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.removeAttributes"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference RemoveAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference</a>

---

##### `SelectAttributes`<sup>Required</sup> <a name="SelectAttributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.selectAttributes"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference SelectAttributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference">DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivities InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivities">DataAwsccIotanalyticsPipelinePipelineActivities</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.attributes">Attributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.next">Next</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes">DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.attributes"></a>

```csharp
public string[] Attributes { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.next"></a>

```csharp
public string Next { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes">DataAwsccIotanalyticsPipelinePipelineActivitiesRemoveAttributes</a>

---


### DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference <a name="DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.attributes">Attributes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.next">Next</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes">DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.attributes"></a>

```csharp
public string[] Attributes { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Next`<sup>Required</sup> <a name="Next" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.next"></a>

```csharp
public string Next { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes">DataAwsccIotanalyticsPipelinePipelineActivitiesSelectAttributes</a>

---


### DataAwsccIotanalyticsPipelineTagsList <a name="DataAwsccIotanalyticsPipelineTagsList" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelineTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.get"></a>

```csharp
private DataAwsccIotanalyticsPipelineTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccIotanalyticsPipelineTagsOutputReference <a name="DataAwsccIotanalyticsPipelineTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccIotanalyticsPipelineTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTags">DataAwsccIotanalyticsPipelineTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccIotanalyticsPipelineTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotanalyticsPipeline.DataAwsccIotanalyticsPipelineTags">DataAwsccIotanalyticsPipelineTags</a>

---



