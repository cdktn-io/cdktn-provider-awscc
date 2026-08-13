# `dataAwsccAppsyncFunctionConfiguration` Submodule <a name="`dataAwsccAppsyncFunctionConfiguration` Submodule" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccAppsyncFunctionConfiguration <a name="DataAwsccAppsyncFunctionConfiguration" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_function_configuration awscc_appsync_function_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppsyncFunctionConfiguration(Construct Scope, string Id, DataAwsccAppsyncFunctionConfigurationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig">DataAwsccAppsyncFunctionConfigurationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig">DataAwsccAppsyncFunctionConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccAppsyncFunctionConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAppsyncFunctionConfiguration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAppsyncFunctionConfiguration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAppsyncFunctionConfiguration.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccAppsyncFunctionConfiguration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccAppsyncFunctionConfiguration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccAppsyncFunctionConfiguration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccAppsyncFunctionConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_function_configuration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccAppsyncFunctionConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.apiId">ApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.codeS3Location">CodeS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.dataSourceName">DataSourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.functionArn">FunctionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.functionId">FunctionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.functionVersion">FunctionVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.maxBatchSize">MaxBatchSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.requestMappingTemplate">RequestMappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.requestMappingTemplateS3Location">RequestMappingTemplateS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.responseMappingTemplate">ResponseMappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.responseMappingTemplateS3Location">ResponseMappingTemplateS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.runtime">Runtime</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference">DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.syncConfig">SyncConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference">DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ApiId`<sup>Required</sup> <a name="ApiId" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.apiId"></a>

```csharp
public string ApiId { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `CodeS3Location`<sup>Required</sup> <a name="CodeS3Location" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.codeS3Location"></a>

```csharp
public string CodeS3Location { get; }
```

- *Type:* string

---

##### `DataSourceName`<sup>Required</sup> <a name="DataSourceName" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.dataSourceName"></a>

```csharp
public string DataSourceName { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `FunctionArn`<sup>Required</sup> <a name="FunctionArn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.functionArn"></a>

```csharp
public string FunctionArn { get; }
```

- *Type:* string

---

##### `FunctionId`<sup>Required</sup> <a name="FunctionId" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.functionId"></a>

```csharp
public string FunctionId { get; }
```

- *Type:* string

---

##### `FunctionVersion`<sup>Required</sup> <a name="FunctionVersion" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.functionVersion"></a>

```csharp
public string FunctionVersion { get; }
```

- *Type:* string

---

##### `MaxBatchSize`<sup>Required</sup> <a name="MaxBatchSize" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.maxBatchSize"></a>

```csharp
public double MaxBatchSize { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RequestMappingTemplate`<sup>Required</sup> <a name="RequestMappingTemplate" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.requestMappingTemplate"></a>

```csharp
public string RequestMappingTemplate { get; }
```

- *Type:* string

---

##### `RequestMappingTemplateS3Location`<sup>Required</sup> <a name="RequestMappingTemplateS3Location" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.requestMappingTemplateS3Location"></a>

```csharp
public string RequestMappingTemplateS3Location { get; }
```

- *Type:* string

---

##### `ResponseMappingTemplate`<sup>Required</sup> <a name="ResponseMappingTemplate" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.responseMappingTemplate"></a>

```csharp
public string ResponseMappingTemplate { get; }
```

- *Type:* string

---

##### `ResponseMappingTemplateS3Location`<sup>Required</sup> <a name="ResponseMappingTemplateS3Location" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.responseMappingTemplateS3Location"></a>

```csharp
public string ResponseMappingTemplateS3Location { get; }
```

- *Type:* string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.runtime"></a>

```csharp
public DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference Runtime { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference">DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference</a>

---

##### `SyncConfig`<sup>Required</sup> <a name="SyncConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.syncConfig"></a>

```csharp
public DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference SyncConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference">DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfiguration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccAppsyncFunctionConfigurationConfig <a name="DataAwsccAppsyncFunctionConfigurationConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppsyncFunctionConfigurationConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/appsync_function_configuration#id DataAwsccAppsyncFunctionConfiguration#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccAppsyncFunctionConfigurationRuntime <a name="DataAwsccAppsyncFunctionConfigurationRuntime" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntime.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppsyncFunctionConfigurationRuntime {

};
```


### DataAwsccAppsyncFunctionConfigurationSyncConfig <a name="DataAwsccAppsyncFunctionConfigurationSyncConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppsyncFunctionConfigurationSyncConfig {

};
```


### DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig <a name="DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference <a name="DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersion">RuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntime">DataAwsccAppsyncFunctionConfigurationRuntime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RuntimeVersion`<sup>Required</sup> <a name="RuntimeVersion" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.runtimeVersion"></a>

```csharp
public string RuntimeVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntimeOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAppsyncFunctionConfigurationRuntime InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationRuntime">DataAwsccAppsyncFunctionConfigurationRuntime</a>

---


### DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference <a name="DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn">LambdaConflictHandlerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LambdaConflictHandlerArn`<sup>Required</sup> <a name="LambdaConflictHandlerArn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn"></a>

```csharp
public string LambdaConflictHandlerArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig">DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfig</a>

---


### DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference <a name="DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetection">ConflictDetection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandler">ConflictHandler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfig">LambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference">DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfig">DataAwsccAppsyncFunctionConfigurationSyncConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConflictDetection`<sup>Required</sup> <a name="ConflictDetection" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictDetection"></a>

```csharp
public string ConflictDetection { get; }
```

- *Type:* string

---

##### `ConflictHandler`<sup>Required</sup> <a name="ConflictHandler" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.conflictHandler"></a>

```csharp
public string ConflictHandler { get; }
```

- *Type:* string

---

##### `LambdaConflictHandlerConfig`<sup>Required</sup> <a name="LambdaConflictHandlerConfig" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.lambdaConflictHandlerConfig"></a>

```csharp
public DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference LambdaConflictHandlerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference">DataAwsccAppsyncFunctionConfigurationSyncConfigLambdaConflictHandlerConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccAppsyncFunctionConfigurationSyncConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccAppsyncFunctionConfiguration.DataAwsccAppsyncFunctionConfigurationSyncConfig">DataAwsccAppsyncFunctionConfigurationSyncConfig</a>

---



