# `dataAwsccEc2NetworkInsightsAccessScopeAnalysis` Submodule <a name="`dataAwsccEc2NetworkInsightsAccessScopeAnalysis` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2NetworkInsightsAccessScopeAnalysis <a name="DataAwsccEc2NetworkInsightsAccessScopeAnalysis" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_network_insights_access_scope_analysis awscc_ec2_network_insights_access_scope_analysis}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeAnalysis(Construct Scope, string Id, DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig">DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig">DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccEc2NetworkInsightsAccessScopeAnalysis resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2NetworkInsightsAccessScopeAnalysis.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2NetworkInsightsAccessScopeAnalysis.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2NetworkInsightsAccessScopeAnalysis.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccEc2NetworkInsightsAccessScopeAnalysis.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccEc2NetworkInsightsAccessScopeAnalysis resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccEc2NetworkInsightsAccessScopeAnalysis to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccEc2NetworkInsightsAccessScopeAnalysis that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_network_insights_access_scope_analysis#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2NetworkInsightsAccessScopeAnalysis to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.analyzedEniCount">AnalyzedEniCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.endDate">EndDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.findingsFound">FindingsFound</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeAnalysisArn">NetworkInsightsAccessScopeAnalysisArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeAnalysisId">NetworkInsightsAccessScopeAnalysisId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeId">NetworkInsightsAccessScopeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.startDate">StartDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList">DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AnalyzedEniCount`<sup>Required</sup> <a name="AnalyzedEniCount" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.analyzedEniCount"></a>

```csharp
public double AnalyzedEniCount { get; }
```

- *Type:* double

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.endDate"></a>

```csharp
public string EndDate { get; }
```

- *Type:* string

---

##### `FindingsFound`<sup>Required</sup> <a name="FindingsFound" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.findingsFound"></a>

```csharp
public string FindingsFound { get; }
```

- *Type:* string

---

##### `NetworkInsightsAccessScopeAnalysisArn`<sup>Required</sup> <a name="NetworkInsightsAccessScopeAnalysisArn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeAnalysisArn"></a>

```csharp
public string NetworkInsightsAccessScopeAnalysisArn { get; }
```

- *Type:* string

---

##### `NetworkInsightsAccessScopeAnalysisId`<sup>Required</sup> <a name="NetworkInsightsAccessScopeAnalysisId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeAnalysisId"></a>

```csharp
public string NetworkInsightsAccessScopeAnalysisId { get; }
```

- *Type:* string

---

##### `NetworkInsightsAccessScopeId`<sup>Required</sup> <a name="NetworkInsightsAccessScopeId" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.networkInsightsAccessScopeId"></a>

```csharp
public string NetworkInsightsAccessScopeId { get; }
```

- *Type:* string

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.startDate"></a>

```csharp
public string StartDate { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.tags"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList">DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysis.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig <a name="DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_network_insights_access_scope_analysis#id DataAwsccEc2NetworkInsightsAccessScopeAnalysis#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2NetworkInsightsAccessScopeAnalysisTags <a name="DataAwsccEc2NetworkInsightsAccessScopeAnalysisTags" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeAnalysisTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList <a name="DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.get"></a>

```csharp
private DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference <a name="DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTags">DataAwsccEc2NetworkInsightsAccessScopeAnalysisTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccEc2NetworkInsightsAccessScopeAnalysisTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsAccessScopeAnalysis.DataAwsccEc2NetworkInsightsAccessScopeAnalysisTags">DataAwsccEc2NetworkInsightsAccessScopeAnalysisTags</a>

---



