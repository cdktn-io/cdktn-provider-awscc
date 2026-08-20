# `dataAwsccEntityresolutionIdMappingWorkflow` Submodule <a name="`dataAwsccEntityresolutionIdMappingWorkflow` Submodule" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEntityresolutionIdMappingWorkflow <a name="DataAwsccEntityresolutionIdMappingWorkflow" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/entityresolution_id_mapping_workflow awscc_entityresolution_id_mapping_workflow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflow(Construct Scope, string Id, DataAwsccEntityresolutionIdMappingWorkflowConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig">DataAwsccEntityresolutionIdMappingWorkflowConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig">DataAwsccEntityresolutionIdMappingWorkflowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEntityresolutionIdMappingWorkflow resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEntityresolutionIdMappingWorkflow.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEntityresolutionIdMappingWorkflow.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEntityresolutionIdMappingWorkflow.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEntityresolutionIdMappingWorkflow.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEntityresolutionIdMappingWorkflow resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEntityresolutionIdMappingWorkflow to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEntityresolutionIdMappingWorkflow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/entityresolution_id_mapping_workflow#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEntityresolutionIdMappingWorkflow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.idMappingIncrementalRunConfig">IdMappingIncrementalRunConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.idMappingTechniques">IdMappingTechniques</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.inputSourceConfig">InputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList">DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.outputSourceConfig">OutputSourceConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList">DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList">DataAwsccEntityresolutionIdMappingWorkflowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.workflowArn">WorkflowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.workflowName">WorkflowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IdMappingIncrementalRunConfig`<sup>Required</sup> <a name="IdMappingIncrementalRunConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.idMappingIncrementalRunConfig"></a>

```csharp
public DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference IdMappingIncrementalRunConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference</a>

---

##### `IdMappingTechniques`<sup>Required</sup> <a name="IdMappingTechniques" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.idMappingTechniques"></a>

```csharp
public DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference IdMappingTechniques { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference</a>

---

##### `InputSourceConfig`<sup>Required</sup> <a name="InputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.inputSourceConfig"></a>

```csharp
public DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList InputSourceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList">DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList</a>

---

##### `OutputSourceConfig`<sup>Required</sup> <a name="OutputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.outputSourceConfig"></a>

```csharp
public DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList OutputSourceConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList">DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.tags"></a>

```csharp
public DataAwsccEntityresolutionIdMappingWorkflowTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList">DataAwsccEntityresolutionIdMappingWorkflowTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `WorkflowArn`<sup>Required</sup> <a name="WorkflowArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.workflowArn"></a>

```csharp
public string WorkflowArn { get; }
```

- *Type:* string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.workflowName"></a>

```csharp
public string WorkflowName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflow.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEntityresolutionIdMappingWorkflowConfig <a name="DataAwsccEntityresolutionIdMappingWorkflowConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/entityresolution_id_mapping_workflow#id DataAwsccEntityresolutionIdMappingWorkflow#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig {

};
```


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques {

};
```


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties {

};
```


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration {

};
```


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties {

};
```


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules {

};
```


### DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig <a name="DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig {

};
```


### DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig <a name="DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig {

};
```


### DataAwsccEntityresolutionIdMappingWorkflowTags <a name="DataAwsccEntityresolutionIdMappingWorkflowTags" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.incrementalRunType">IncrementalRunType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IncrementalRunType`<sup>Required</sup> <a name="IncrementalRunType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.incrementalRunType"></a>

```csharp
public string IncrementalRunType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig">DataAwsccEntityresolutionIdMappingWorkflowIdMappingIncrementalRunConfig</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.idMappingType">IdMappingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.normalizationVersion">NormalizationVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.providerProperties">ProviderProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.ruleBasedProperties">RuleBasedProperties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdMappingType`<sup>Required</sup> <a name="IdMappingType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.idMappingType"></a>

```csharp
public string IdMappingType { get; }
```

- *Type:* string

---

##### `NormalizationVersion`<sup>Required</sup> <a name="NormalizationVersion" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.normalizationVersion"></a>

```csharp
public string NormalizationVersion { get; }
```

- *Type:* string

---

##### `ProviderProperties`<sup>Required</sup> <a name="ProviderProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.providerProperties"></a>

```csharp
public DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference ProviderProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference</a>

---

##### `RuleBasedProperties`<sup>Required</sup> <a name="RuleBasedProperties" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.ruleBasedProperties"></a>

```csharp
public DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference RuleBasedProperties { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniques</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path">IntermediateS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntermediateS3Path`<sup>Required</sup> <a name="IntermediateS3Path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.intermediateS3Path"></a>

```csharp
public string IntermediateS3Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfiguration</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration">IntermediateSourceConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerConfiguration">ProviderConfiguration</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerServiceArn">ProviderServiceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntermediateSourceConfiguration`<sup>Required</sup> <a name="IntermediateSourceConfiguration" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.intermediateSourceConfiguration"></a>

```csharp
public DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference IntermediateSourceConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesIntermediateSourceConfigurationOutputReference</a>

---

##### `ProviderConfiguration`<sup>Required</sup> <a name="ProviderConfiguration" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerConfiguration"></a>

```csharp
public StringMap ProviderConfiguration { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `ProviderServiceArn`<sup>Required</sup> <a name="ProviderServiceArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.providerServiceArn"></a>

```csharp
public string ProviderServiceArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesProviderProperties</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel">AttributeMatchingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.recordMatchingModel">RecordMatchingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.ruleDefinitionType">RuleDefinitionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeMatchingModel`<sup>Required</sup> <a name="AttributeMatchingModel" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.attributeMatchingModel"></a>

```csharp
public string AttributeMatchingModel { get; }
```

- *Type:* string

---

##### `RecordMatchingModel`<sup>Required</sup> <a name="RecordMatchingModel" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.recordMatchingModel"></a>

```csharp
public string RecordMatchingModel { get; }
```

- *Type:* string

---

##### `RuleDefinitionType`<sup>Required</sup> <a name="RuleDefinitionType" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.ruleDefinitionType"></a>

```csharp
public string RuleDefinitionType { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.rules"></a>

```csharp
public DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedProperties</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.get"></a>

```csharp
private DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys">MatchingKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchingKeys`<sup>Required</sup> <a name="MatchingKeys" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.matchingKeys"></a>

```csharp
public string[] MatchingKeys { get; }
```

- *Type:* string[]

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRulesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules">DataAwsccEntityresolutionIdMappingWorkflowIdMappingTechniquesRuleBasedPropertiesRules</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList <a name="DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.get"></a>

```csharp
private DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.inputSourceArn">InputSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.schemaArn">SchemaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig">DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputSourceArn`<sup>Required</sup> <a name="InputSourceArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.inputSourceArn"></a>

```csharp
public string InputSourceArn { get; }
```

- *Type:* string

---

##### `SchemaArn`<sup>Required</sup> <a name="SchemaArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.schemaArn"></a>

```csharp
public string SchemaArn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig">DataAwsccEntityresolutionIdMappingWorkflowInputSourceConfig</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList <a name="DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.get"></a>

```csharp
private DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.kmsArn">KmsArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.outputS3Path">OutputS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig">DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsArn`<sup>Required</sup> <a name="KmsArn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.kmsArn"></a>

```csharp
public string KmsArn { get; }
```

- *Type:* string

---

##### `OutputS3Path`<sup>Required</sup> <a name="OutputS3Path" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.outputS3Path"></a>

```csharp
public string OutputS3Path { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig">DataAwsccEntityresolutionIdMappingWorkflowOutputSourceConfig</a>

---


### DataAwsccEntityresolutionIdMappingWorkflowTagsList <a name="DataAwsccEntityresolutionIdMappingWorkflowTagsList" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.get"></a>

```csharp
private DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference <a name="DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTags">DataAwsccEntityresolutionIdMappingWorkflowTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEntityresolutionIdMappingWorkflowTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEntityresolutionIdMappingWorkflow.DataAwsccEntityresolutionIdMappingWorkflowTags">DataAwsccEntityresolutionIdMappingWorkflowTags</a>

---



