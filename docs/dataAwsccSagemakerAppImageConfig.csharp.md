# `dataAwsccSagemakerAppImageConfig` Submodule <a name="`dataAwsccSagemakerAppImageConfig` Submodule" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSagemakerAppImageConfig <a name="DataAwsccSagemakerAppImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_app_image_config awscc_sagemaker_app_image_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfig(Construct Scope, string Id, DataAwsccSagemakerAppImageConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig">DataAwsccSagemakerAppImageConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig">DataAwsccSagemakerAppImageConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSagemakerAppImageConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerAppImageConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerAppImageConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isTerraformDataSource"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerAppImageConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

DataAwsccSagemakerAppImageConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a DataAwsccSagemakerAppImageConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsccSagemakerAppImageConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsccSagemakerAppImageConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_app_image_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSagemakerAppImageConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.appImageConfigArn">AppImageConfigArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.appImageConfigName">AppImageConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.codeEditorAppImageConfig">CodeEditorAppImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.jupyterLabAppImageConfig">JupyterLabAppImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.kernelGatewayImageConfig">KernelGatewayImageConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList">DataAwsccSagemakerAppImageConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `AppImageConfigArn`<sup>Required</sup> <a name="AppImageConfigArn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.appImageConfigArn"></a>

```csharp
public string AppImageConfigArn { get; }
```

- *Type:* string

---

##### `AppImageConfigName`<sup>Required</sup> <a name="AppImageConfigName" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.appImageConfigName"></a>

```csharp
public string AppImageConfigName { get; }
```

- *Type:* string

---

##### `CodeEditorAppImageConfig`<sup>Required</sup> <a name="CodeEditorAppImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.codeEditorAppImageConfig"></a>

```csharp
public DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference CodeEditorAppImageConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference</a>

---

##### `JupyterLabAppImageConfig`<sup>Required</sup> <a name="JupyterLabAppImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.jupyterLabAppImageConfig"></a>

```csharp
public DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference JupyterLabAppImageConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference</a>

---

##### `KernelGatewayImageConfig`<sup>Required</sup> <a name="KernelGatewayImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.kernelGatewayImageConfig"></a>

```csharp
public DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference KernelGatewayImageConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.tags"></a>

```csharp
public DataAwsccSagemakerAppImageConfigTagsList Tags { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList">DataAwsccSagemakerAppImageConfigTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig {

};
```


### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig {

};
```


### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables {

};
```


### DataAwsccSagemakerAppImageConfigConfig <a name="DataAwsccSagemakerAppImageConfigConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.id">Id</a></code> | <code>string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/sagemaker_app_image_config#id DataAwsccSagemakerAppImageConfig#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig {

};
```


### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig {

};
```


### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables {

};
```


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig {

};
```


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig {

};
```


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs {

};
```


### DataAwsccSagemakerAppImageConfigTags <a name="DataAwsccSagemakerAppImageConfigTags" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTags.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigTags {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.get"></a>

```csharp
private DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariables</a>

---


### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerArguments">ContainerArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEntrypoint">ContainerEntrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables">ContainerEnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerArguments`<sup>Required</sup> <a name="ContainerArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerArguments"></a>

```csharp
public string[] ContainerArguments { get; }
```

- *Type:* string[]

---

##### `ContainerEntrypoint`<sup>Required</sup> <a name="ContainerEntrypoint" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEntrypoint"></a>

```csharp
public string[] ContainerEntrypoint { get; }
```

- *Type:* string[]

---

##### `ContainerEnvironmentVariables`<sup>Required</sup> <a name="ContainerEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables"></a>

```csharp
public DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList ContainerEnvironmentVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigContainerEnvironmentVariablesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfig</a>

---


### DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference <a name="DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.containerConfig">ContainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerConfig`<sup>Required</sup> <a name="ContainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.containerConfig"></a>

```csharp
public DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference ContainerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigContainerConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig">DataAwsccSagemakerAppImageConfigCodeEditorAppImageConfig</a>

---


### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.get"></a>

```csharp
private DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariables</a>

---


### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerArguments">ContainerArguments</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEntrypoint">ContainerEntrypoint</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables">ContainerEnvironmentVariables</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerArguments`<sup>Required</sup> <a name="ContainerArguments" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerArguments"></a>

```csharp
public string[] ContainerArguments { get; }
```

- *Type:* string[]

---

##### `ContainerEntrypoint`<sup>Required</sup> <a name="ContainerEntrypoint" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEntrypoint"></a>

```csharp
public string[] ContainerEntrypoint { get; }
```

- *Type:* string[]

---

##### `ContainerEnvironmentVariables`<sup>Required</sup> <a name="ContainerEnvironmentVariables" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.containerEnvironmentVariables"></a>

```csharp
public DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList ContainerEnvironmentVariables { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigContainerEnvironmentVariablesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfig</a>

---


### DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference <a name="DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.containerConfig">ContainerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContainerConfig`<sup>Required</sup> <a name="ContainerConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.containerConfig"></a>

```csharp
public DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference ContainerConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigContainerConfigOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig">DataAwsccSagemakerAppImageConfigJupyterLabAppImageConfig</a>

---


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultGid">DefaultGid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultUid">DefaultUid</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.mountPath">MountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultGid`<sup>Required</sup> <a name="DefaultGid" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultGid"></a>

```csharp
public double DefaultGid { get; }
```

- *Type:* double

---

##### `DefaultUid`<sup>Required</sup> <a name="DefaultUid" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.defaultUid"></a>

```csharp
public double DefaultUid { get; }
```

- *Type:* double

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.mountPath"></a>

```csharp
public string MountPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfig</a>

---


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.get"></a>

```csharp
private DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecs</a>

---


### DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference <a name="DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fileSystemConfig">FileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.kernelSpecs">KernelSpecs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileSystemConfig`<sup>Required</sup> <a name="FileSystemConfig" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.fileSystemConfig"></a>

```csharp
public DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference FileSystemConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigFileSystemConfigOutputReference</a>

---

##### `KernelSpecs`<sup>Required</sup> <a name="KernelSpecs" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.kernelSpecs"></a>

```csharp
public DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList KernelSpecs { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigKernelSpecsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfigOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig">DataAwsccSagemakerAppImageConfigKernelGatewayImageConfig</a>

---


### DataAwsccSagemakerAppImageConfigTagsList <a name="DataAwsccSagemakerAppImageConfigTagsList" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.get"></a>

```csharp
private DataAwsccSagemakerAppImageConfigTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataAwsccSagemakerAppImageConfigTagsOutputReference <a name="DataAwsccSagemakerAppImageConfigTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Awscc;

new DataAwsccSagemakerAppImageConfigTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTags">DataAwsccSagemakerAppImageConfigTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTagsOutputReference.property.internalValue"></a>

```csharp
public DataAwsccSagemakerAppImageConfigTags InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSagemakerAppImageConfig.DataAwsccSagemakerAppImageConfigTags">DataAwsccSagemakerAppImageConfigTags</a>

---



