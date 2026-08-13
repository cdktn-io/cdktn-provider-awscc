# `dataAwsccMwaaEnvironment` Submodule <a name="`dataAwsccMwaaEnvironment` Submodule" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccMwaaEnvironment <a name="DataAwsccMwaaEnvironment" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/mwaa_environment awscc_mwaa_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMwaaEnvironment(Construct Scope, string Id, DataAwsccMwaaEnvironmentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig">DataAwsccMwaaEnvironmentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig">DataAwsccMwaaEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccMwaaEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMwaaEnvironment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMwaaEnvironment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMwaaEnvironment.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccMwaaEnvironment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccMwaaEnvironment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccMwaaEnvironment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccMwaaEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/mwaa_environment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccMwaaEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.airflowConfigurationOptions">AirflowConfigurationOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.airflowVersion">AirflowVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.celeryExecutorQueue">CeleryExecutorQueue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.dagS3Path">DagS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.databaseVpcEndpointService">DatabaseVpcEndpointService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.endpointManagement">EndpointManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.environmentClass">EnvironmentClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.executionRoleArn">ExecutionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.loggingConfiguration">LoggingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.maxWebservers">MaxWebservers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.maxWorkers">MaxWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.minWebservers">MinWebservers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.minWorkers">MinWorkers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference">DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.pluginsS3ObjectVersion">PluginsS3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.pluginsS3Path">PluginsS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.requirementsS3ObjectVersion">RequirementsS3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.requirementsS3Path">RequirementsS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.schedulers">Schedulers</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.sourceBucketArn">SourceBucketArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.startupScriptS3ObjectVersion">StartupScriptS3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.startupScriptS3Path">StartupScriptS3Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.tags">Tags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.webserverAccessMode">WebserverAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.webserverUrl">WebserverUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.webserverVpcEndpointService">WebserverVpcEndpointService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.weeklyMaintenanceWindowStart">WeeklyMaintenanceWindowStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.workerReplacementStrategy">WorkerReplacementStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AirflowConfigurationOptions`<sup>Required</sup> <a name="AirflowConfigurationOptions" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.airflowConfigurationOptions"></a>

```csharp
public string AirflowConfigurationOptions { get; }
```

- *Type:* string

---

##### `AirflowVersion`<sup>Required</sup> <a name="AirflowVersion" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.airflowVersion"></a>

```csharp
public string AirflowVersion { get; }
```

- *Type:* string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `CeleryExecutorQueue`<sup>Required</sup> <a name="CeleryExecutorQueue" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.celeryExecutorQueue"></a>

```csharp
public string CeleryExecutorQueue { get; }
```

- *Type:* string

---

##### `DagS3Path`<sup>Required</sup> <a name="DagS3Path" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.dagS3Path"></a>

```csharp
public string DagS3Path { get; }
```

- *Type:* string

---

##### `DatabaseVpcEndpointService`<sup>Required</sup> <a name="DatabaseVpcEndpointService" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.databaseVpcEndpointService"></a>

```csharp
public string DatabaseVpcEndpointService { get; }
```

- *Type:* string

---

##### `EndpointManagement`<sup>Required</sup> <a name="EndpointManagement" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.endpointManagement"></a>

```csharp
public string EndpointManagement { get; }
```

- *Type:* string

---

##### `EnvironmentClass`<sup>Required</sup> <a name="EnvironmentClass" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.environmentClass"></a>

```csharp
public string EnvironmentClass { get; }
```

- *Type:* string

---

##### `ExecutionRoleArn`<sup>Required</sup> <a name="ExecutionRoleArn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.executionRoleArn"></a>

```csharp
public string ExecutionRoleArn { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `LoggingConfiguration`<sup>Required</sup> <a name="LoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.loggingConfiguration"></a>

```csharp
public DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference LoggingConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference</a>

---

##### `MaxWebservers`<sup>Required</sup> <a name="MaxWebservers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.maxWebservers"></a>

```csharp
public double MaxWebservers { get; }
```

- *Type:* double

---

##### `MaxWorkers`<sup>Required</sup> <a name="MaxWorkers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.maxWorkers"></a>

```csharp
public double MaxWorkers { get; }
```

- *Type:* double

---

##### `MinWebservers`<sup>Required</sup> <a name="MinWebservers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.minWebservers"></a>

```csharp
public double MinWebservers { get; }
```

- *Type:* double

---

##### `MinWorkers`<sup>Required</sup> <a name="MinWorkers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.minWorkers"></a>

```csharp
public double MinWorkers { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.networkConfiguration"></a>

```csharp
public DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference NetworkConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference">DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference</a>

---

##### `PluginsS3ObjectVersion`<sup>Required</sup> <a name="PluginsS3ObjectVersion" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.pluginsS3ObjectVersion"></a>

```csharp
public string PluginsS3ObjectVersion { get; }
```

- *Type:* string

---

##### `PluginsS3Path`<sup>Required</sup> <a name="PluginsS3Path" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.pluginsS3Path"></a>

```csharp
public string PluginsS3Path { get; }
```

- *Type:* string

---

##### `RequirementsS3ObjectVersion`<sup>Required</sup> <a name="RequirementsS3ObjectVersion" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.requirementsS3ObjectVersion"></a>

```csharp
public string RequirementsS3ObjectVersion { get; }
```

- *Type:* string

---

##### `RequirementsS3Path`<sup>Required</sup> <a name="RequirementsS3Path" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.requirementsS3Path"></a>

```csharp
public string RequirementsS3Path { get; }
```

- *Type:* string

---

##### `Schedulers`<sup>Required</sup> <a name="Schedulers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.schedulers"></a>

```csharp
public double Schedulers { get; }
```

- *Type:* double

---

##### `SourceBucketArn`<sup>Required</sup> <a name="SourceBucketArn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.sourceBucketArn"></a>

```csharp
public string SourceBucketArn { get; }
```

- *Type:* string

---

##### `StartupScriptS3ObjectVersion`<sup>Required</sup> <a name="StartupScriptS3ObjectVersion" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.startupScriptS3ObjectVersion"></a>

```csharp
public string StartupScriptS3ObjectVersion { get; }
```

- *Type:* string

---

##### `StartupScriptS3Path`<sup>Required</sup> <a name="StartupScriptS3Path" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.startupScriptS3Path"></a>

```csharp
public string StartupScriptS3Path { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.tags"></a>

```csharp
public string Tags { get; }
```

- *Type:* string

---

##### `WebserverAccessMode`<sup>Required</sup> <a name="WebserverAccessMode" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.webserverAccessMode"></a>

```csharp
public string WebserverAccessMode { get; }
```

- *Type:* string

---

##### `WebserverUrl`<sup>Required</sup> <a name="WebserverUrl" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.webserverUrl"></a>

```csharp
public string WebserverUrl { get; }
```

- *Type:* string

---

##### `WebserverVpcEndpointService`<sup>Required</sup> <a name="WebserverVpcEndpointService" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.webserverVpcEndpointService"></a>

```csharp
public string WebserverVpcEndpointService { get; }
```

- *Type:* string

---

##### `WeeklyMaintenanceWindowStart`<sup>Required</sup> <a name="WeeklyMaintenanceWindowStart" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.weeklyMaintenanceWindowStart"></a>

```csharp
public string WeeklyMaintenanceWindowStart { get; }
```

- *Type:* string

---

##### `WorkerReplacementStrategy`<sup>Required</sup> <a name="WorkerReplacementStrategy" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.workerReplacementStrategy"></a>

```csharp
public string WorkerReplacementStrategy { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccMwaaEnvironmentConfig <a name="DataAwsccMwaaEnvironmentConfig" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMwaaEnvironmentConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/mwaa_environment#id DataAwsccMwaaEnvironment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccMwaaEnvironmentLoggingConfiguration <a name="DataAwsccMwaaEnvironmentLoggingConfiguration" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMwaaEnvironmentLoggingConfiguration {

};
```


### DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs <a name="DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs {

};
```


### DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs <a name="DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs {

};
```


### DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs <a name="DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs {

};
```


### DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs <a name="DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs {

};
```


### DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs <a name="DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs {

};
```


### DataAwsccMwaaEnvironmentNetworkConfiguration <a name="DataAwsccMwaaEnvironmentNetworkConfiguration" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMwaaEnvironmentNetworkConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference <a name="DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs">DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```csharp
public string CloudwatchLogGroupArn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs">DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogs</a>

---


### DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference <a name="DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogs">DagProcessingLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogs">SchedulerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogs">TaskLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogs">WebserverLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogs">WorkerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfiguration">DataAwsccMwaaEnvironmentLoggingConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DagProcessingLogs`<sup>Required</sup> <a name="DagProcessingLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.dagProcessingLogs"></a>

```csharp
public DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference DagProcessingLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference</a>

---

##### `SchedulerLogs`<sup>Required</sup> <a name="SchedulerLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.schedulerLogs"></a>

```csharp
public DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference SchedulerLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference</a>

---

##### `TaskLogs`<sup>Required</sup> <a name="TaskLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.taskLogs"></a>

```csharp
public DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference TaskLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference</a>

---

##### `WebserverLogs`<sup>Required</sup> <a name="WebserverLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.webserverLogs"></a>

```csharp
public DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference WebserverLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference</a>

---

##### `WorkerLogs`<sup>Required</sup> <a name="WorkerLogs" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.workerLogs"></a>

```csharp
public DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference WorkerLogs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference">DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMwaaEnvironmentLoggingConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfiguration">DataAwsccMwaaEnvironmentLoggingConfiguration</a>

---


### DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference <a name="DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs">DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```csharp
public string CloudwatchLogGroupArn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs">DataAwsccMwaaEnvironmentLoggingConfigurationSchedulerLogs</a>

---


### DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference <a name="DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs">DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```csharp
public string CloudwatchLogGroupArn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs">DataAwsccMwaaEnvironmentLoggingConfigurationTaskLogs</a>

---


### DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference <a name="DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs">DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```csharp
public string CloudwatchLogGroupArn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs">DataAwsccMwaaEnvironmentLoggingConfigurationWebserverLogs</a>

---


### DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference <a name="DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.cloudwatchLogGroupArn">CloudwatchLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabled">Enabled</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs">DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudwatchLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogGroupArn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.cloudwatchLogGroupArn"></a>

```csharp
public string CloudwatchLogGroupArn { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs">DataAwsccMwaaEnvironmentLoggingConfigurationWorkerLogs</a>

---


### DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference <a name="DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfiguration">DataAwsccMwaaEnvironmentNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.securityGroupIds"></a>

```csharp
public string[] SecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataAwsccMwaaEnvironmentNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccMwaaEnvironment.DataAwsccMwaaEnvironmentNetworkConfiguration">DataAwsccMwaaEnvironmentNetworkConfiguration</a>

---



