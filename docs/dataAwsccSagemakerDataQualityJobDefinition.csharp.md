# `dataAwsccSagemakerDataQualityJobDefinition` Submodule <a name="`dataAwsccSagemakerDataQualityJobDefinition` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerDataQualityJobDefinition <a name="DataAwsccSagemakerDataQualityJobDefinition" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_data_quality_job_definition awscc_sagemaker_data_quality_job_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinition(Construct Scope, string Id, DataAwsccSagemakerDataQualityJobDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig">DataAwsccSagemakerDataQualityJobDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig">DataAwsccSagemakerDataQualityJobDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerDataQualityJobDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerDataQualityJobDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerDataQualityJobDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerDataQualityJobDefinition.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerDataQualityJobDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSagemakerDataQualityJobDefinition resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerDataQualityJobDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerDataQualityJobDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_data_quality_job_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerDataQualityJobDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.dataQualityAppSpecification">DataQualityAppSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.dataQualityBaselineConfig">DataQualityBaselineConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.dataQualityJobInput">DataQualityJobInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.dataQualityJobOutputConfig">DataQualityJobOutputConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.jobDefinitionArn">JobDefinitionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.jobDefinitionName">JobDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.jobResources">JobResources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference">DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference">DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.stoppingCondition">StoppingCondition</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference">DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList">DataAwsccSagemakerDataQualityJobDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DataQualityAppSpecification`<sup>Required</sup> <a name="DataQualityAppSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.dataQualityAppSpecification"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference DataQualityAppSpecification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference</a>

---

##### `DataQualityBaselineConfig`<sup>Required</sup> <a name="DataQualityBaselineConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.dataQualityBaselineConfig"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference DataQualityBaselineConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference</a>

---

##### `DataQualityJobInput`<sup>Required</sup> <a name="DataQualityJobInput" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.dataQualityJobInput"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference DataQualityJobInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference</a>

---

##### `DataQualityJobOutputConfig`<sup>Required</sup> <a name="DataQualityJobOutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.dataQualityJobOutputConfig"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference DataQualityJobOutputConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference</a>

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `JobDefinitionArn`<sup>Required</sup> <a name="JobDefinitionArn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.jobDefinitionArn"></a>

```csharp
public string JobDefinitionArn { get; }
```

- *Type:* string

---

##### `JobDefinitionName`<sup>Required</sup> <a name="JobDefinitionName" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.jobDefinitionName"></a>

```csharp
public string JobDefinitionName { get; }
```

- *Type:* string

---

##### `JobResources`<sup>Required</sup> <a name="JobResources" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.jobResources"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference JobResources { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference">DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference</a>

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.networkConfig"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference NetworkConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference">DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `StoppingCondition`<sup>Required</sup> <a name="StoppingCondition" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.stoppingCondition"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference StoppingCondition { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference">DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.tags"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList">DataAwsccSagemakerDataQualityJobDefinitionTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerDataQualityJobDefinitionConfig <a name="DataAwsccSagemakerDataQualityJobDefinitionConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/sagemaker_data_quality_job_definition#id DataAwsccSagemakerDataQualityJobDefinition#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecification <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecification" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecification {

};
```


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfig <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfig {

};
```


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource {

};
```


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource {

};
```


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInput <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInput" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInput {

};
```


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput {

};
```


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat {

};
```


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv {

};
```


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson {

};
```


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput {

};
```


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfig <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfig {

};
```


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs {

};
```


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output {

};
```


### DataAwsccSagemakerDataQualityJobDefinitionJobResources <a name="DataAwsccSagemakerDataQualityJobDefinitionJobResources" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResources.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionJobResources {

};
```


### DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfig <a name="DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfig {

};
```


### DataAwsccSagemakerDataQualityJobDefinitionNetworkConfig <a name="DataAwsccSagemakerDataQualityJobDefinitionNetworkConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionNetworkConfig {

};
```


### DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfig <a name="DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfig {

};
```


### DataAwsccSagemakerDataQualityJobDefinitionStoppingCondition <a name="DataAwsccSagemakerDataQualityJobDefinitionStoppingCondition" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingCondition.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionStoppingCondition {

};
```


### DataAwsccSagemakerDataQualityJobDefinitionTags <a name="DataAwsccSagemakerDataQualityJobDefinitionTags" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerArguments">ContainerArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerEntrypoint">ContainerEntrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.environment">Environment</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.imageUri">ImageUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUri">PostAnalyticsProcessorSourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUri">RecordPreprocessorSourceUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecification">DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerArguments`<sup>Required</sup> <a name="ContainerArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerArguments"></a>

```csharp
public string[] ContainerArguments { get; }
```

- *Type:* string[]

---

##### `ContainerEntrypoint`<sup>Required</sup> <a name="ContainerEntrypoint" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.containerEntrypoint"></a>

```csharp
public string[] ContainerEntrypoint { get; }
```

- *Type:* string[]

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.environment"></a>

```csharp
public StringMap Environment { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ImageUri`<sup>Required</sup> <a name="ImageUri" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.imageUri"></a>

```csharp
public string ImageUri { get; }
```

- *Type:* string

---

##### `PostAnalyticsProcessorSourceUri`<sup>Required</sup> <a name="PostAnalyticsProcessorSourceUri" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.postAnalyticsProcessorSourceUri"></a>

```csharp
public string PostAnalyticsProcessorSourceUri { get; }
```

- *Type:* string

---

##### `RecordPreprocessorSourceUri`<sup>Required</sup> <a name="RecordPreprocessorSourceUri" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.recordPreprocessorSourceUri"></a>

```csharp
public string RecordPreprocessorSourceUri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecificationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecification InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecification">DataAwsccSagemakerDataQualityJobDefinitionDataQualityAppSpecification</a>

---


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource">DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResource</a>

---


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.baseliningJobName">BaseliningJobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.constraintsResource">ConstraintsResource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.statisticsResource">StatisticsResource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfig">DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BaseliningJobName`<sup>Required</sup> <a name="BaseliningJobName" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.baseliningJobName"></a>

```csharp
public string BaseliningJobName { get; }
```

- *Type:* string

---

##### `ConstraintsResource`<sup>Required</sup> <a name="ConstraintsResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.constraintsResource"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference ConstraintsResource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigConstraintsResourceOutputReference</a>

---

##### `StatisticsResource`<sup>Required</sup> <a name="StatisticsResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.statisticsResource"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference StatisticsResource { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfig">DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfig</a>

---


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource">DataAwsccSagemakerDataQualityJobDefinitionDataQualityBaselineConfigStatisticsResource</a>

---


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header">Header</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.header"></a>

```csharp
public IResolvable Header { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsv</a>

---


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line">Line</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Line`<sup>Required</sup> <a name="Line" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.line"></a>

```csharp
public IResolvable Line { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJson</a>

---


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv">Csv</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.json">Json</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet">Parquet</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Csv`<sup>Required</sup> <a name="Csv" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.csv"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference Csv { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatCsvOutputReference</a>

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.json"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference Json { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatJsonOutputReference</a>

---

##### `Parquet`<sup>Required</sup> <a name="Parquet" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.parquet"></a>

```csharp
public IResolvable Parquet { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormat</a>

---


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri">DataCapturedDestinationS3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.datasetFormat">DatasetFormat</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.excludeFeaturesAttribute">ExcludeFeaturesAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.localPath">LocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3InputMode">S3InputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataCapturedDestinationS3Uri`<sup>Required</sup> <a name="DataCapturedDestinationS3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.dataCapturedDestinationS3Uri"></a>

```csharp
public string DataCapturedDestinationS3Uri { get; }
```

- *Type:* string

---

##### `DatasetFormat`<sup>Required</sup> <a name="DatasetFormat" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.datasetFormat"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference DatasetFormat { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputDatasetFormatOutputReference</a>

---

##### `ExcludeFeaturesAttribute`<sup>Required</sup> <a name="ExcludeFeaturesAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.excludeFeaturesAttribute"></a>

```csharp
public string ExcludeFeaturesAttribute { get; }
```

- *Type:* string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.localPath"></a>

```csharp
public string LocalPath { get; }
```

- *Type:* string

---

##### `S3DataDistributionType`<sup>Required</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3DataDistributionType"></a>

```csharp
public string S3DataDistributionType { get; }
```

- *Type:* string

---

##### `S3InputMode`<sup>Required</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.s3InputMode"></a>

```csharp
public string S3InputMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInput</a>

---


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.endpointName">EndpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.excludeFeaturesAttribute">ExcludeFeaturesAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.localPath">LocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3DataDistributionType">S3DataDistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3InputMode">S3InputMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.endpointName"></a>

```csharp
public string EndpointName { get; }
```

- *Type:* string

---

##### `ExcludeFeaturesAttribute`<sup>Required</sup> <a name="ExcludeFeaturesAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.excludeFeaturesAttribute"></a>

```csharp
public string ExcludeFeaturesAttribute { get; }
```

- *Type:* string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.localPath"></a>

```csharp
public string LocalPath { get; }
```

- *Type:* string

---

##### `S3DataDistributionType`<sup>Required</sup> <a name="S3DataDistributionType" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3DataDistributionType"></a>

```csharp
public string S3DataDistributionType { get; }
```

- *Type:* string

---

##### `S3InputMode`<sup>Required</sup> <a name="S3InputMode" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.s3InputMode"></a>

```csharp
public string S3InputMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInput</a>

---


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.batchTransformInput">BatchTransformInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.endpointInput">EndpointInput</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInput">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchTransformInput`<sup>Required</sup> <a name="BatchTransformInput" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.batchTransformInput"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference BatchTransformInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputBatchTransformInputOutputReference</a>

---

##### `EndpointInput`<sup>Required</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.endpointInput"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference EndpointInput { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputEndpointInputOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInputOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInput InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInput">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobInput</a>

---


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.get"></a>

```csharp
private DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output">S3Output</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `S3Output`<sup>Required</sup> <a name="S3Output" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.s3Output"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference S3Output { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputs</a>

---


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath">LocalPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode">S3UploadMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri">S3Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalPath`<sup>Required</sup> <a name="LocalPath" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.localPath"></a>

```csharp
public string LocalPath { get; }
```

- *Type:* string

---

##### `S3UploadMode`<sup>Required</sup> <a name="S3UploadMode" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3UploadMode"></a>

```csharp
public string S3UploadMode { get; }
```

- *Type:* string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.s3Uri"></a>

```csharp
public string S3Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3OutputOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsS3Output</a>

---


### DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.monitoringOutputs">MonitoringOutputs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.kmsKeyId"></a>

```csharp
public string KmsKeyId { get; }
```

- *Type:* string

---

##### `MonitoringOutputs`<sup>Required</sup> <a name="MonitoringOutputs" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.monitoringOutputs"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList MonitoringOutputs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigMonitoringOutputsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfig">DataAwsccSagemakerDataQualityJobDefinitionDataQualityJobOutputConfig</a>

---


### DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount">InstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb">VolumeSizeInGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfig">DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InstanceCount`<sup>Required</sup> <a name="InstanceCount" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceCount"></a>

```csharp
public double InstanceCount { get; }
```

- *Type:* double

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeKmsKeyId"></a>

```csharp
public string VolumeKmsKeyId { get; }
```

- *Type:* string

---

##### `VolumeSizeInGb`<sup>Required</sup> <a name="VolumeSizeInGb" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.volumeSizeInGb"></a>

```csharp
public double VolumeSizeInGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfig">DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfig</a>

---


### DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.clusterConfig">ClusterConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference">DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResources">DataAwsccSagemakerDataQualityJobDefinitionJobResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterConfig`<sup>Required</sup> <a name="ClusterConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.clusterConfig"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference ClusterConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference">DataAwsccSagemakerDataQualityJobDefinitionJobResourcesClusterConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResourcesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionJobResources InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionJobResources">DataAwsccSagemakerDataQualityJobDefinitionJobResources</a>

---


### DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption">EnableInterContainerTrafficEncryption</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation">EnableNetworkIsolation</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference">DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfig">DataAwsccSagemakerDataQualityJobDefinitionNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInterContainerTrafficEncryption`<sup>Required</sup> <a name="EnableInterContainerTrafficEncryption" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableInterContainerTrafficEncryption"></a>

```csharp
public IResolvable EnableInterContainerTrafficEncryption { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `EnableNetworkIsolation`<sup>Required</sup> <a name="EnableNetworkIsolation" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.enableNetworkIsolation"></a>

```csharp
public IResolvable EnableNetworkIsolation { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.vpcConfig"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference VpcConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference">DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfig">DataAwsccSagemakerDataQualityJobDefinitionNetworkConfig</a>

---


### DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.subnets"></a>

```csharp
public string[] Subnets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfig">DataAwsccSagemakerDataQualityJobDefinitionNetworkConfigVpcConfig</a>

---


### DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds">MaxRuntimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingCondition">DataAwsccSagemakerDataQualityJobDefinitionStoppingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaxRuntimeInSeconds`<sup>Required</sup> <a name="MaxRuntimeInSeconds" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.maxRuntimeInSeconds"></a>

```csharp
public double MaxRuntimeInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingConditionOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionStoppingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionStoppingCondition">DataAwsccSagemakerDataQualityJobDefinitionStoppingCondition</a>

---


### DataAwsccSagemakerDataQualityJobDefinitionTagsList <a name="DataAwsccSagemakerDataQualityJobDefinitionTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.get"></a>

```csharp
private DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference <a name="DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTags">DataAwsccSagemakerDataQualityJobDefinitionTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerDataQualityJobDefinitionTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerDataQualityJobDefinition.DataAwsccSagemakerDataQualityJobDefinitionTags">DataAwsccSagemakerDataQualityJobDefinitionTags</a>

---



