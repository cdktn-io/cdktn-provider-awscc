# `dataAwsccOmicsWorkflow` Submodule <a name="`dataAwsccOmicsWorkflow` Submodule" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccOmicsWorkflow <a name="DataAwsccOmicsWorkflow" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/omics_workflow awscc_omics_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOmicsWorkflow(Construct Scope, string Id, DataAwsccOmicsWorkflowConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig">DataAwsccOmicsWorkflowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig">DataAwsccOmicsWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccOmicsWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOmicsWorkflow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOmicsWorkflow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOmicsWorkflow.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccOmicsWorkflow.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccOmicsWorkflow resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccOmicsWorkflow to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccOmicsWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/omics_workflow#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccOmicsWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.accelerators">Accelerators</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.definitionUri">DefinitionUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.engine">Engine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.main">Main</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.parameterTemplate">ParameterTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap">DataAwsccOmicsWorkflowParameterTemplateMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.storageCapacity">StorageCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.tags">Tags</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.uuid">Uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.workflowId">WorkflowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Accelerators`<sup>Required</sup> <a name="Accelerators" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.accelerators"></a>

```csharp
public string Accelerators { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `DefinitionUri`<sup>Required</sup> <a name="DefinitionUri" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.definitionUri"></a>

```csharp
public string DefinitionUri { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.engine"></a>

```csharp
public string Engine { get; }
```

- *Type:* string

---

##### `Main`<sup>Required</sup> <a name="Main" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.main"></a>

```csharp
public string Main { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParameterTemplate`<sup>Required</sup> <a name="ParameterTemplate" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.parameterTemplate"></a>

```csharp
public DataAwsccOmicsWorkflowParameterTemplateMap ParameterTemplate { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap">DataAwsccOmicsWorkflowParameterTemplateMap</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StorageCapacity`<sup>Required</sup> <a name="StorageCapacity" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.storageCapacity"></a>

```csharp
public double StorageCapacity { get; }
```

- *Type:* double

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.uuid"></a>

```csharp
public string Uuid { get; }
```

- *Type:* string

---

##### `WorkflowId`<sup>Required</sup> <a name="WorkflowId" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.workflowId"></a>

```csharp
public string WorkflowId { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccOmicsWorkflowConfig <a name="DataAwsccOmicsWorkflowConfig" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOmicsWorkflowConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/omics_workflow#id DataAwsccOmicsWorkflow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccOmicsWorkflowParameterTemplate <a name="DataAwsccOmicsWorkflowParameterTemplate" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOmicsWorkflowParameterTemplate {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccOmicsWorkflowParameterTemplateMap <a name="DataAwsccOmicsWorkflowParameterTemplateMap" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOmicsWorkflowParameterTemplateMap(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.get"></a>

```csharp
private DataAwsccOmicsWorkflowParameterTemplateOutputReference Get(string Key)
```

###### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.get.parameter.key"></a>

- *Type:* string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccOmicsWorkflowParameterTemplateOutputReference <a name="DataAwsccOmicsWorkflowParameterTemplateOutputReference" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccOmicsWorkflowParameterTemplateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, string ComplexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.Initializer.parameter.complexObjectKey">ComplexObjectKey</a></code> | <code>string</code> | the key of this item in the map. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectKey`<sup>Required</sup> <a name="ComplexObjectKey" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.property.optional">Optional</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplate">DataAwsccOmicsWorkflowParameterTemplate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Optional`<sup>Required</sup> <a name="Optional" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.property.optional"></a>

```csharp
public IResolvable Optional { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplateOutputReference.property.internalValue"></a>

```csharp
public DataAwsccOmicsWorkflowParameterTemplate InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccOmicsWorkflow.DataAwsccOmicsWorkflowParameterTemplate">DataAwsccOmicsWorkflowParameterTemplate</a>

---



