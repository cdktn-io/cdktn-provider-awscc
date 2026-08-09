# `dataAwsccDatapipelinePipeline` Submodule <a name="`dataAwsccDatapipelinePipeline` Submodule" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDatapipelinePipeline <a name="DataAwsccDatapipelinePipeline" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datapipeline_pipeline awscc_datapipeline_pipeline}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipeline(Construct Scope, string Id, DataAwsccDatapipelinePipelineConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig">DataAwsccDatapipelinePipelineConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig">DataAwsccDatapipelinePipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccDatapipelinePipeline resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDatapipelinePipeline.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDatapipelinePipeline.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDatapipelinePipeline.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccDatapipelinePipeline.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccDatapipelinePipeline resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccDatapipelinePipeline to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccDatapipelinePipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datapipeline_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDatapipelinePipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.activate">Activate</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.parameterObjects">ParameterObjects</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList">DataAwsccDatapipelinePipelineParameterObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.parameterValues">ParameterValues</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList">DataAwsccDatapipelinePipelineParameterValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.pipelineObjects">PipelineObjects</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList">DataAwsccDatapipelinePipelinePipelineObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.pipelineTags">PipelineTags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList">DataAwsccDatapipelinePipelinePipelineTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Activate`<sup>Required</sup> <a name="Activate" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.activate"></a>

```csharp
public IResolvable Activate { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParameterObjects`<sup>Required</sup> <a name="ParameterObjects" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.parameterObjects"></a>

```csharp
public DataAwsccDatapipelinePipelineParameterObjectsList ParameterObjects { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList">DataAwsccDatapipelinePipelineParameterObjectsList</a>

---

##### `ParameterValues`<sup>Required</sup> <a name="ParameterValues" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.parameterValues"></a>

```csharp
public DataAwsccDatapipelinePipelineParameterValuesList ParameterValues { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList">DataAwsccDatapipelinePipelineParameterValuesList</a>

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `PipelineObjects`<sup>Required</sup> <a name="PipelineObjects" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.pipelineObjects"></a>

```csharp
public DataAwsccDatapipelinePipelinePipelineObjectsList PipelineObjects { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList">DataAwsccDatapipelinePipelinePipelineObjectsList</a>

---

##### `PipelineTags`<sup>Required</sup> <a name="PipelineTags" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.pipelineTags"></a>

```csharp
public DataAwsccDatapipelinePipelinePipelineTagsList PipelineTags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList">DataAwsccDatapipelinePipelinePipelineTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipeline.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDatapipelinePipelineConfig <a name="DataAwsccDatapipelinePipelineConfig" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelineConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/datapipeline_pipeline#id DataAwsccDatapipelinePipeline#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDatapipelinePipelineParameterObjects <a name="DataAwsccDatapipelinePipelineParameterObjects" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjects.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelineParameterObjects {

};
```


### DataAwsccDatapipelinePipelineParameterObjectsAttributes <a name="DataAwsccDatapipelinePipelineParameterObjectsAttributes" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelineParameterObjectsAttributes {

};
```


### DataAwsccDatapipelinePipelineParameterValues <a name="DataAwsccDatapipelinePipelineParameterValues" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValues.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelineParameterValues {

};
```


### DataAwsccDatapipelinePipelinePipelineObjects <a name="DataAwsccDatapipelinePipelinePipelineObjects" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjects.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelinePipelineObjects {

};
```


### DataAwsccDatapipelinePipelinePipelineObjectsFields <a name="DataAwsccDatapipelinePipelinePipelineObjectsFields" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelinePipelineObjectsFields {

};
```


### DataAwsccDatapipelinePipelinePipelineTags <a name="DataAwsccDatapipelinePipelinePipelineTags" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelinePipelineTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDatapipelinePipelineParameterObjectsAttributesList <a name="DataAwsccDatapipelinePipelineParameterObjectsAttributesList" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelineParameterObjectsAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.get"></a>

```csharp
private DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference <a name="DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributes">DataAwsccDatapipelinePipelineParameterObjectsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDatapipelinePipelineParameterObjectsAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributes">DataAwsccDatapipelinePipelineParameterObjectsAttributes</a>

---


### DataAwsccDatapipelinePipelineParameterObjectsList <a name="DataAwsccDatapipelinePipelineParameterObjectsList" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelineParameterObjectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.get"></a>

```csharp
private DataAwsccDatapipelinePipelineParameterObjectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDatapipelinePipelineParameterObjectsOutputReference <a name="DataAwsccDatapipelinePipelineParameterObjectsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelineParameterObjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.attributes">Attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList">DataAwsccDatapipelinePipelineParameterObjectsAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjects">DataAwsccDatapipelinePipelineParameterObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.attributes"></a>

```csharp
public DataAwsccDatapipelinePipelineParameterObjectsAttributesList Attributes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsAttributesList">DataAwsccDatapipelinePipelineParameterObjectsAttributesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjectsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDatapipelinePipelineParameterObjects InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterObjects">DataAwsccDatapipelinePipelineParameterObjects</a>

---


### DataAwsccDatapipelinePipelineParameterValuesList <a name="DataAwsccDatapipelinePipelineParameterValuesList" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelineParameterValuesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.get"></a>

```csharp
private DataAwsccDatapipelinePipelineParameterValuesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDatapipelinePipelineParameterValuesOutputReference <a name="DataAwsccDatapipelinePipelineParameterValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelineParameterValuesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValues">DataAwsccDatapipelinePipelineParameterValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValuesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDatapipelinePipelineParameterValues InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelineParameterValues">DataAwsccDatapipelinePipelineParameterValues</a>

---


### DataAwsccDatapipelinePipelinePipelineObjectsFieldsList <a name="DataAwsccDatapipelinePipelinePipelineObjectsFieldsList" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelinePipelineObjectsFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.get"></a>

```csharp
private DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference <a name="DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValue">RefValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFields">DataAwsccDatapipelinePipelinePipelineObjectsFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `RefValue`<sup>Required</sup> <a name="RefValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.refValue"></a>

```csharp
public string RefValue { get; }
```

- *Type:* string

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDatapipelinePipelinePipelineObjectsFields InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFields">DataAwsccDatapipelinePipelinePipelineObjectsFields</a>

---


### DataAwsccDatapipelinePipelinePipelineObjectsList <a name="DataAwsccDatapipelinePipelinePipelineObjectsList" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelinePipelineObjectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.get"></a>

```csharp
private DataAwsccDatapipelinePipelinePipelineObjectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDatapipelinePipelinePipelineObjectsOutputReference <a name="DataAwsccDatapipelinePipelinePipelineObjectsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelinePipelineObjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList">DataAwsccDatapipelinePipelinePipelineObjectsFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjects">DataAwsccDatapipelinePipelinePipelineObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.fields"></a>

```csharp
public DataAwsccDatapipelinePipelinePipelineObjectsFieldsList Fields { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsFieldsList">DataAwsccDatapipelinePipelinePipelineObjectsFieldsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjectsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDatapipelinePipelinePipelineObjects InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineObjects">DataAwsccDatapipelinePipelinePipelineObjects</a>

---


### DataAwsccDatapipelinePipelinePipelineTagsList <a name="DataAwsccDatapipelinePipelinePipelineTagsList" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelinePipelineTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.get"></a>

```csharp
private DataAwsccDatapipelinePipelinePipelineTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccDatapipelinePipelinePipelineTagsOutputReference <a name="DataAwsccDatapipelinePipelinePipelineTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccDatapipelinePipelinePipelineTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTags">DataAwsccDatapipelinePipelinePipelineTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccDatapipelinePipelinePipelineTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDatapipelinePipeline.DataAwsccDatapipelinePipelinePipelineTags">DataAwsccDatapipelinePipelinePipelineTags</a>

---



