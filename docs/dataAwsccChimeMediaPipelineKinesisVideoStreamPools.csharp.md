# `dataAwsccChimeMediaPipelineKinesisVideoStreamPools` Submodule <a name="`dataAwsccChimeMediaPipelineKinesisVideoStreamPools` Submodule" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccChimeMediaPipelineKinesisVideoStreamPools <a name="DataAwsccChimeMediaPipelineKinesisVideoStreamPools" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/chime_media_pipeline_kinesis_video_stream_pools awscc_chime_media_pipeline_kinesis_video_stream_pools}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccChimeMediaPipelineKinesisVideoStreamPools(Construct Scope, string Id, DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig">DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccChimeMediaPipelineKinesisVideoStreamPools resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccChimeMediaPipelineKinesisVideoStreamPools.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccChimeMediaPipelineKinesisVideoStreamPools.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccChimeMediaPipelineKinesisVideoStreamPools.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccChimeMediaPipelineKinesisVideoStreamPools.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccChimeMediaPipelineKinesisVideoStreamPools resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccChimeMediaPipelineKinesisVideoStreamPools to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccChimeMediaPipelineKinesisVideoStreamPools that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/chime_media_pipeline_kinesis_video_stream_pools#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccChimeMediaPipelineKinesisVideoStreamPools to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPools.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig <a name="DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccChimeMediaPipelineKinesisVideoStreamPools.DataAwsccChimeMediaPipelineKinesisVideoStreamPoolsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---



