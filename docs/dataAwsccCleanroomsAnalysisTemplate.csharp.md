# `dataAwsccCleanroomsAnalysisTemplate` Submodule <a name="`dataAwsccCleanroomsAnalysisTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCleanroomsAnalysisTemplate <a name="DataAwsccCleanroomsAnalysisTemplate" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cleanrooms_analysis_template awscc_cleanrooms_analysis_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplate(Construct Scope, string Id, DataAwsccCleanroomsAnalysisTemplateConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig">DataAwsccCleanroomsAnalysisTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig">DataAwsccCleanroomsAnalysisTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccCleanroomsAnalysisTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCleanroomsAnalysisTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCleanroomsAnalysisTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCleanroomsAnalysisTemplate.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccCleanroomsAnalysisTemplate.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccCleanroomsAnalysisTemplate resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccCleanroomsAnalysisTemplate to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccCleanroomsAnalysisTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cleanrooms_analysis_template#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCleanroomsAnalysisTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.analysisParameters">AnalysisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList">DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.analysisTemplateIdentifier">AnalysisTemplateIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.collaborationArn">CollaborationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.collaborationIdentifier">CollaborationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.errorMessageConfiguration">ErrorMessageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference">DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.membershipArn">MembershipArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference">DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.sourceMetadata">SourceMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.syntheticDataParameters">SyntheticDataParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList">DataAwsccCleanroomsAnalysisTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AnalysisParameters`<sup>Required</sup> <a name="AnalysisParameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.analysisParameters"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList AnalysisParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList">DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList</a>

---

##### `AnalysisTemplateIdentifier`<sup>Required</sup> <a name="AnalysisTemplateIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.analysisTemplateIdentifier"></a>

```csharp
public string AnalysisTemplateIdentifier { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CollaborationArn`<sup>Required</sup> <a name="CollaborationArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.collaborationArn"></a>

```csharp
public string CollaborationArn { get; }
```

- *Type:* string

---

##### `CollaborationIdentifier`<sup>Required</sup> <a name="CollaborationIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.collaborationIdentifier"></a>

```csharp
public string CollaborationIdentifier { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ErrorMessageConfiguration`<sup>Required</sup> <a name="ErrorMessageConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.errorMessageConfiguration"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference ErrorMessageConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference">DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference</a>

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `MembershipArn`<sup>Required</sup> <a name="MembershipArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.membershipArn"></a>

```csharp
public string MembershipArn { get; }
```

- *Type:* string

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.membershipIdentifier"></a>

```csharp
public string MembershipIdentifier { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.schema"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference Schema { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference">DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.source"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceOutputReference</a>

---

##### `SourceMetadata`<sup>Required</sup> <a name="SourceMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.sourceMetadata"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference SourceMetadata { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference</a>

---

##### `SyntheticDataParameters`<sup>Required</sup> <a name="SyntheticDataParameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.syntheticDataParameters"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference SyntheticDataParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.tags"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList">DataAwsccCleanroomsAnalysisTemplateTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCleanroomsAnalysisTemplateAnalysisParameters <a name="DataAwsccCleanroomsAnalysisTemplateAnalysisParameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateAnalysisParameters {

};
```


### DataAwsccCleanroomsAnalysisTemplateConfig <a name="DataAwsccCleanroomsAnalysisTemplateConfig" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/cleanrooms_analysis_template#id DataAwsccCleanroomsAnalysisTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration <a name="DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration {

};
```


### DataAwsccCleanroomsAnalysisTemplateSchema <a name="DataAwsccCleanroomsAnalysisTemplateSchema" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSchema {

};
```


### DataAwsccCleanroomsAnalysisTemplateSource <a name="DataAwsccCleanroomsAnalysisTemplateSource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSource.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSource {

};
```


### DataAwsccCleanroomsAnalysisTemplateSourceArtifacts <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifacts" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifacts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceArtifacts {

};
```


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts {

};
```


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation {

};
```


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint {

};
```


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation {

};
```


### DataAwsccCleanroomsAnalysisTemplateSourceMetadata <a name="DataAwsccCleanroomsAnalysisTemplateSourceMetadata" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadata.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceMetadata {

};
```


### DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts <a name="DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts {

};
```


### DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes <a name="DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes {

};
```


### DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash <a name="DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash {

};
```


### DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters <a name="DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters {

};
```


### DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters <a name="DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters {

};
```


### DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification <a name="DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification {

};
```


### DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping <a name="DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping {

};
```


### DataAwsccCleanroomsAnalysisTemplateTags <a name="DataAwsccCleanroomsAnalysisTemplateTags" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList <a name="DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.get"></a>

```csharp
private DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.defaultValue">DefaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParameters">DataAwsccCleanroomsAnalysisTemplateAnalysisParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.defaultValue"></a>

```csharp
public string DefaultValue { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateAnalysisParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateAnalysisParameters">DataAwsccCleanroomsAnalysisTemplateAnalysisParameters</a>

---


### DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration">DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration">DataAwsccCleanroomsAnalysisTemplateErrorMessageConfiguration</a>

---


### DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.property.referencedTables">ReferencedTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchema">DataAwsccCleanroomsAnalysisTemplateSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ReferencedTables`<sup>Required</sup> <a name="ReferencedTables" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.property.referencedTables"></a>

```csharp
public string[] ReferencedTables { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchemaOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSchema InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSchema">DataAwsccCleanroomsAnalysisTemplateSchema</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.get"></a>

```csharp
private DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.location"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.location"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference Location { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.additionalArtifacts">AdditionalArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.entryPoint">EntryPoint</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.roleArn">RoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifacts">DataAwsccCleanroomsAnalysisTemplateSourceArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalArtifacts`<sup>Required</sup> <a name="AdditionalArtifacts" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.additionalArtifacts"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList AdditionalArtifacts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList</a>

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.entryPoint"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference EntryPoint { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference</a>

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.roleArn"></a>

```csharp
public string RoleArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceArtifacts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifacts">DataAwsccCleanroomsAnalysisTemplateSourceArtifacts</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList <a name="DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.get"></a>

```csharp
private DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.sha256">Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.sha256"></a>

```csharp
public string Sha256 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.sha256">Sha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.sha256"></a>

```csharp
public string Sha256 { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.additionalArtifactHashes">AdditionalArtifactHashes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.entryPointHash">EntryPointHash</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdditionalArtifactHashes`<sup>Required</sup> <a name="AdditionalArtifactHashes" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.additionalArtifactHashes"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList AdditionalArtifactHashes { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList</a>

---

##### `EntryPointHash`<sup>Required</sup> <a name="EntryPointHash" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.entryPointHash"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference EntryPointHash { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifacts</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.property.artifacts">Artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadata">DataAwsccCleanroomsAnalysisTemplateSourceMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Artifacts`<sup>Required</sup> <a name="Artifacts" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.property.artifacts"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference Artifacts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadataOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceMetadata">DataAwsccCleanroomsAnalysisTemplateSourceMetadata</a>

---


### DataAwsccCleanroomsAnalysisTemplateSourceOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.artifacts">Artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSource">DataAwsccCleanroomsAnalysisTemplateSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Artifacts`<sup>Required</sup> <a name="Artifacts" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.artifacts"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference Artifacts { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference">DataAwsccCleanroomsAnalysisTemplateSourceArtifactsOutputReference</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSourceOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSource InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSource">DataAwsccCleanroomsAnalysisTemplateSource</a>

---


### DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList <a name="DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.get"></a>

```csharp
private DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnType">ColumnType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.isPredictiveValue">IsPredictiveValue</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `ColumnType`<sup>Required</sup> <a name="ColumnType" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnType"></a>

```csharp
public string ColumnType { get; }
```

- *Type:* string

---

##### `IsPredictiveValue`<sup>Required</sup> <a name="IsPredictiveValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.isPredictiveValue"></a>

```csharp
public IResolvable IsPredictiveValue { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping</a>

---


### DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.columnMapping">ColumnMapping</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnMapping`<sup>Required</sup> <a name="ColumnMapping" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.columnMapping"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList ColumnMapping { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a>

---


### DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.columnClassification">ColumnClassification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.epsilon">Epsilon</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.maxMembershipInferenceAttackScore">MaxMembershipInferenceAttackScore</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ColumnClassification`<sup>Required</sup> <a name="ColumnClassification" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.columnClassification"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference ColumnClassification { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference</a>

---

##### `Epsilon`<sup>Required</sup> <a name="Epsilon" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.epsilon"></a>

```csharp
public double Epsilon { get; }
```

- *Type:* double

---

##### `MaxMembershipInferenceAttackScore`<sup>Required</sup> <a name="MaxMembershipInferenceAttackScore" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.maxMembershipInferenceAttackScore"></a>

```csharp
public double MaxMembershipInferenceAttackScore { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a>

---


### DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.mlSyntheticDataParameters">MlSyntheticDataParameters</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MlSyntheticDataParameters`<sup>Required</sup> <a name="MlSyntheticDataParameters" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.mlSyntheticDataParameters"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference MlSyntheticDataParameters { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters">DataAwsccCleanroomsAnalysisTemplateSyntheticDataParameters</a>

---


### DataAwsccCleanroomsAnalysisTemplateTagsList <a name="DataAwsccCleanroomsAnalysisTemplateTagsList" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.get"></a>

```csharp
private DataAwsccCleanroomsAnalysisTemplateTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccCleanroomsAnalysisTemplateTagsOutputReference <a name="DataAwsccCleanroomsAnalysisTemplateTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccCleanroomsAnalysisTemplateTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTags">DataAwsccCleanroomsAnalysisTemplateTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccCleanroomsAnalysisTemplateTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCleanroomsAnalysisTemplate.DataAwsccCleanroomsAnalysisTemplateTags">DataAwsccCleanroomsAnalysisTemplateTags</a>

---



